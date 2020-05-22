package main

import (
	"fmt"

	"github.com/gopherjs/gopherjs/js"
	"github.com/gopherjs/webgl"
)

const (
	frag = `
	#ifdef GL_ES
	precision mediump float;
	#endif

	uniform float u_time;
	uniform vec2 resolution;

	void main() {
		vec2 xy = gl_FragCoord.xy;
		xy.x = sin(xy.x/2.0);
		xy.y = cos(xy.y/3.0);
		gl_FragColor = vec4(xy.x, xy.y, 0.0, 1.0);
	}
`

	vert = `
	attribute vec4 a_position;

	void main() {
		gl_Position = a_position;
	}`
)

func main() {

	// #Create canvas full page size
	document := js.Global.Get("document")
	canvas := document.Call("createElement", "canvas")
	w := document.Get("body").Get("clientWidth")
	h := document.Get("body").Get("clientHeight")
	canvas.Set("width", w)
	canvas.Set("height", h)

	document.Get("body").Call("appendChild", canvas)

	attrs := webgl.DefaultAttributes()
	attrs.Alpha = false

	gl, err := webgl.NewContext(canvas, attrs)
	if err != nil {
		js.Global.Call("alert", "Error: "+err.Error())
	}
	gl.ClearColor(0, 0, 0, 0)
	gl.Clear(gl.COLOR_BUFFER_BIT)
	gl.Clear(gl.DEPTH_BUFFER_BIT)
	gl.Enable(gl.DEPTH_TEST)
	gl.DepthFunc(gl.LEQUAL)
	gl.Viewport(0, 0, w.Int(), h.Int())

	program := gl.CreateProgram()

	vertexShader := gl.CreateShader(gl.VERTEX_SHADER)
	gl.ShaderSource(vertexShader, vert)
	gl.CompileShader(vertexShader)
	gl.AttachShader(program, vertexShader)
	fmt.Println(gl.GetShaderParameter(vertexShader, gl.COMPILE_STATUS))
	fmt.Println(gl.GetShaderInfoLog(vertexShader))

	fragmentShader := gl.CreateShader(gl.FRAGMENT_SHADER)
	gl.ShaderSource(fragmentShader, frag)
	gl.CompileShader(fragmentShader)
	gl.AttachShader(program, fragmentShader)
	fmt.Println(gl.GetShaderParameter(fragmentShader, gl.COMPILE_STATUS))
	fmt.Println(gl.GetShaderInfoLog(fragmentShader))

	gl.LinkProgram(program)
	fmt.Println(gl.GetProgramInfoLog(program))
	gl.UseProgram(program)

	attribLocation := gl.GetAttribLocation(program, "a_position")
	buf := gl.CreateBuffer()
	gl.BindBuffer(gl.ARRAY_BUFFER, buf)
	gl.BufferData(gl.ARRAY_BUFFER, []float32{
		0.00, 0.00,
		1.00, 1.00,
		0.0, -1.0,
	}, gl.STATIC_DRAW)
	gl.EnableVertexAttribArray(attribLocation)
	gl.BindBuffer(gl.ARRAY_BUFFER, buf)
	gl.VertexAttribPointer(attribLocation, 2, gl.FLOAT, false, 0, 0)
	gl.DrawArrays(gl.TRIANGLES, 0, 3)
}

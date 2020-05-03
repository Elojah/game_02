package main

import (
	"fmt"

	"github.com/gopherjs/gopherjs/js"
	"github.com/gopherjs/webgl"
)

const (
	frag = `
precision mediump float;

#define GLSLIFY 1
// Common uniforms
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_frame;

/*
 * Random number generator with a vec2 seed
 *
 * Credits:
 * http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0
 * https://github.com/mattdesl/glsl-random
 */
highp float random2d(vec2 co) {
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt = dot(co.xy, vec2(a, b));
    highp float sn = mod(dt, 3.14);
    return fract(sin(sn) * c);
}

/*
 * The main program
 */
void main() {
    // Create a grid of squares that depends on the mouse position
    vec2 square = floor((gl_FragCoord.xy - u_mouse) / 30.0);

    // Give a random color to each square
    vec3 square_color = vec3(random2d(square), random2d(1.234 * square), 1.0);

    // Fragment shader output
    gl_FragColor = vec4(square_color, 1.0);
}`

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
		0.27, 0.65,
		0.74, 0.16,
		0.56, 0.21,
	}, gl.STATIC_DRAW)
	gl.EnableVertexAttribArray(attribLocation)
	gl.BindBuffer(gl.ARRAY_BUFFER, buf)
	gl.VertexAttribPointer(attribLocation, 2, gl.FLOAT, false, 0, 0)
	gl.DrawArrays(gl.TRIANGLES, 0, 3)
}

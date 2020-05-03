package main

import (
	"fmt"

	"github.com/gopherjs/gopherjs/js"
	"github.com/gopherjs/webgl"
)

const (
	frag = `
precision mediump float;

// this is the same variable we declared in the vertex shader
// we need to declare it here too!
varying vec2 vTexCoord;

void main() {

  // copy the vTexCoord
  // vTexCoord is a value that goes from 0.0 - 1.0 depending on the pixels location
  // we can use it to access every pixel on the screen
  vec2 coord = vTexCoord;

  // lets multiply the coordinates by a factor of 10
  coord *= 10.0;

  // use the fract function so that the values always fluctuate between 0 - 1
  // fract will return whatever number is to the right of the decimal point
  // it is built in to glsl
  coord = fract(coord);
  gl_FragColor = vec4(coord.x, coord.y, 0.5, 1.0 );
}`

	vert = `
// our vertex data
attribute vec3 aPosition;

// our texcoordinates
attribute vec2 aTexCoord;

// this is a variable that will be shared with the fragment shader
// we will assign the attribute texcoords to the varying texcoords to move them from the vert shader to the frag shader
// it can be called whatever you want but often people prefiv it with 'v' to indicate that it is a varying
varying vec2 vTexCoord;

void main() {

  // copy the texture coordinates
  vTexCoord = aTexCoord;

  // copy the position data into a vec4, using 1.0 as the w component
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  // send the vertex information on to the fragment shader
  gl_Position = positionVec4;
}`
)

func main() {
	document := js.Global.Get("document")
	canvas := document.Call("createElement", "canvas")
	document.Get("body").Call("appendChild", canvas)

	attrs := webgl.DefaultAttributes()
	attrs.Alpha = false

	gl, err := webgl.NewContext(canvas, attrs)
	if err != nil {
		js.Global.Call("alert", "Error: "+err.Error())
	}

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
}

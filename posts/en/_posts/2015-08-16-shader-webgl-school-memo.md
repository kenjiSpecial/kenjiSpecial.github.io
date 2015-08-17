---
layout: post
title:  "Shader in WebGL from WebGL School"
date:   2015-08-16
categories: [webgl]
---

This is meme when I studied WebGl Workshop.
https://github.com/stackgl/webgl-workshop

## GLSL
In WebGL, objects are rendered in parallel using programs called shaders, which are written in a high level language called GLSL

## Shader Objects

Shaders come in two different types.

- fragment shader.
- vertex shader.

### creating shaders

{% highlight javascript %}
//Create a fragment shader
var fragShader = gl.createShader(gl.FRAGMENT_SHADER)

//Create a vertex shader
var vertShader = gl.createShader(gl.VERTEX_SHADER)
{% endhighlight %}

### Uploading the source code

{% highlight javascript %}
gl.shaderSource(shader, "\
void main() {\
  gl_FragColor = vec4(1,0,0,1);\
}")
{% endhighlight %}


### compiling shader

{% highlight javascript %}
gl.shaderSource(shader, "\
void main() {\
  gl_FragColor = vec4(1,0,0,1);\
}")
{% endhighlight %}


##Program Objects
You need to link shaders together into a single program object which can be used to draw things

### creating program

{% highlight javascript %}
var program = gl.createProgram();
{% endhighlight %}

### Attaching the shader objects to the proogram

{% highlight javascript %}
gl.attachShader(program, fragShader)
gl.attachShader(program, vertShader)
{% endhighlight %}

### link the program

{% highlight javascript %}
gl.linkProgram(program)
{% endhighlight %}


## Using program

{% highlight javascript %}
gl.useProgram(program);
{% endhighlight %}

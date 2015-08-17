---
layout: post
title:  "Buffer in WebGL from WebGL Workshop"
date:   2015-08-17
categories: [webgl]
---

This is meme when I studied WebGl Workshop.


Github: [https://github.com/stackgl/webgl-workshop](https://github.com/stackgl/webgl-workshop)
Article: [http://localhost:14921/@exercise/buffer-create/](URL: http://localhost:14921/@exercise/buffer-create/)

## Buffer

## Buffer Creation

Vertex attributes are read from arrays of binary data called buffer.

{% highlight javascript %}
var buffer = gl.createBuffer(gl.ARRAY_BUFFER);
{% endhighlight %}

## Bind buffer to an active slot

Once a buffer has been created, we need to bind it so that we can upload data to the buffer and select attributes from it.

{% highlight javascript %}
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
{% endhighlight %}

## Upload data to buffer

{% highlight javascript %}
var data = new Float32Array([1,2,3,4,5,6])
gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW)
{% endhighlight %}

gl.bufferData(type, data, usageHint)
Uploads data to a buffer. type is the type of the buffer (for now gl.ARRAY_BUFFER). data is either a number representing the size of the buffer to reserve, or a typed array representing data to allocate. usageHint is a flag which has no semantic effect, but can be one of the following values:

- gl.DYNAMIC_DRAW
- gl.STREAM_DRAW
- gl.STATIC_DRAW

The behavior of usageHint is driver dependent and is only used for performance hints. gl.DYNAMIC_DRAW for buffers that are updated frequently, and gl.STATIC_DRAW for buffers that won't change, and gl.STREAM_DRAW for buffers that are created once and used once.

---
layout: post
title:  "Heart of Travel"
date:   2017-06-01
categories: "Client Work"
thumb: "/images/2017/aot/thumb.jpg"
---
<a href="https://www.southwestheartoftravel.com/awards/">https://www.southwestheartoftravel.com/awards/</a>

<div class="video-wrapper">
<iframe  src="https://www.youtube.com/embed/2Dr_0dwNDEU" frameborder="0" allowfullscreen></iframe>>
</div>

<div class="post-category">
<p class="post-title">ROLE:</p> 
<p class="post-value">WebGL Development</p>
</div>


<div class="post-category">
<p class="post-title">TECHNOLOGY:</p> 
<p class="post-value">JavaScript, Three.js, glsl</p>
</div>


<div class="post-category">
<p class="post-title">COMPANY:</p> 
<p class="post-value">Superhero Cheesecake</p>
</div>

<div class="post-description">
    <h4>Art Concept Prototype</h4>

    <p>Art Concept Prototype was developed by Josha Devis with processing. He made 2d art with geometry with animation in 3d space. animation is loop and data is eqaully randomized data. </p>
    <p>Client want to explore the stroke with closer distance when it start to draw in 3d space.</p>
    <p>we decided to make webgl artwork based on Joshu's idea. Camera for it and the strokes for the artwork generate dynamically with each customers data.</p>

    <h4>Artwork for every customer data</h4>

    <p>
    The custmers can printout out the artwork and play it on browser. I made several function whchih generated predefined random number with customer's data, 
    </p>
    <p>
    Some customer use more than 40 flights with same route like business trip, some people use only 2 or 4 flights. we seprated flight data into 4 category such as small, medium, large, and extra large. The stroke width for the artwork is bigger and it move more dynamically in small size. On the other hand, the stroke width for the artwork is smaller and it move less dynamically.
    </p>

    <h4>Camera animation</h4>
    <img src="/images/2017/aot/camera.gif" />
    <p>
    Camera animation is as important as how stroke generate in the intro page. Camera should animate dynamically and focus on the target stroke, but it should not rotate too much or cross several stroke not to make customers feel sick.
    </p>

    <h4>Performance</h4>
    <img src="/images/2017/aot/debug.gif" />
    <p>I rendered several transparent geometry without depth test. rendering several meshed with closer distance kill the performance. I calculate distance between camera and stroke before animation for artwork starts. some mesh fadeout, then remove from scene temporaly.</p>


    <h5>Related URLs</h5>
    <ul>
    <li><a href="https://thefwa.com/cases/heart-of-travel-p3">https://thefwa.com/cases/heart-of-travel-p3</a>
    </li>

    <li>
    <a href="http://superherocheesecake.com/work/south-west-airlines">http://superherocheesecake.com/work/south-west-airlines</a>
    </li>
    </ul>
</div>
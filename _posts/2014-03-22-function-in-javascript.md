---
layout: post
title:  "Function in JavaScript"
date:   2014-03-22
categories: [JavaScript]
---



This article is memo while I read  ["JavaScript Enlightment"](http://www.javascriptenlightenment.com/).

## Function in JavaScript
In JavaScript, almost everything is an object or acts like object. The JavaScript language contains nine native object containers.

- - Number()
- - String() 
- - Boolean()
- - Object()
- - Array()
- - Function()
- - Date()
- - RegExp()
- - Error()

A function is defined as the container of code statement that can be invoked using the parentheses () operator.
Below are the two way of making function.

{% highlight javascript %}
var addNumberA = function('num1', 'num2', 'return num1 + num2');
var numberA = addNumberA(1, 2); // output is 3

var addNumberB = function(a, b){
	return a + b;
}
var numberB = addNumberB(1, 2); // output is 3.
{% endhighlight %}

## Function() properties and method

The function object has the following properties.

<strong>properties</strong><br/>prototype

Function object instances have the following properties and methods.

<strong>Instance Properties</strong><br />
aruguments<br />
constructor<br />
length<br />

<strong>Instance Methods</strong><br />
apply()<br />
call()<br />
toString()

## Functions Are First-Class Citizens.
In Javascript, functions are object. This means that a function can be stored in a variable, array, or object. Also, a function can be passed to, and returned from, a fucntion.

A function has properties because it is an object.

All of these factors make functions first-class citizens in JavaScript.

##The arguments.callee Property

The argutments object has a propety called callee, which is a referrence to the function currently executing.</br>
This property can be used to referrence the function from the scope of the function - a self-referrence.

{% highlight javascript %}
var foo = function foo(){
	console.log(arguments.callee);
}
{% endhighlight %}


##Defining a function
A function can be defined in three different ways: a function constructor, a function statement, or a function expression.

{% highlight javascript %}
var case1 = new Function('x', 'y', 'return x + y');

function case2(x, y){
	return x + y;
}

var case3 = function(x, y){
	return x + y;
}

{% endhighlight %}

##Invoking a Function
Functions are invoked using four different ways.

- -As a function
- -As a method
- -As a constructor
- -Using apply() or call()<br/></br>



{% highlight javascript %}
// As a function
var functionPt = function(){
	return 'function patter';
}

// as a method
var methodPt = {
	myFuntion : funtion(){ return 'bar'; }
}

// as a constructor
var Cody = function(){
	this.living = true;
	this.age    = 33;
	this.gender = 'male';
	this.getGender = function(){
		this.gender;
	}
}

var cody = new Cody();
console.log(cody);

var greet = {
	runGreet : function(){
		console.log(this.name, arguments[0], arguments[1]);
	}
}

var cody = {name: 'cody'};

greet.runGreet.append(cody, ['run', 'walk']);

{% endhighlight %}




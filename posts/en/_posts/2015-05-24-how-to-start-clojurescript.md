---
layout: post
title:  "Install Mac Port, failed"
date:   2014-04-15
categories: [sudo port]
---

I installed Mac Port in my computer, but terminal(zsh) say 'not found command:port'.

I referred to the [site](http://stackoverflow.com/questions/9694395/sudo-port-command-not-found).

Finally I could used Mac Port.

After that, when you want to use mac port, you have to type.

{% highlight ruby %}
 source .profile
{% endhighlight %}

and then,

{% highlight ruby %}
 sudo port install clisp
{% endhighlight %}

Finally

{% highlight ruby %}
 clisp
{% endhighlight %}


## OR

The easiest way to use clisp is just add the lines below to .zshrc.

{% highlight ruby %}
export PATH=$PATH:/opt/local/bin
export MANPATH=$MANPATH:/opt/local/share/man
export INFOPATH=$INFOPATH:/opt/local/share/info
{% endhighlight %}

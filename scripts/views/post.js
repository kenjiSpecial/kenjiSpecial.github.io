(function(){
    var PostView = Backbone.View.extend({
        el : '#post-content',
        initialize : function(){
            var self = this;
            setTimeout(function(){
                self.el.style.opacity = 1;
            }, 200);
        }
    });

    var postView = new PostView();
})();
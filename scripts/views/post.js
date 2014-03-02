(function(){
    var PostView = Backbone.View.extend({
        el : '#post-content',
        initialize : function(){
            var self = this;
            setTimeout(function(){
                self.el.style.opacity = 1;
            }, 500);
        }
    });

    var postView = new PostView();
})();
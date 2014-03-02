(function(){
    var AboutView = Backbone.View.extend({
        el : '#about-content',
        initialize : function(){
            var self = this;
            setTimeout(function(){
                self.el.style.opacity = 1;
            }, 200);
        }
    });

    var aboutView = new AboutView();
})();
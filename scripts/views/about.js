(function(){
    var AboutView = Backbone.View.extend({
        el : '#about-content',
        initialize : function(){
            var self = this;
            setTimeout(function(){
                self.el.style.opacity = 1;
            }, 500);
        }
    });

    var aboutView = new AboutView();
})();
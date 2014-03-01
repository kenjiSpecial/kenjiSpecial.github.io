(function(){
    var HomeView = Backbone.View.extend({
        el : '#home-content',
        initialize : function(){
            var self = this;
            setTimeout(function(){
                self.el.style.opacity = 1;
            }, 500);
        }
    })

    var homeView = new HomeView();
})();

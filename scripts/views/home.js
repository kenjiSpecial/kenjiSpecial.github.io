(function(){
    var HomeView = Backbone.View.extend({
        el : '#home-content',
        clickStatus : false,
        events : {
            'click a' : 'onClickLink'
        },

        initialize : function(){
            var self = this;
            setTimeout(function(){
                self.el.style.opacity = 1;
            }, 500);
        },

        onClickLink : function(event){
            if(!this.clickStatus){
                this.clickStatus = true;
                var target = event.target;
                var link = target.href;

                this.el.style.opacity = 0;
                _.delay(function(){
                    window.location.assign(link);
                }, 1000);
            }

            event.preventDefault();
        }
    })

    var homeView = new HomeView();
})();

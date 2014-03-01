(function(){
    FastClick.attach(document.body);

    var NavView = Backbone.View.extend({
        el              : '#main-nav',
        navigation      : document.getElementById('nav-list'),
        $navigationUl   : $('#nav-ul'),
        svg             : document.getElementById('nav-icon-svg'),
        paper           : null,
        openStatus      : false,
        animationStatus : false,
        hoverStatus     : false,
        clickListStatus : false,

        $lis : [
            $('#li-home'), $('#li-about') , $('#li-category'), $("#li-archive")
        ],

        events: {
            "mouseenter #nav-icon" : 'onMouseEnterNavigationIcon',
            "mouseleave #nav-icon" : 'onMouseLeaveNavigationIcon',
            "click #nav-icon"      : "onClickNavigationIcon",
            "click #nav-ul a"      : 'onClickList'
        },

        initialize : function(){

            // create svg
            this.svg.style.width = '30px';
            this.svg.style.height = '24px';
            this.paper = new Snap('#nav-icon-svg');
            this.paperG = this.paper.g();

            this.paperLine1 = this.paper.line( 0, 2, 30, 2 );
            this.paperLine2 = this.paper.line( 0, 12, 30, 12 );
            this.paperLine3 = this.paper.line( 0, 22, 30, 22 );
            this.paperLine1.attr({
                stroke: "#333",
                strokeWidth: 4
            });
            this.paperLine2.attr({
                stroke: "#333",
                strokeWidth: 4
            });
            this.paperLine3.attr({
                stroke: "#333",
                strokeWidth: 4
            });

            this.paperG.add( this.paperLine1, this.paperLine2, this.paperLine3 );

            this.$navigationUl.css({rotateX: '90deg', y: '-600px', opacity: 0});

        },

        onMouseEnterNavigationIcon : function(event){
            this.hoverStatus = true;

            if(this.openStatus){
                this.paperLine1.animate({
                    stroke : '#fff'
                }, 300);

                this.paperLine2.animate({
                    stroke : '#fff'
                }, 300);

                this.paperLine3.animate({
                    stroke : '#fff'
                }, 300);
            }else{
                this.paperLine1.animate({
                    stroke : '#999'
                }, 300);

                this.paperLine2.animate({
                    stroke : '#999'
                }, 300);

                this.paperLine3.animate({
                    stroke : '#999'
                }, 300);
            }
        },


        onMouseLeaveNavigationIcon : function(event){
            this.hoverStatus = false;

            if(this.openStatus){
                this.paperLine1.animate({
                    stroke : '#ccc'
                }, 300);

                this.paperLine2.animate({
                    stroke : '#ccc'
                }, 300);

                this.paperLine3.animate({
                    stroke : '#ccc'
                }, 300);
            }else{
                this.paperLine1.animate({
                    stroke : '#333'
                }, 300);

                this.paperLine2.animate({
                    stroke : '#333'
                }, 300);

                this.paperLine3.animate({
                    stroke : '#333'
                }, 300);
            }

        },


        onClickNavigationIcon : function(){
            if(this.animationStatus || this.clickListStatus) return;
            var self = this;
            this.animationStatus = true;
            if(this.openStatus){
                this.openStatus = false;

                _.delay(function(){
                    self.el.classList.add('close');
                    self.el.classList.remove('open');
                }, 200);

                self.$navigationUl.transition({rotateX:'-45deg', y:'600px', opacity: 0}, 300, 'in', function(){
                    self.$navigationUl.css({rotateX: '90deg', y: '-600px', opacity: 0});
                });


                this.svgClose();
            }else{
                this.openStatus = true;

                this.el.classList.add('open');
                this.el.classList.remove('close');

                self.$navigationUl.transition({rotateX:'0', y:'0', opacity: 1}, 500, 'out');

                this.svgOpen();
            }
        },

        svgOpen : function(){
            var color;
            if(this.hoverStatus) color = '#fff';
            else                 color = '#ccc';

            var self = this;
            this.paperLine1.animate({
                x1: 15, x2: 15, y1: 2, y2: 22
            }, 150, mina.easeout);

            this.paperLine2.animate({
                x1: 15, x2: 15
            }, 150, mina.easeout);

            this.paperLine3.animate({
                x1: 15, x2: 15, y1: 22, y2: 2
            }, 150, mina.easeout);

            _.delay(function(){
                self.paperLine2.attr({
                    stroke: color
                });

                self.paperLine1.animate({
                    x1: 6, x2:24, y1: 4, y2: 20, stroke: color
                }, 300, mina.easein);

                self.paperLine3.animate({
                    x1: 6, x2: 24, y1: 20, y2: 4, stroke: color
                }, 300, mina.easein);
            }, 200);

            _.delay(function(){
                self.animationStatus = false;
            }, 500);
        },

        svgClose : function(){
            var color;
            if(this.hoverStatus) color = '#999';
            else                 color = '#333';

            var self = this;
            this.paperLine1.animate({
                x1: 15, x2: 15, y1: 2, y2: 2
            }, 100, mina.easeout);

            this.paperLine3.animate({
                x1: 15, x2: 15, y1: 22, y2: 22
            }, 100, mina.easeout);

            _.delay(function(){

                self.paperLine1.animate({
                    x1: 0, x2:30, y1: 2, y2: 2, stroke: color
                }, 200, mina.easein);

                self.paperLine2.animate({
                    x1: 0, y1: 12, x2: 30, y2: 12, stroke: color
                }, 200, mina.easein);

                self.paperLine3.animate({
                    x1: 0, y1: 22, x2: 30,y2: 22, stroke: color
                }, 200, mina.easein);
            }, 100);

            _.delay(function(){
                self.animationStatus = false;
            }, 500);
        },

        onClickList : function(event){
            if(!this.clickListStatus) {

                this.clickListStatus = true;

                var target = event.target;
                var href = target.href;
                var targetData = target.dataset;
                var targetDataAttribute = targetData.attribute;



                var windowHeight = window.innerHeight;
                switch (targetDataAttribute){
                    case 'home' :
                        this.$lis[0].addClass('selected');
                        this.$lis[1].transition({y: windowHeight, delay: 200}, 700, 'in-out');
                        this.$lis[2].transition({y: windowHeight, delay: 50}, 700, 'in-out');
                        this.$lis[3].transition({y: windowHeight}, 600, 'in-out');
                        break;
                    case 'about':
                        this.$lis[1].addClass('selected');
                        this.$lis[0].transition({y: -windowHeight, delay: 50}, 700, 'in-out');
                        this.$lis[2].transition({y: windowHeight, delay: 50}, 700, 'in-out');
                        this.$lis[3].transition({y: windowHeight}, 600, 'in-out');
                        break;
                    case 'category':
                        this.$lis[2].addClass('selected');
                        this.$lis[0].transition({y: -windowHeight}, 600, 'in-out');
                        this.$lis[1].transition({y: -windowHeight, delay: 50}, 700, 'in-out');
                        this.$lis[3].transition({y: windowHeight, delay: 50}, 700, 'in-out');
                        break;
                    case 'archive':
                        this.$lis[3].addClass('selected');
                        this.$lis[0].transition({y: -windowHeight}, 600, 'in-out');
                        this.$lis[1].transition({y: -windowHeight, delay: 50}, 700, 'in-out');
                        this.$lis[2].transition({y: -windowHeight, delay: 200}, 700, 'in-out');

                        break;
                }

                $("#nav-list").transition({background: '#ffffff', opacity: 1, delay: 200}, 800);

                this.svgClose();

                _.delay(function(){
                    window.location.assign(href);
                }, 1000)
            }

            event.preventDefault();
        }

    });


    var navView = new NavView();

})();
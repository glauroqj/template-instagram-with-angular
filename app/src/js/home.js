requirejs.config({
	name: 'app',
	baseUrl: 'app/dist/libs',
	shim : {
		owl_carousel : {
			deps : [ 'jquery' ],
			exports : 'owl_carousel'
		}

	},
	paths : {
		jquery : 'jquery.min',
		owl_carousel : 'owl.carousel.min',
		scrollreveal : 'scrollreveal.min'
	}
});

require(['jquery'], function ($) {

});/* end-require */
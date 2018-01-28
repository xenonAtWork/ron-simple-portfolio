(function(){
  "use strict";

	mainApp.config(function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider.state('home', {
			url: '/home',
		    templateUrl: 'app/home/views/home.html'
		});

		$stateProvider.state('burger', {
			url: '/burger',
		    templateUrl: 'app/burger/views/burger.html'
		});

	});

})();
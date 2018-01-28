(function(){
  "use strict";
  	console.info('directive');
	mainApp.directive("burgerItem", function(){

		return {
			restrict: 'E',
			templateUrl: 'app/burger/views/burgeritem.html'
		};
	});
})();
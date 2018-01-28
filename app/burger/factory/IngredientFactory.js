(function(){
  "use strict";
  
	mainApp.factory('IngredientFactory', ['IngredientModel', function(IngredientModel) {
		var mockIngredients = [
			{
				title: "Bun",
				desc: "The quality soft bread that is not chewy."
			},
			{
				title: "Patty",
				desc: "Mouth Watering 100% pure beef."
			},
			{
				title: "Cheese",
				desc: "Yummy Mozarella cheese."
			},
			{
				title: "Tomato",
				desc: "The friendly fruit that is good for your skin."
			},
			{
				title: "Coleslaw",
				desc: "Not just for vegan."
			},
			{
				title: "Onion",
				desc: "Sliced by ninjas sometimes."
			}
		];


		// ########### PUBLIC FUNCTIONS ###########
		function getIngredients() {
			var ingredients = createIngredients();
			return angular.copy(ingredients);
		};


		// ########### PRIVATE FUNCTIONS ###########
		function createIngredients() {
			var ingredients = [];

			angular.forEach(mockIngredients, function(item, i) {
				var ingredient = IngredientModel.createModel(item.title, item.desc);
				ingredients.push(ingredient);
			});

			return ingredients;
		};

		return {
			getIngredients: getIngredients
		};
	}]);
})();
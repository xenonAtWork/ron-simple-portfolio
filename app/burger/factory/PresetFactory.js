(function(){
  "use strict";
  
	mainApp.factory('PresetFactory', ['PresetModel', function(PresetModel) {
		var classicBurgerContents = ["Bun", "Patty", "Bun"];
		var cheeseBurgerContents = ["Bun", "Patty", "Cheese", "Bun"];
		var doubleDeckerContents = ["Bun", "Patty", "Coleslaw", "Bun", "Patty", "Tomato", "Cheese", "Bun"];
		var veganContents = ["Bun", "Onion", "Coleslaw", "Cheese", "Tomato", "Coleslaw", "Bun"];
		var lockjawContents = ["Bun", "Coleslaw", "Onion", "Coleslaw", "Patty", "Patty", "Coleslaw", "Bun", "Patty", "Coleslaw", "Tomato", "Cheese", "Bun"];
		

		// ########### PUBLIC FUNCTIONS ###########
		function getPresets() {
			return createPresets();
		};

		// ########### PRIVATE FUNCTIONS ###########
		function createPresets() {
			var classicBurger = PresetModel.createModel("Classic Burger", classicBurgerContents);
			var cheeseBurger = PresetModel.createModel("Cheese Burger", cheeseBurgerContents);
			var doubleDecker = PresetModel.createModel("Double Decker", doubleDeckerContents);
			var vegan = PresetModel.createModel("Vegan", veganContents);
			var lockjaw = PresetModel.createModel("Lockjaw", lockjawContents);

			var presets = [];
			presets.push(classicBurger);
			presets.push(cheeseBurger);
			presets.push(doubleDecker);
			presets.push(vegan);
			presets.push(lockjaw);

			return presets;
		};

		return {
			getPresets: getPresets
		};
	}]);
})();
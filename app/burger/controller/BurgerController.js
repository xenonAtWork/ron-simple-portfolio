(function(){
  "use strict";

	mainApp.controller("BurgerController", ['IngredientFactory', 'StackFactory', 'PresetFactory', '$rootScope', 
		function(IngredientFactory, StackFactory, PresetFactory, $rootScope, $scope) {
		
			// ########### INIT ###########
			$rootScope.activeNav = "Burger";
			
			var vm = this;

			vm.stack = null;
			vm.ingredients = null;
			vm.presets = null;
			vm.selectedPreset = null;
			vm.selectedPresetName = null;

			// ########### FUNCTIONS BINDING ###########
			vm.addToStack = addToStack;
			vm.removeFromStack = removeFromStack;
			vm.presetSelected = presetSelected;
			vm.clearStack = clearStack;


			// ########### ONLOAD ###########
			onload();


			// ########### PUBLIC FUNCTIONS ###########
			function addToStack(ingredientName) {
				vm.stack = StackFactory.addToStack(vm.stack, ingredientName);
			};

			function removeFromStack(index) {
				vm.stack = StackFactory.removeFromStack(vm.stack, index);
			};

			function presetSelected(preset) {
				if (preset) {
					vm.selectedPreset = preset;
					vm.selectedPresetName = vm.selectedPreset.name;
					vm.stack = vm.selectedPreset.contents;

					console.info('vm.selectedPreset: ', vm.selectedPreset);
				} else {
					clearStack();
				}
			};

			function clearStack() {
				vm.selectedPreset = null;
				vm.selectedPresetName = null
				vm.stack = StackFactory.clearStack();
			};

			// ########### PRIVATE FUNCTIONS ###########
			function onload() {
				getIngredients();
				getPresets();
			};

			function getIngredients() {
				vm.ingredients = IngredientFactory.getIngredients();
				console.info('vm.ingredients: ', vm.ingredients);
			};

			function getPresets() {
				vm.presets = PresetFactory.getPresets();
				console.info('vm.presets: ', vm.presets);
			};			

	}]);
})();
(function(){
  "use strict";

	mainApp.factory('IngredientModel', function() {
		var model = {
			name: null,
			description: null
		};

		// ########### PUBLIC FUNCTIONS ###########
		function createModel(name, description) {
			var newModel = angular.copy(model);
			newModel.name = name;
			newModel.description = description;

			return newModel;
		};


		return {
			createModel: createModel
		};
	});
})();
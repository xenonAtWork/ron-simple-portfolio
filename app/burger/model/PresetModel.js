(function(){
  "use strict";

	mainApp.factory('PresetModel', function() {
		var model = {
			name: null,
			contents: null
		};

		// ########### PUBLIC FUNCTIONS ###########
		function createModel(name, contents) {
			var newModel = angular.copy(model);
			newModel.name = name;
			newModel.contents = contents;

			return newModel;
		};


		return {
			createModel: createModel
		};
	});
})();
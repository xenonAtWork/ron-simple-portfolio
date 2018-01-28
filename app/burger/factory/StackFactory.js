(function(){
  "use strict";
  
	mainApp.factory('StackFactory', [function() {

		// ########### PUBLIC FUNCTIONS ###########
		function addToStack(stack, ingredientName) {

			var newStack;

			if (stack) {
				newStack = angular.copy(stack);
			} else {
				newStack = createStack();
			}
			
			newStack.push(ingredientName);
			console.info('newStack: ', newStack);
			return newStack;
		};

		function removeFromStack(stack, index) {
			var newStack = createStack();
			var reverseStack = stack.slice().reverse();

			angular.forEach(reverseStack, function(item, i) {
				if (index === i) {
					console.info('ignoring ' + item);
				} else {
					newStack.push(item);
				}
			});

			var newReverseStack = newStack.slice().reverse();
			return newReverseStack;
		};

		function clearStack(stack) {
			stack = createStack();
			return stack;
		};

		// ########### PRIVATE FUNCTIONS ###########
		function createStack() {
			return [];
		};

		return {
			addToStack: addToStack,
			removeFromStack: removeFromStack,
			clearStack: clearStack
		};
	}]);
})();
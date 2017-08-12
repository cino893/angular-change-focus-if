// Description
// change-focus="expression"
// if expression is true focus keybord input on closest input - also seeking in children elemnts
(function () {
    'use strict';
    var directiveSelector = 'changeFocusIf';
    angular
        .module('changeFocus',[])
        .directive(directiveSelector, ['$parse', '$timeout', function ($parse, $timeout) {
            var thisDirective = this;
            return {
                restrict: 'A',
                link: link
            }
            function link(scope, element, attrs) {
                var attributeValue = $parse(attrs[directiveSelector]);

                scope.$watch(attributeValue, function (newValue) {
                    if (newValue) {
                        var elementToFocusOn = element[0];
                        if (elementToFocusOn.tagName.toLowerCase() !== 'input') {
                            elementToFocusOn = elementToFocusOn.querySelector('input');
                            if (!elementToFocusOn)
                                throw new Error('No input found in ' + directiveSelector + ' directive!');
                        }
                        $timeout(function () { elementToFocusOn.focus() });
                    }
                });
            }
        }]);

})();
# change-focus-if
My first repo after learning web development for 2 months.
I didn't found any NG build option to do that so I wrote it by myself.

## So this is:
Simple AngularJS directive that allow to change focus to closest input in or inside HTMLElement prototype if statement is true on inicialization or will change from false to true to trigger $watch

## Samples of use:
### In element(controller as vm):
```<input change-focus-if="vm.siteAnimationStopped" />```
### In nested element(controller as vm):
```<my-element-directive change-focus-if="vm.preveriousInputFilled"></my-element-directive>```
```
.directive('myElementDirective', function(){
  return{
    restrict: 'E',
    template: `<div>
                    <div>
                         <input />
                    </div>
               </div>`
  }
}
```

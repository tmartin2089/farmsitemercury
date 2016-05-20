var document = require('global/document');
//index is basically just the modules being used
//you can pick and choose as needed
var mercury = require('mercury');
var hg = require('mercury').hg;
//im the render method
var More = module.exports;
var h = require('mercury').h;

// function appRender(state) {
//     return h('div', [
//         h('.header', [
//             h('.my-logo')
//         ])
//     ])
// }

More = function(){
	return h('div', [
        h('.header', [
            h('.my-logo')
        ])
    ])
}
'use strict';

var document = require('global/document');
//index is basically just the modules being used
//you can pick and choose as needed
var hg = require('../mercuryindex.js');
//im the render method
var h = require('../mercuryindex.js').h;



//app seems to be used for state.
function App() {
    //state
    return hg.state({
        value: hg.value(0),
        channels: {
            clicks: incrementCounter
        }
    });
}

function incrementCounter(state) {
    state.value.set(state.value() + 1);
}

App.render = function render(state) {
    return h('div.col-md-12.col-md-8', [
        'The state ', h('code', 'clickCount'),
        ' has value: ' + state.value + '.', h('input.button', {
            type: 'button',
            value: 'Click me!',
            'ev-click': hg.send(state.channels.clicks)
        })
    ]);
};

//this actually renders to the document - you can
//specify where you want it to go
//
//function app(elem, observ, render, opts)
hg.app(document.body, App(), App.render);


//count has no opinion on where it is actually
//rendered

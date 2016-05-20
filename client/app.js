var mercury = require('mercury');
  var h = require('mercury').h;
  var anchor = require('mercury-router/anchor');
  var routeView = require('mercury-router/route-view');
  var Router = require('mercury-router');
 
  function App() {
    var state = mercury.struct({
      route: Router()
    });
    return state;
  }
 
  mercury.app(document.body, App(), render);
 
  function render(state) {
    return h('div', [
      menu(),
      routeView({
        '/': require('./components/more'),
        '/more' : require('./components/more')
      }, { route: state.route })
    ])
  }
 
  function menu() {
    return h('ul', [
      h('li', [
        anchor({
          href: '/'
        }, 'Home')
      ]),
      h('li', [
        anchor({
          href: '/animals'
        }, 'Animals')
      ])
    ])
  }
var m = require('mercury');


var FarmSite = require('./components/FarmSite');

m.route(document.getElementById('app'), '/', {
  '/': FarmSite
});
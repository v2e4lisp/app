/**
 * This JS is only a firs release while testing
 * dynamic build of components for nodejs with
 * express.
 *
 * This should in near future adopt the same
 * developing architecture as
 *
 * http://github.com/component/component.io
 *
 * and
 *
 * http://github.com/hunterloftis/component-test
 *
 * It.
 */

var page = require('page');
var timeago = require('timeago');
var translations = require('translations');
var t = require('t');


/**
 * Load translations to
 * translation application
 */

translations.help(t);

/**
 * Mount applications.
 */

require('homepage');
require('proposal');

/**
 * Auth routes
 */

page('/auth/facebook', function(ctx, next) {
  window.location.replace(ctx.path);
});

page('/logout', function(ctx, next) {
  window.location.replace(ctx.path);
});

/**
 * Init `timeago` component with
 * locale as `es`
 */

timeago('.ago', { lang: 'es', interval: 10 });

/**
 * Render not found page.
 */

page('*', function(ctx, next) {
  console.log('Should render Not found.');
});

/**
 * Init page.js
 */

page();
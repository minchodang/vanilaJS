// template
const homeTemplate = require('./src/pages/home.hbs');
const aboutTemplate = require('./src/pages/about.hbs');
const mainTemplate = require('./src/pages/main.hbs');

const Home = homeTemplate();
const About = aboutTemplate();
const Main = mainTemplate();

const routes = {
  '/': Main,
  '/home': Home,
  '/about': About,
};

// entry point
function initialRoutes(mode, el) {
  console.log(mode, el, window.location.pathname, '라우팅 어려움...');
  renderHTML(el, routes['/']);
  if (mode === 'history') {
    if (window.location.pathname === '/') {
      renderHTML(el, routes['/']);
    } else if (window.location.pathname === '/about') {
      renderHTML(el, routes['/about']);
    } else {
      renderHTML(el, routes['/home']);
    }
  }
}
// set browser history
function historyRouterPush(pathName, el) {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(el, routes[pathName]);
}

// get hash history route
// function getHashRoute() {
//   let route = '/';

//   Object.keys(routes).forEach((hashRoute) => {
//     if (window.location.hash.replace('#', '') === hashRoute.replace('/', '')) {
//       route = routes[hashRoute];
//     }
//   });

//   return route;
// }

// set hash history
// function hashRouterPush(pathName, el) {
//   renderHTML(el, getHashRoute());
// }

// render
function renderHTML(el, route) {
  el.innerHTML = route;
}

module.exports = {
  initialRoutes,
  historyRouterPush,
  //hashRouterPush,
};

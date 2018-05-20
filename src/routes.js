module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/AllRooms');

  $stateProvider
    .state('AllRooms', {
      url: '/AllRooms',
      component: 'allRooms'
    })
    .state('AllSwitchBoards', {
      url: '/AllSwitchBoards',
      component: 'allSwitchBoards'
    })
    .state('AllSwitches', {
      url: '/AllSwitches',
      component: 'allSwitches'
    })
    .state('CreateRoom', {
      url: '/CreateRoom',
      component: 'createRoom'
    })
    .state('CreateSB', {
      url: '/CreateSB',
      component: 'createSB'
    })
    ;
}

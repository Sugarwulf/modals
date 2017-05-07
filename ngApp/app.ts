namespace modals {

    angular.module('modals', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: modals.Controllers.HomeController,
                controllerAs: 'controller'
            })
        //     .state('dialog', {
        //         url: '/dialog',
        //         templateUrl: 'ngApp/views/dialog.html',
        //         controller: modals.Controllers.DialogController,
        //         controllerAs: 'controller'
        //     })
        //     .state('notFound', {
        //         url: '/notFound',
        //         templateUrl: '/ngApp/views/notFound.html'
        //     });
        //
        // // Handle request for non-existent route
        // $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        //$locationProvider.html5Mode(true);
    });



}

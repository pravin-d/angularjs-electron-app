var require = {
    baseUrl: 'app',
    paths: {
        'jquery': '../node_modules/jquery/dist/jquery.min',
        'angular': '../node_modules/angular/angular.min',
        'ui-router': '../node_modules/angular-ui-router/release/angular-ui-router.min',
        'angular-local-storage': '../node_modules/angular-local-storage/dist/angular-local-storage.min',
        'bootstrap': '../node_modules/bootstrap/dist/js/bootstrap.min',
        'ui-bootstrap': '../node_modules/angular-ui-bootstrap/ui-bootstrap-tpls.min',
        'ng-loading-overlay': '../node_modules/ng-loading-overlay/src/ng-loading-overlay.min',
        'metis': '../node_modules/metismenu/dist/metisMenu.min'
    },
    shim: {
        'metis': {
            deps: ['jquery']
        },
        'angular': {
            exports: 'angular',
            deps: ['metis']
        },
        'ui-router': {
            deps: ['angular']
        },
        'angular-local-storage': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'ui-bootstrap': {
            deps: ['angular', 'jquery', 'bootstrap'],
            exports: 'uibs'
        },
        'ng-loading-overlay': {
            deps: ['angular']
        }
    },
    priority: [
        'angular',
        'ui-bootstrap',
        'metis'
    ]
};

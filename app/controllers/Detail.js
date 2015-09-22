define([
    'app',
    'services/gitlab',
    'directives/loadingSpinner'
], function (app) {
    'use strict';

    app.controller('DetailCtrl', [
        '$q',
        '$location',
        '$state',
        '$scope',
        '$modalInstance',
        'localStorageService',
        'gitlabService',
        'id',
        function ($q, $location, $state, $scope, $modalInstance, localStorageService, gitlabService, id) {
            $scope.isLoading = true;
            gitlabService.getProject(id).then(function (res) {
                $scope.project = res;
            }).finally(function () {
                $scope.isLoading = false;
            });

            $scope.cancel = function () {
                $modalInstance.dismiss();
            };
        }
    ]);
});

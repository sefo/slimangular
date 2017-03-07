function innerService($http) {
    this.getUtilisateurs = function getUtilisateurs() {
        return $http.get('/api/utilisateurs');
    };
}

angular
    .module('app')
    .service('innerService', innerService);
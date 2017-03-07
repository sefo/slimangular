var inner = {
    bindings: {},
    controller: innerController,
    templateUrl: 'angular/components/inner/inner.template.html'
};

function innerController(innerService) {

    var vm = this;

    this.value = 'value';
    this.utilisateurs = [];

    innerService.getUtilisateurs().then(function(response) {
        vm.utilisateurs = response.data;
    });
}

angular
    .module('app')
    .component('inner', inner)
    .controller('innerController', innerController);
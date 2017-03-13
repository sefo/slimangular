var inner = {
    bindings: {},
    controller: innerController,
    templateUrl: 'angular/components/inner/inner.template.html'
};

function innerController(innerService, $mdDialog) {

    var vm = this;

    this.value = 'dynamic value';
    this.utilisateurs = [];

    this.showAlert = showAlert;

    innerService.getUtilisateurs().then(function(response) {
        vm.utilisateurs = response.data;
    });

    function showAlert() {
        $mdDialog.show(
            $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('This is an alert title')
            .textContent('You can specify some description text in here.')
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
        );
    }
}

angular
    .module('app')
    .component('inner', inner)
    .controller('innerController', innerController);
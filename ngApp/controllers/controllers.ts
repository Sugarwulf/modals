namespace modals.Controllers {

    export class HomeController {

        public showModal(fighterName:string) {
          this.$uibModal.open({
            templateUrl: 'ngApp/views/dialog.html',
            controller: 'DialogController',
            controllerAs: 'modal',
            resolve: {
              fighterName: () => fighterName
            },
            size: 'sm'
          });
        }

        constructor(private $uibModal:angular.ui.bootstrap.IModalService) { }
    }
angular.module('modals').controller('HomeController', HomeController);

class DialogController {

  public ok() {
    this.$uibModalInstance.close();
  }
constructor(public fighterName: string, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) { }
}

angular.module('modals').controller('DialogController', DialogController);


}

angular.module('quoteBook').controller('MainController', function($scope, dataService) {

// assigning the functions from service to the scope object
$scope.quotes = dataService.getData();
$scope.addData = dataService.addData;
$scope.removeData = dataService.removeData;


});  // end of controller function

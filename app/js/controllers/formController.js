app.controller('formController', ['$scope', '$http', function($scope, $http) {
  $scope.formData = {};

  $scope.processForm = function() {
    $http({
      method  : 'POST',
      url     : 'app/contact.php',
      data    : $.param($scope.formData),  // pass in data as strings
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
    })
    .success(function(data) {
      console.log(data);

      if (!data.success) {
        // if not successful, bind errors to error variables
        $scope.errorName = data.errors.name;
        $scope.errorEmail = data.errors.email;
      } else {
        // if successful, bind success message to message
        $scope.message = data.message;
        $scope.formData = {};
        $scope.contact.$setUntouched();
        $scope.contact.$setPristine();
      }
    });

  };
  $scope.checkName = function() {
      if($scope.formData.name.length > 0) {
        $scope.errorName = '';
      }
  }
}]);
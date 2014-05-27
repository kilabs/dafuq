var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
  $scope.formData = {};

  // when landing on the page, get all todos and show them
  $http.get('/api')
    .success(function(data) {
      $scope.vote = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  // when submitting the add form, send the text to the node API
  $scope.createTodo = function(e) {
    $http.post('/api', {
      text: e
    })
      .success(function(data) {
        console.log(e);
        $scope.formData = {}; // clear the form
        $scope.todos = data;
      })
      .error(function(data) {
        console.log('Error: ' + $http.post);
      });
  };

  // delete a todo after checking it
  $scope.deleteTodo = function(id) {
    $http.delete('/api/todos/' + id)
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

}

function usersCtrl($http){
  var ctrl = this;
  ctrl.login="salcoyot";

  $http({
  method: 'GET',
  url: 'https://api.github.com/users/salcoyot/followers'
  }).then(function successCallback(response) {
      ctrl.lista= response.data;
      console.log(response.data);
    }, function errorCallback(response) {
      console.log(response);
  });
  ctrl.Search = function(name){
    ctrl.login=name;
    console.log("Search: "+ name );
    $http({
    method: 'GET',
    url: 'https://api.github.com/users/'+name+'/followers'
    }).then(function successCallback(response) {
        ctrl.lista= response.data;
        console.log("Correcto");
        console.log(response.data);
      }, function errorCallback(response) {
        console.log("Error");
        console.log(response);
    });

  }
  ctrl.Back = function(){
    ctrl.login="salcoyot";
    $http({
    method: 'GET',
    url: 'https://api.github.com/users/salcoyot/followers'
    }).then(function successCallback(response) {
        ctrl.lista= response.data;
        console.log(response.data);
      }, function errorCallback(response) {
        console.log(response);
    });
  }
}

app.component('userList',{
    templateUrl: 'userList.html',
    controller: usersCtrl,
    bindings: {
      user : '='
    }
});

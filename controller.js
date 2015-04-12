var tableApp = angular.module('tableApp',[]);

/*
 * Table data model is represented in a 2d array of json objects.
 * The object is a cell's value and multiplier. 	
 *
 * */
tableApp.controller('tableController', function($scope){
  var array = [];

  //default model 
  var json = 
  [{'multiplier':1, 'value':0},
  {'multiplier':2, 'value':0},
  {'multiplier':3, 'value':0},
  {'multiplier':4, 'value':0},
  {'multiplier':5, 'value':0},
  {'multiplier':6, 'value':0}];

array.push(json);
$scope.data = array;

//event wiring. When cell text changes, check row index. If last row, append new model to data.
$scope.cellEdit = function(index){

  if(index == $scope.data.length -1){

    var json = 
      [{'multiplier':1, 'value':0},
    {'multiplier':2, 'value':0},
    {'multiplier':3, 'value':0},
    {'multiplier':4, 'value':0},
    {'multiplier':5, 'value':0},
    {'multiplier':6, 'value':0}];
    $scope.data.push(json);
  }

}

});


/*filter that totals rows and columns.
 * the direction param signifies which direction (row or column) to traverse the 2d array. 
 * the index marks which row/column the total is being applied to.
 */
tableApp.filter('total', function(){

  return function(data, index, direction){


    var total = 0;

    if(direction){
      var length = data[index].length;
      for(var i = 0; i < length; i++){

	var item = data[index][i];
	total += (item.multiplier * item.value);
      }
    }else{
      var length = data.length;
      for(var i = 0; i < length; i++){

	var item = data[i][index];
	total += (item.multiplier * item.value);
      }

    }

    return total;
  }
});

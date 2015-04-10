var tableApp = angular.module('tableApp',[]);

tableApp.controller('tableController', function($scope){
  var array = [];
  //$scope.data.push(json)
    var json = 
  [{'multiplier':1, 'value':undefined},
  {'multiplier':2, 'value':undefined},
  {'multiplier':3, 'value':undefined},
  {'multiplier':4, 'value':undefined},
  {'multiplier':5, 'value':undefined},
  {'multiplier':6, 'value':undefined}];

  array.push(json);
  $scope.data = array;

$scope.cellFocus = function(index){

  if(index == $scope.data.length -1){

    var json = 
  [{'multiplier':1, 'value':undefined},
  {'multiplier':2, 'value':undefined},
  {'multiplier':3, 'value':undefined},
  {'multiplier':4, 'value':undefined},
  {'multiplier':5, 'value':undefined},
  {'multiplier':6, 'value':undefined}];
    $scope.data.push(json);
  }

}



});

tableApp.filter('total', function(){

  return function(data, index, direction){


    var total = 0;
    //totalByOrientation = function(cellTotal){


    if(direction){
      var length = data[index].length;
      for(var i = 0; i < length; i++){
	
	var item = data[index][i];
	if(item.value != undefined){
	  total += (item.multiplier * item.value);
	}
      }
    }else{
      var length = data.length;
      for(var i = 0; i < length; i++){
	var item = data[i][index];
	if(item.value != undefined){
	  total += item.value;
	}

	
      }

    }
    
    //var i = data.length;
    /*
    while(i--){
      var row = data[i];
      var j = row.length;
      while(j--){
	var col = row[j];
	//total += (col[i].multiplier * col[i].value);
      }
    }*/
    

    return total;
  }

  });



var json = [{'multiplier':1, 'value':undefined},
    {'multiplier':2, 'value':undefined},
    {'multiplier':3, 'value':undefined},
    {'multiplier':4, 'value':undefined},
    {'multiplier':5, 'value':undefined},
    {'multiplier':6, 'value':undefined}];

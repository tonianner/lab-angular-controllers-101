angular.module('MuseumApp',[])
.controller('ExhibitCtrl', ExhibitFunction)

function ExhibitFunction ($scope){
  $scope.image = 'http://blogs.uoregon.edu/rreidaad250/files/2014/05/art-auction-10e3hqz.jpg'
  $scope.width = '600px'
  $scope.title = 'The Trees'
  $scope.author = 'Toni'
}


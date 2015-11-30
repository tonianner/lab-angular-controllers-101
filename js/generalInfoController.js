angular.module('MuseumApp')
  .controller('GeneralInfoController', GeneralInfoController)

function GeneralInfoController ($scope){
  $scope.hours = {
    Monday:     "7:00am-9:00pm",
    Tuesday:    "7:00am-9:00pm",
    Wednesday:  "7:00am-9:00pm",
    Thursday:   "7:00am-9:00pm"
  };
  $scope.admission = {
    Adults: "$35",
    Child:  "$20",
    Senior: "$15"
  }
}

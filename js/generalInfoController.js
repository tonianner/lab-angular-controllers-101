angular.module('MuseumApp', [])
.controller('HoursCntrl', HoursFunction)

function HoursFunction (){
  $scope.hours = [
    {day: "Monday", time: "7:00am-9:00pm"},
    {day: "Tuesday", time: "7:00am-9:00pm"},
    {day: "Wednesday", time: "7:00am-9:00pm"},
    {day: "Thursday", time: "7:00am-9:00pm"}
  ]
}
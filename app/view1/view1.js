'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.directive('ceSchedular', function() {
  return {
    replace: true,
    template: '<div id="calendar"></div>',
    link: function(scope, element, attrs, controller) {
      var counter = 0;
      var myEvents = [
        {
          title: 'Blah Blah',
          start: '2018-04-11T16:00:00',
          end: '2018-04-11T16:30:00',
          allDay : false // will make the time show 
        },
        {
          title: 'Ra\'s Al Ghul',
          start: '2018-04-12T16:00:00',
          end: '2018-04-12T16:30:00',
          allDay : false // will make the time show 
        },
        {
          title: 'Talia Al Ghul',
          start: '2018-04-12T16:30:00',
          end: '2018-04-12T17:00:00',
          allDay : false // will make the time show 
        }
      ];
      element.fullCalendar({
        weekends: false,
        editable: true,
        nowIndicator: true,
        slotDuration: '00:30:00',
        events: myEvents,
        header: {
          center: 'agendaDay,agendaWeek,month,list,listWeek'
        },
        defaultView: 'agendaWeek',
        views: {
          listWeek :{
            buttonText: 'List Week'
          },
          month: {
            buttonText: 'Month'
          },
          list: {
            buttonText: 'List Day'
          },
          basic: {
            // options apply to basicWeek and basicDay views
          },
          agenda: {
            allDaySlot: false,
            minTime: '15:00:00',
            maxTime: '19:00:00',
            eventDurationEditable: false
            // options apply to agendaWeek and agendaDay views
          },
          agendaDay: {
            buttonText: 'Day Agenda'
          },
          agendaWeek: {
            buttonText: 'Week Agenda'
          },
          day: {
            // options apply to basicDay and agendaDay views
          }
        },

        // Event Listeners
        dayClick: function(date, jsEvent, view, resourceObj) {
          console.log('Clicked on: ' + date.format());

          console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
      
          console.log('Current view: ' + view.name);

          element.fullCalendar('addEventSource', [
            {
              start: date,
              end: moment(date).add('30', 'minutes'),
              allDay: false,
              title: 'Choice ' + counter++,
              color: 'red'
            }
          ]);
    
        },
        eventDrop: function(event, delta, revertFunc) {
          console.log(event.title + ' was dropped on ' + event.start.format());
        }
      });
    }
  };
})

.controller('View1Ctrl', [function() {
}]);
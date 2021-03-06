import timeGridPlugin from '@fullcalendar/timegrid';
import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit, ViewChildren , AfterContentInit} from '@angular/core';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, {Draggable} from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventsService } from '../events.service';
import listPlugin from '@fullcalendar/list';
import { MatDialog} from '@angular/material';
import { ChoosePeopleMachinesComponent } from '../choose-people-machines/choose-people-machines.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { HtmlParser } from '@angular/compiler';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit, AfterViewInit , AfterContentInit {

  constructor(private eventservice: EventsService,
              public dialog: MatDialog,
              public element: ElementRef,
              public search: SearchServiceService) { 
}

myEvents = new BehaviorSubject([]);

  rerender:boolean;
  options: OptionsInput;
  events: any;
  lists: any;
  displayEvent: any;
  listings:any;
  popUp: any;
  selections: any;
  testEvent: any;
  view: any;
  scheduleComponentReady: boolean;
  editable: boolean;
  eventsWithFilter: any;
  holiday: any;
  isbackground = '';
  isAllDay = false;
  overLapAllowed = true;
  

  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;
  @ViewChild('dropremove') checkbox: any;
  @ViewChild('externalevents') containerEl: any;
  @ViewChildren('draggableel') draggable: any;
  

  ngOnInit() {
    this.editable=true;
    this.rerender=true;
    this.scheduleComponentReady=false;

    this.testEvent = "4:00:00";
    this.options = {
      editable: this.editable,
      // defaultView: data,
      // defaultDate: dates,
      allDayDefault: false,
      aspectRatio:2.25,
      allDayText:"All Day",
      slotDuration: "00:20:00",
      slotLabelInterval: "01:00",
      slotLabelFormat:{
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: true,
        meridiem: 'short'
      },
      businessHours: {
        // days of week. an array of zero-based day of week integers (0=Sunday)
        daysOfWeek: [ 1, 2, 3, 4, 5], // Monday - Thursday
      
        startTime: '8:00', // a start time (8am in this example)
        endTime: '18:00', // an end time (6pm in this example)
      },
      selectConstraint: "businessHours",
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek timeGridDay dayGridMonth, listWeek'
      },
      plugins: [ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]
    };

    this.events = [];
    this.eventsWithFilter = this.events;

    this.search.data.subscribe(search => {
      // console.log(search)
      // console.log(this.events)
      // console.log(this.eventsWithFilter.filter(data => data.title == "Everything"))
      // this.events.filter(data => console.log(data.title))
      // this.events.filter(data => console.log(data.title.includes(search)))
      this.eventsWithFilter = this.events.filter(data => data.title.toLowerCase().includes(search.toLowerCase()))
      console.log(this.eventsWithFilter)
})

    this.events = this.eventservice.getData()
    .subscribe(
          res => {
            // console.log(res)
            console.log("initialise events");
            this.events = res;
            this.eventsWithFilter = this.events;
            // console.log(this.events.filter(data => data.title.includes("M18")))
          },
          err => {
            console.log("Error occured");
          }
        );

        

    

  }

  ngAfterContentInit(){
    this.myEvents.subscribe(res => this.events = res);
    // console.log(this.events)
    this.events.filter(data => data)
    // console.log(this.events.filter(data => data))
  }

  ngAfterViewInit(){
    // console.log(this.view)
    // console.log(this.events)
    // "ngAfterViewContent"

    this.myEvents.subscribe(res => this.events = res);

    this.lists = this.eventservice.getTaskData()
    .subscribe(
          res => {
            // console.log(res)
                
            let arr = [];
              for (let prop in res){
                  // console.log(arr)
                  arr.push(res[prop]);
            }
                
            console.log("find new listed jobs");
            this.lists = arr;
            console.log(this.lists)

            // Then once the list is available
            setupDraggables();
            },
            err => {
              console.log("Error occurred in loading lists");
            }
          );

          // setTimeout(()=>{ console.log(this.lists), 10000});
            
    var elef = this.element.nativeElement;

    // setTimeout(()=>{

    //   let weeks: any = elef.querySelectorAll(".fc-row").length;
    //         // loop to assign all attributes to DOM elements
    //         // console.log(weeks);
      
    //         var i: number;
    //         for(i=0; i<weeks;i++){
    //           elef.querySelectorAll(".fc-row")[i].style.zIndex=20-i;     
    //           // console.log(elef.querySelectorAll(".fc-row")[i]);     
    //           // console.log("fc row");
    //           }
      
    //   this.refreshToolTips();
      
    //   }, 4000)

    const setupDraggables = ()=>{

          // console.log("why the hell is this not working!");
        // console.log(this.draggable._results[0]);

        // new Draggable(this.draggable._results[0].nativeElement, {
        //   eventData: {
        //     title: 'my event',
        //     duration: '02:00'
        //   }
        // });
        
        // for (var i = 0; i < this.draggable._results.length; i++) {
          // this.draggable._results[i].nativeElement.draggable = true;
          // console.log(this.draggable);
          new Draggable(this.containerEl.nativeElement, {
            itemSelector: '.drag',
            
            eventData: function(eventEl) {
              // console.log("...think once the task has been brought through via a data transfer, as a service, or temporary array (not great as lost everytime browser is refreshed), then can pass variables from the task, (using a lookup on the draggable element text), into eventData which will provide the values upon drop through the eventReceive(), meaning eventReceive should then update the DB via data service rather than through the use of dropped() as used previously.")
              // console.log(eventEl)
              // console.log(eventEl.innerHTML)

              // console.log(Number(eventEl.innerHTML.split(">")[1].split(" <")[0]))
              
              // this.lists.map((obj, index) => {
              //   console.log(obj);
              //   if(eventEl.innerText === obj.Tasks[0].taskName) {
              //     console.log("showme the money");
              //     // console.log(index);
              //     // this.events[index] = res
              //   } 
              // })

              

              var hours = Number(eventEl.innerHTML.split(">")[1].split(" <")[0]);
              var startTime = Number(eventEl.innerHTML.split(">")[7].split(" <")[0]);
              var endTime = Number(eventEl.innerHTML.split(">")[9].split(" <")[0]);
              var hoursPerDay = Number(eventEl.innerHTML.split(">")[9].split(" <")[0]) - Number(eventEl.innerHTML.split(">")[7].split(" <")[0])
              var dur = hours + Math.floor(hours/hoursPerDay)*(24-hoursPerDay)

              console.log(eventEl.innerText == "Holiday Event")
              console.log(eventEl)
              // console.log(endTime)      
              // console.log(hours)        
              // console.log(hoursPerDay)  
              // console.log(dur)
              // console.log(Math.floor(hours/hoursPerDay)*(24-hoursPerDay))
              

              if(eventEl.innerText == "Holiday Event") {
                this.isbackground = 'background';
                this.isAllDay = true;
                this.overLapAllowed = false;
              } else {
                this.isbackground = '';
                this.isAllDay = false;
                this.overLapAllowed = true;
              }

              return {
                title: eventEl.innerText,
                
                duration: { hours: dur },
                Row_KMs:  Number(eventEl.innerHTML.split(">")[3].split(" <")[0]),
                HoursWorked: hours,
                startTime: {hours: startTime},
                // duration: {hours: 26},
                startingTime: startTime,
                endTime: endTime,
                isAllDay: this.isAllDay,
                rendering: this.isbackground,
                overlap: this.overLapAllowed
              };
            }
            
          });
          this.scheduleComponentReady = true;
        // }
  };

  }


// All Methods below:

eventReceive(event){
  // console.log("the event has been received.... Now need to post to DB")
  // console.log(event.view.el.outerHTML.includes("timeGridWeek-view"))
  console.log(event)
  // console.log(this.fullcalendar)
  sessionStorage.setItem('key', event.view.type);
  sessionStorage.setItem('dates', event.event.start);

  this.options.defaultView =  event.view.type
  this.options.defaultDate = event.event.start

  // need to adjust event dates to represent the true length of tasks then refresh events in the screen
  var t = 0;
  var hoursOfWork = event.event.extendedProps.HoursWorked;
  var hoursLeftInDay = event.event.extendedProps.endTime - Number(new Date(event.event.start).getHours()) ;
  var dayLength = event.event.extendedProps.endTime - event.event.extendedProps.startingTime;
  var nightLength = 24 - dayLength;

  // console.log(hoursOfWork)
  // console.log(event.event.extendedProps.endTime)
  // console.log(event.event.start.getHours())
  // console.log(event.event.extendedProps.startingTime)
  // console.log("---------")
  // console.log(hoursLeftInDay)
  // console.log(dayLength)
  // console.log(nightLength)

  if(hoursLeftInDay<hoursOfWork){
    t = t + nightLength;
    hoursOfWork = hoursOfWork - hoursLeftInDay;
  }
  while(dayLength<hoursOfWork){
    t = t + nightLength;
    hoursOfWork = hoursOfWork - dayLength;
  }

  var nonWorkMilliSec = t*60*60*1000;
  var hoursWorkedMilliSec = event.event.extendedProps.HoursWorked*60*60*1000;

  var startDay = new Date(event.event.start)//.getDay(); 

  // console.log(t)
  console.log(event.event.extendedProps.overLapAllowed, event.event.rendering)
  // console.log(new Date(Date.parse(event.event.start) + hoursWorkedMilliSec + nonWorkMilliSec))
  
  this.rerender=false;
  

  this.eventservice.PostEvent({
  "title": event.draggedEl.innerText, 
  // "start": new Date(event.event.start), 
  "start": new Date(Date.parse(event.event.start)),
  "end": new Date(Date.parse(event.event.start) + hoursWorkedMilliSec + nonWorkMilliSec),
  "color": 'rgba(130,137,165, 0.4)',
  "rendering": event.event.rendering,
  "backgroundColor": 'rgba(130,137,165, 0.4)',
  "allDay": event.event.extendedProps.isAllDay,
  "overlap": event.event.overlap,
  "extendedProps": {
  "hoursOfWork": event.event.extendedProps.HoursWorked,
  "startingTime": event.event.extendedProps.startingTime,
  "endTime": event.event.extendedProps.endTime
  }
  
  }).subscribe( res => {
    // console.log("response from post request");  
    
  // console.log(res);
  // console.log(this.events);
  this.events = this.events.concat(res);
  // console.log(this.events);
  this.eventsWithFilter = this.events;
  // this.eventsWithFilter.filter(data=>console.log(data));
  this.rerender=true;
  },    err => {console.log("Error occured in post action");}
  )
  
  // this.events = this.events.concat({});
  this.refreshToolTips();
  this.events = [...this.events];
  this.eventsWithFilter = this.events;
  

  
  if(this.checkbox.nativeElement.checked){
        // console.log("yes this is working baby!")
        // console.log(this.checkbox.nativeElement.checked);
  }
////////////////////////////////////////////////////////

}

eventrender(event)
    {
      console.log("This should mean that the event has been updated in DB, DOM and also in the tooltips");
    }

refreshToolTips(){
  // console.log("starting the Tooltips refresh");
  // var elef = this.element.nativeElement;  
  //     setTimeout(()=> {

  //     var el = this.element.nativeElement;
  //         // console.log(Object.values(this.events[0]).join("\r\n"));
  //     // want a date ordered array
  //     this.events.sort(function(a,b){
  //     var A = new Date(a.start);
  //     var B = new Date(b.start);
  //     return A > B ? 1 : -1;
  //     });
      
  //     let elements: any = el.querySelectorAll(".fc-content").length;
  //     // loop to assign all attributes to DOM elements
  //     var i: number;
  //     for(i=0; i<elements;i++){
  //         this.events.map((att, index)=> {
  //           // console.log(el.querySelectorAll(".fc-content")[i].innerText.replace(/\s/g,'') === att.title.replace(/\s/g,''))
  //           if(el.querySelectorAll(".fc-content")[i].innerText.replace(/\s/g,'') === att.title.replace(/\s/g,'')) {
  //             var html = this.events[index].title + '\n' + this.events[index]._id + '\n' + this.events[index].Staff + '\n' + this.events[index].Machine;
  //             var zForContent = el.querySelectorAll(".fc-content")[i].style.zIndex=2000-i;
  //             el.querySelectorAll(".fc-content")[i].setAttribute("data-tooltip", html)  
              
  //           }
  //       })
  //     }

  //     // console.log(el.querySelectorAll(".fc-title")[0].style.zIndex);
  //     // console.log("an element of DOM");

  //     // console.log(el.querySelectorAll(".fc-content"))
  //     this.popUp = true;
  //     // console.log("fccontent");
  //     // console.log(this.events);
  //     // console.log("event content");

  //     // console.log(el.querySelectorAll("a")[0].setAttribute("mattooltip", "tooltips is here now!"))
  //       }, 1000)

  //   // console.log(elef.querySelectorAll(".fc-content"));
  //   // console.log(elef.querySelectorAll(".fc-title")[0].style.zIndex);

    // console.log("finishing the Tooltips refresh and showing content then title zIndexes");
}



  eventClick(model) {
    this.displayEvent = model.event._calendar.component.props.currentDate;
    // console.log(model.event.extendedProps._id);
    console.log("clicking event");
    // want to include a pop up screen here to allow the event to be modified
    // this.popUp = true;
    let dialog = this.dialog.open(ChoosePeopleMachinesComponent);

    dialog.afterClosed()
      .subscribe(selection => {
        if (selection) {
          this.selections = selection;
          // selections here is an array of those items selected
          // console.log(this.selections);
          // next want to patch this info to DB
          // console.log("patch testing");
          // console.log(model.event.extendedProps._id);
              this.eventservice.updateEvent(model.event.extendedProps._id, {
              "Staff": this.selections[1],
              "Machine": this.selections[0]
                })
                .subscribe(
                res => {
                  // console.log(res);
                  console.log("update events");
                  //this.events = this.events.concat();
                  
                  // console.log(this.events);
                  this.refreshToolTips();
                },
                err => {
                  console.log("Error occured");
                }
          );

        } else {
          // User clicked 'Cancel' or clicked outside the dialog
          console.log("didn't work :(")
        }
      });
// this.refreshToolTips();

  }
  
  eventDragStop(model) {
    console.log("eventDrag event")
    this.editable=false;
    // console.log(this.editable)

  }
  dateClick(model) {
    // console.log(model);
    console.log("clicking the date buttons");
    
  }
  eventResize(model) {
    // console.log(model);
    var endingTime = new Date(Date.parse(model.event.end))

    this.eventservice.updateEvent(model.event.extendedProps._id, {
      "end": endingTime,
  })
  .subscribe(
        res => {
          this.events.map((obj, index) => {
            if(res._id === obj._id) {
              this.events[index] = res
            } 
          })
          this.events = [...this.events];
          this.eventsWithFilter = this.events;
          this.editable = true;
        },
        err => {
          console.log("Error occured");
        }
  );
  
  }

  dropped(model) {
    console.log("This is now redundant as all actions should have an eventData included - all the steps below have been moved to the eventReceive method above");
  }
  clickButton(model) {
    console.log("clicked clickbutton");
  }

  updateEvent(model: any) {
    console.log(model)
    this.options.editable = false;
    
    // console.log(this.editable);
    // console.log(model);
    // console.log(model.event.extendedProps._id);
    // this.rerender=false;

    // console.log(this.options)

    // Use updateEvent to obtain the events extendedProps, then use this to calculate the new timings as per the eventReceive method
    // then updateEvents again and re-render to show new timings.

    var t = 0;
    var hoursOfWork;
    var hoursLeftInDay;
    var dayLength;
    var nightLength;

  //   this.eventservice.updateEvent(model.event.extendedProps._id, {
  // })
  // .subscribe(
  //       res => {
  //         console.log(res) 
  //         hoursOfWork = res.extendedProps.HoursWorked;
  //         hoursLeftInDay = res.extendedProps.endTime - Number(new Date(res.start).getHours()) ;
  //         dayLength = res.extendedProps.endTime - res.extendedProps.startingTime;
  //         nightLength = 24 - dayLength;

  //       })    

        // Need to ensure the start can not be before the startingtime for the day. 
        // console.log(model.event.start.getHours() + model.event.start.getMinutes()/60)
        var currentTime = model.event.start.getHours() + model.event.start.getMinutes()/60
        
        var addHours = 0;
        if (model.event.start.getHours() < model.event.extendedProps.startingTime || model.event.start.getHours() > model.event.extendedProps.endTime){
          // console.log("should print if start is before startingtime")
          addHours = model.event.extendedProps.startingTime - (currentTime)
          if(addHours<0){addHours = addHours+24}
          
        }
        // console.log(addHours)
        hoursOfWork = model.event.extendedProps.hoursOfWork
        // console.log("---------")
        hoursLeftInDay = model.event.extendedProps.endTime - currentTime + addHours
        dayLength = model.event.extendedProps.endTime - model.event.extendedProps.startingTime
        nightLength = 24 - dayLength

        // console.log(hoursOfWork)
        // console.log("---------")
        // console.log(hoursLeftInDay)
        // console.log(dayLength)
        // console.log(nightLength)
      
        if(hoursLeftInDay<hoursOfWork){
          t = t + nightLength;
          hoursOfWork = hoursOfWork - hoursLeftInDay;
        }
        while(dayLength<hoursOfWork){
          t = t + nightLength;
          hoursOfWork = hoursOfWork - dayLength;
        }
        
        // console.log(t + hoursOfWork)
        
        var nonWorkMilliSec = t*60*60*1000;
        var hoursWorkedMilliSec = model.event.extendedProps.hoursOfWork*60*60*1000;

        // console.log("start: " + new Date(Date.parse(model.event.start) + addHours*60*60*1000))
        // console.log("end: " + new Date(Date.parse(model.event.start) + addHours*60*60*1000 + hoursWorkedMilliSec + nonWorkMilliSec))
        // console.log("addHours: " + addHours)
        // console.log("hoursOfWork: " + hoursOfWork)
        // console.log("non worked: " + t)

        var endingTime;
        
          endingTime = new Date(Date.parse(model.event.start) + addHours*60*60*1000 + hoursWorkedMilliSec + nonWorkMilliSec);

        console.log(endingTime);
    
    this.eventservice.updateEvent(model.event.extendedProps._id, {
        "start": new Date(Date.parse(model.event.start) + addHours*60*60*1000),
        "end": endingTime,
        // "end": new Date(Date.parse(model.event.start) + addHours*60*60*1000 + hoursWorkedMilliSec + nonWorkMilliSec),
        "allDay": false,
        "Staff": model.event.Staff,
        "Machine": model.event.Machine
        // ,"color": 'rgba(68,90,176, 0.4)'
    })
    .subscribe(
          res => {
            // console.log(res);
            console.log("update events here");
            // this.events = this.events.concat(res);
            
        //   let array = Object
        // .entries(res)
        // // .map(([key, value]) => ({ [key]: value }))
        // .join(",")
        // JSONparse()
            
            this.events.map((obj, index) => {
              if(res._id === obj._id) {
                // console.log("showme the money");
                // console.log(index);
                this.events[index] = res
              } 
            })
            // this.events.map(obj => res._id === obj._id);
            // console.log(this.events);
            this.rerender=true;
            // this.refreshToolTips();
            // console.log(this.events)
            this.events = [...this.events];
            // console.log(this.events)
            this.eventsWithFilter = this.events;
            // this.myEvents.next(this.events)
            this.options.editable = true;
            // console.log(this.editable)
          },
          err => {
            console.log("Error occured");
          }
    );

  }
  get yearMonth(): string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }
}


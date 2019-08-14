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

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit, AfterViewInit , AfterContentInit {

  constructor(private eventservice: EventsService,
              public dialog: MatDialog,
              public element: ElementRef) { 
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

  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;
  @ViewChild('dropremove') checkbox: any;
  @ViewChild('externalevents') containerEl: any;
  @ViewChildren('draggableel') draggable: any;
  

  ngOnInit() {
    this.editable=true;
    this.rerender=true;
    this.scheduleComponentReady=false;
    let data = sessionStorage.getItem('key');
    console.log(data)
    
    // this.myEvents.subscribe(res => this.events = res.concat({}));

    this.testEvent = "4:00:00";
    this.options = {
      editable: this.editable,
      defaultView: data,
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


    this.events = this.eventservice.getData()
    .subscribe(
          res => {
            // console.log(res)
            console.log("initialise events");
            this.events = res;
          },
          err => {
            console.log("Error occured");
          }
        );

  }

  ngAfterContentInit(){
    this.myEvents.subscribe(res => this.events = res);
    console.log(this.view)

  }

  ngAfterViewInit(){
    console.log(this.view)

    // "ngAfterViewContent"

    this.myEvents.subscribe(res => this.events = res);

    this.lists = this.eventservice.getTaskData()
    .subscribe(
          res => {
            console.log(res)
                
            let arr = [];
              for (let prop in res){
                  // console.log(arr)
                  arr.push(res[prop]);
            }
                
            console.log("find new listed jobs");
            this.lists = arr;
            console.log(arr)

            // Then once the list is available
            setupDraggables();
            },
            err => {
              console.log("Error occured in loading lists");
            }
          );

          setTimeout(()=>{ console.log(this.lists), 10000});
            
    var elef = this.element.nativeElement;

    setTimeout(()=>{

      let weeks: any = elef.querySelectorAll(".fc-row").length;
            // loop to assign all attributes to DOM elements
            // console.log(weeks);
      
            var i: number;
            for(i=0; i<weeks;i++){
              elef.querySelectorAll(".fc-row")[i].style.zIndex=20-i;     
              // console.log(elef.querySelectorAll(".fc-row")[i]);     
              // console.log("fc row");
              }
      
      this.refreshToolTips();
      
      }, 4000)

    const setupDraggables = ()=>{

          console.log("why the hell is this not working!");
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
              console.log("...think once the task has been brought through via a data transfer, as a service, or temporary array (not great as lost everytime browser is refreshed), then can pass variables from the task, (using a lookup on the draggable element text), into eventData which will provide the values upon drop through the eventReceive(), meaning eventReceive should then update the DB via data service rather than through the use of dropped() as used previously.")
              console.log(eventEl)
              console.log(eventEl.innerHTML)

              console.log(Number(eventEl.innerHTML.split(">")[1].split(" <")[0]))
              
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


              console.log(startTime)
              console.log(endTime)
              console.log(hours)
              console.log(hoursPerDay)
              console.log(dur)
              console.log(Math.floor(hours/hoursPerDay)*(24-hoursPerDay))

              return {
                title: eventEl.innerText,
                
                duration: { hours: dur },
                Row_KMs:  Number(eventEl.innerHTML.split(">")[3].split(" <")[0]),
                HoursWorked: hours,
                startTime: {hours: startTime},
                // duration: {hours: 26},
                startingTime: startTime,
                endTime: endTime
              };
            }
            
          });
          this.scheduleComponentReady = true;
        // }
  };

  }


// All Methods below:

eventReceive(event){
  console.log("the event has been received.... Now need to post to DB")
  console.log(event.view.el.outerHTML.includes("timeGridWeek-view"))
  console.log(this.element)
  console.log(this.fullcalendar)
  sessionStorage.setItem('key', 'timeGridWeek');

  // need to adjust event dates to represent the true length of tasks then refresh events in the screen
  var t = 0;
  var hoursOfWork = event.event.extendedProps.HoursWorked;
  var hoursLeftInDay = event.event.extendedProps.endTime - Number(new Date(event.event.start).getHours()) ;
  var dayLength = event.event.extendedProps.endTime - event.event.extendedProps.startingTime;
  var nightLength = 24 - dayLength;

  console.log(hoursOfWork)
  console.log(event.event.extendedProps.endTime)
  console.log(event.event.start.getHours())
  console.log(event.event.extendedProps.startingTime)
  console.log("---------")
  console.log(hoursLeftInDay)
  console.log(dayLength)
  console.log(nightLength)

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

  console.log(t)
  console.log(event.event)
  console.log(new Date(Date.parse(event.event.start) + hoursWorkedMilliSec + nonWorkMilliSec))
  
  this.rerender=false;

  this.eventservice.PostEvent({
  "title": event.draggedEl.innerText, 
  // "start": new Date(event.event.start), 
  "start": new Date(Date.parse(event.event.start)),
  "end": new Date(Date.parse(event.event.start) + hoursWorkedMilliSec + nonWorkMilliSec)
  ,
  "extendedProps": {
  "hoursOfWork": event.event.extendedProps.HoursWorked,
  "startingTime": event.event.extendedProps.startingTime,
  "endTime": event.event.extendedProps.endTime
  }
  
  }).subscribe( res => {
    console.log("response from post request");  
  console.log(res);
  console.log(this.events);
  
  this.events = this.events.concat(res);
  this.rerender=true;
  },    err => {console.log("Error occured in post action");}
  )
  
  // this.events = this.events.concat({});
  this.refreshToolTips();
  this.events = this.events.concat({});
  

  
  if(this.checkbox.nativeElement.checked){
        console.log("yes this is working baby!")
        // console.log(this.checkbox.nativeElement.checked);
  }
////////////////////////////////////////////////////////

}

eventrender(event)
    {
      console.log("This should mean that the event has been updated in DB, DOM and also in the tooltips");
    }

refreshToolTips(){
  console.log("starting the Tooltips refresh");
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

    console.log("finishing the Tooltips refresh and showing content then title zIndexes");
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
          console.log("patch testing");
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

console.log("this means I don't require a render method from the click event")
  }
  eventDragStop(model) {
    // this.events = this.events.concat();
    console.log("are we here?")
    this.editable=false;
    console.log(this.editable)
    // this.rerender=false;
    // this.rerender=true;
    // console.log(model.event._calendar.component.props.currentDate);
  }
  dateClick(model) {
    console.log(model);
    console.log("clicking the date buttons");
    
  }
  drop(model) {
    console.log(model);
    // this.events = this.events.concat();
  }

  dropped(model) {
    console.log("This is now redundant as all actions should have an eventData included - all the steps below have been moved to the eventReceive method above");
    // this.events = this.events.concat();
    // this.eventservice.PostEvent({
    // "title": model.draggedEl.innerHTML,
    // "start": model.dateStr
    // })
    // .subscribe(
    //       res => {
    //         // console.log(res[0]);
    //         console.log("post events");
            
    //         // this.events.push(res)
    //         // this.events = this.events.slice(0,3);
    //         this.events = this.events.concat(res);
  
    //       },
    //       err => {
    //         console.log("Error occured");
    //       }
    // );
  
    // this.refreshToolTips();
  
    
    // if(this.checkbox.nativeElement.checked){
    //       console.log("yes this is working baby!")
    //       // console.log(this.checkbox.nativeElement.checked);
    // }

  }
  clickButton(model) {
    console.log(model);
  }

  updateEvent(model: any) {
    this.editable = false;
    console.log("or are we here?");
    console.log(model);
    // console.log(model.event.extendedProps._id);
    // this.rerender=false;

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
        console.log(model.event.start.getHours() + model.event.start.getMinutes()/60)
        var currentTime = model.event.start.getHours() + model.event.start.getMinutes()/60
        
        var addHours = 0;
        if (model.event.start.getHours() < model.event.extendedProps.startingTime || model.event.start.getHours() > model.event.extendedProps.endTime){
          console.log("should print if start is before startingtime")
          addHours = model.event.extendedProps.startingTime - (currentTime)
          if(addHours<0){addHours = addHours+24}
          
        }
        console.log(addHours)
        hoursOfWork = model.event.extendedProps.hoursOfWork
        console.log("---------")
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

        console.log("start: " + new Date(Date.parse(model.event.start) + addHours*60*60*1000))
        console.log("end: " + new Date(Date.parse(model.event.start) + addHours*60*60*1000 + hoursWorkedMilliSec + nonWorkMilliSec))
        console.log("addHours: " + addHours)
        console.log("hoursOfWork: " + hoursOfWork)
        console.log("non worked: " + t)

        var endingTime;
        if(addHours>0){
          endingTime = new Date(Date.parse(model.event.start) + addHours*60*60*1000 + hoursWorkedMilliSec + nonWorkMilliSec);
        } 
        else {
          endingTime = new Date(Date.parse(model.event.end));
        }

        console.log(endingTime);
    
    this.eventservice.updateEvent(model.event.extendedProps._id, {
        "start": new Date(Date.parse(model.event.start) + addHours*60*60*1000),
        "end": endingTime,
        // "end": new Date(Date.parse(model.event.start) + addHours*60*60*1000 + hoursWorkedMilliSec + nonWorkMilliSec),
        "allDay": false,
        "Staff": model.event.Staff,
        "Machine": model.event.Machine
    })
    .subscribe(
          res => {
            // console.log(res);
            console.log("update events");
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
            this.events = this.events.concat({});
            // this.myEvents.next(this.events)
            this.editable = true;
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


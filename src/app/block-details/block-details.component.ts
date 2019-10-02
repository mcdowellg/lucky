  import {Component, OnInit, Input } from '@angular/core';
  import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
  import { EventsService } from '../events.service'
  import { FormBuilder } from '@angular/forms';
  import { Validators } from '@angular/forms';  
  import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-block-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.scss']
})

export class BlockDetailsComponent implements OnInit {

  constructor(private eventservice: EventsService, private fb: FormBuilder, private search: SearchServiceService) {};

  details: any = [];
  row_kms: any = [];
  total_vines: any = [];
  row_numbers: any = [];
  change: boolean;
  scheduleComponentReady: boolean;
  searchData: string;

    profileForm = this.fb.group({
    taskName: ['', Validators.required],
    
      rates: this.fb.group({
      speed: ['', [Validators.min(1), Validators.max(20)]],
      resources: ['', [Validators.min(1), Validators.max(200)]],
      hoursWorked: ['', [Validators.min(1), Validators.max(20)]],
      start: [''],
      end: ['']
    })
  });

  updateProfile() {
    this.profileForm.patchValue({
      taskName: 'Generic Task',
      rates: {
        speed: 7.5,
        resources: 8,
        hoursWorked: 9,
        start: 8,
        end: 16
      }
    });
    this.change = false;
  }

  onSubmit() {
    // Combine input data to create a group task that can then be imported into the calendar script.

    // Get row kms, turns and vines

    var row_kms = Number(this.calculations.reduce(function(accumulator, currentValue, currentIndex, array) {
      return accumulator + Number(currentValue['Row_KM']);
    },0));

    var row_numbers = this.calculations.reduce(function(accumulator, currentValue, currentIndex, array) {
      return accumulator + Number(currentValue['Row_Numbers']);
    },0);

    var total_vines = this.calculations.reduce(function(accumulator, currentValue, currentIndex, array) {
      return accumulator + Number(currentValue['Total_Vines']);
    },0);

    // Now calculate duration

    // Duration equals (distance/speed)/machines


    var speed  = Number(this.profileForm.value.rates.speed);
    var resources = Number(this.profileForm.value.rates.resources);
    var hoursWorked = Number(this.profileForm.value.rates.hoursWorked);
    var start = Number(this.profileForm.value.rates.start);
    var end = Number(this.profileForm.value.rates.end);



    console.warn(resources);

    var duration = (row_kms/speed)/resources;

    console.warn(this.calculations);

    this.details = [this.profileForm.value, this.allocatedTasks, duration, row_kms, row_numbers, total_vines, hoursWorked, start, end];
    console.log(this.details);
    // Now want to post this data to the Tasks model in DB
    console.log(this.change)
    if(this.change = true){
    this.eventservice.postTaskData({

      "Tasks": this.details
      })
      .subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log("Error occured");
            }
      );
  }}

       scheduledTasks:any = [];
       scheduledTasksFiltered:any = [];

    ngOnInit() {
      
      this.scheduleComponentReady = false;
      this.search.data.subscribe(data => {
        console.log("1: is anything coming into here?: " + data)
        this.searchData = data
        var splitData = data.split(' ')
        console.log(splitData)
        console.log(this.scheduledTasksFiltered)
        // Also want to update scheduled tasks to show only filtered search data
        if (splitData[2]) this.scheduledTasksFiltered = this.scheduledTasksFiltered.filter(input => (input.UniqID.toLowerCase().includes(splitData[0].toLowerCase()) && input.UniqID.toLowerCase().includes(splitData[1].toLowerCase())) && input.UniqID.toLowerCase().includes(splitData[2].toLowerCase())) 

        if (splitData[1]) this.scheduledTasksFiltered = this.scheduledTasksFiltered.filter(input => (input.UniqID.toLowerCase().includes(splitData[0].toLowerCase()) && input.UniqID.toLowerCase().includes(splitData[1].toLowerCase()))) 
            // (input.UniqID.toLowerCase().includes(splitData[0].toLowerCase()) && input.UniqID.toLowerCase().includes(splitData[1].toLowerCase()))) 
        else this.scheduledTasksFiltered = this.scheduledTasks.filter(input => input.UniqID.toLowerCase().includes(splitData[0].toLowerCase()))
        console.log(this.scheduledTasksFiltered)

      })

      this.scheduledTasks = this.eventservice.getListData()
    .subscribe(
          res => {
            console.log(res)
            
            let arr = [];
            for (let prop in res){
              // console.log(arr)
              arr.push(res[prop]);
            }
            
            console.log("find new listed jobs");
            this.scheduledTasks = arr;
            this.scheduledTasksFiltered = this.scheduledTasks;
            // console.log(this.scheduledTasksFiltered)
            this.scheduleComponentReady = true;
          },
          err => {
            console.log("Error occured in loading lists");
          }
        );
    }
  
    allocatedTasks = [];
    calculations = [];
  
    drop(event: CdkDragDrop<string[]>) {
      console.log(event);
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        console.log(event)
      } else if(event.container.id == "cdk-drop-list-0")  {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
        console.warn("When dropped from bottom to top")
        console.log(event.previousContainer.data)
        console.log(event.container.data)
        console.log(event.previousIndex)
        console.log(event.currentIndex)
        // this.allocatedTasks = event.container.data;
        this.scheduledTasksFiltered = event.container.data;
        this.allocatedTasks = event.previousContainer.data;
        
      }
        else {
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
        console.warn("When dropped from top to bottom")
        console.log(event.previousContainer.data)
        console.log(event.container.data)
        console.log(event.previousIndex)
        console.log(event.currentIndex)
        this.allocatedTasks = event.container.data;
        this.scheduledTasksFiltered = event.previousContainer.data;
        }
      
      this.scheduledTasks = [...this.scheduledTasks];
      this.scheduledTasksFiltered = [...this.scheduledTasksFiltered];
      console.log(this.allocatedTasks);
      console.log(this.scheduledTasks);
      // here we need to undertake the calculations before it is submitted to the calendar schedule
      this.calculations = this.allocatedTasks; // find or map or filter to get values for RowKMs and Row Numbers for turn time, make calculations and provide back to this.details!
    }
  }
  
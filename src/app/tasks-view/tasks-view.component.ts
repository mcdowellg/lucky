import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { SearchServiceService } from '../search-service.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss']
})
export class TasksViewComponent implements OnInit {

  constructor(private eventservice: EventsService, private search: SearchServiceService) { }

  lists: any = [];
  ready: boolean = false;
  searchData: string;
  listsFiltered:any = [];

  ngOnInit() {

    this.search.data.subscribe(data => {
      console.log("1: is anything coming into here?: " + data)
      this.searchData = data
      console.log("2: is anything coming into here?: " + this.searchData)
      // Also want to update scheduled tasks to show only filtered search data
      this.listsFiltered = this.lists.filter(input => {
        console.warn(String(input.Tasks[0].taskName).toLowerCase())
        String(input.UniqID).toLowerCase().includes(data.toLowerCase())
        
      })
      this.listsFiltered = [...this.listsFiltered];
      console.log(this.listsFiltered)
    })

    this.lists = this.eventservice.getTaskDataColour()
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
            console.log(this.lists)

            this.listsFiltered = this.lists;
            this.ready = true;

            // Have added this in here to ensure the search data is retained... needs a review :)

            this.search.data.subscribe(data => {
              console.log("1: is anything coming into here?: " + data)
              this.searchData = data
              console.log("2: is anything coming into here?: " + this.searchData)
              // Also want to update scheduled tasks to show only filtered search data
              console.log(this.listsFiltered)
              this.listsFiltered = this.lists.filter(input => 
                String(input.UniqID).toLowerCase().includes(data.toLowerCase()))
              this.listsFiltered = [...this.listsFiltered];
              console.log(this.listsFiltered)
            })
            
            },
            err => {
              console.log("Error occurred in loading lists");
            }
          );
  }

  allocatedTasks = [];

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
      // this.listsFiltered = event.container.data;
      // this.allocatedTasks = event.previousContainer.data;
      console.log(this.listsFiltered)
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
      // this.allocatedTasks = event.container.data;
      // this.listsFiltered = event.previousContainer.data;
      }
    
    this.listsFiltered = [...this.listsFiltered];
    console.log(this.listsFiltered.length);
    console.log(this.listsFiltered._id);
    console.log(this.listsFiltered);
    // Finally we need to send the info back into the DB

    // this.eventservice.deleteTask(
    //   ).subscribe( res => {
    //     // console.log("response from post request");  
    //   },    err => {console.log("Error occured in post action");}
    //   )

    // var a = 0;
    // var tasksArray = [];
    // while(a<this.listsFiltered.length){
    // var Tasks = this.listsFiltered[a].Tasks 
    //   a = a + 1;
    // console.warn(Tasks)
    // tasksArray.push({Tasks})
    // }

    // console.warn(tasksArray)

    var a = 0;
    var tasksArray = [];
    while(a<this.listsFiltered.length){
      var id = this.listsFiltered[a]._id
      var data = this.listsFiltered[a]
      console.log(id)
      console.warn(data)

      this.eventservice.updateTaskDataColour(id,
        data 
        ).subscribe( res => {
          console.log(res)
          // console.log("response from post request");  
        },    err => {console.log("error");}
        )

      a = a + 1;
    }



    


    // this.eventservice.postTaskData({
    //   "Tasks": this.listsFiltered
    //   })
    //   .subscribe(
    //         res => {
    //           console.log("posted task");
    //         },
    //         err => {
    //           console.log("Error occured");
    //         }
    //   );

  }

}

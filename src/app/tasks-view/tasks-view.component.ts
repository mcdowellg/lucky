import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { SearchServiceService } from '../search-service.service';

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
        String(input.Tasks[0].taskName).toLowerCase().includes(data.toLowerCase())
        
      })
      this.listsFiltered = [...this.listsFiltered];
      console.log(this.listsFiltered)
    })

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
                String(input.Tasks[0].taskName).toLowerCase().includes(data.toLowerCase()))
              this.listsFiltered = [...this.listsFiltered];
              console.log(this.listsFiltered)
            })
            
            },
            err => {
              console.log("Error occurred in loading lists");
            }
          );

  }

}

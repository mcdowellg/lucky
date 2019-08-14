import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchServiceService } from '../search-service.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  values = '';

  onKey(event: any) { // without type info
    this.values = event.target.value;
    console.warn(event.target.value);
    this.search.updateData(this.values);
  }

  constructor(private search: SearchServiceService) { }

  ngOnInit() {
  }

}

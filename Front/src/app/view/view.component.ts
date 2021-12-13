import { Component, OnInit } from '@angular/core';
import { ViewService } from './view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  data: any;
  searchText;

  constructor(private view: ViewService) { }

  ngOnInit(): void {
    this.view.getName().toPromise().then(res => {
      this.data = res.list
    })
  }

}

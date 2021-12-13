import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from './home.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any
  showData = {
    id: null,
    idName: '',
    firstName: '',
    lastName: '',
    nickName: '',
    Email: '',
    date: '',
    password: '',
    tel: '',
    gender: ''
  }

  IsEdit: boolean = false;
  searchText;

  constructor(private home: HomeService) { }

  ngOnInit(): void {
    this.home.getName().toPromise().then(res => {
      this.data = res.list
    })
  }

  addData() {
    this.home.postName(this.showData).toPromise().then(res => {
      this.data = res.list
    })
  }

  editData(i) {
    this.showData = i
    this.IsEdit = true
    console.log(i)
  }

  updateData() {
    this.home.updateName(this.showData).toPromise().then(res => {
      this.data = res.list
    })
    this.IsEdit = false;
  }

  deleteData(i) {
    this.home.deleteName(i).toPromise().then(res => {
      this.data = res.list
    });
  }

  userEmails = new FormGroup({
    primaryEmail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });

  get primEmail() {
    return this.userEmails.get('primaryEmail')
  }

  resetData(i) {
    this.showData = i
  }

}

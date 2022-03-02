import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {
   submittedData:any
  constructor() { }

  ngOnInit(): void {
    console.log(history.state.data)
    this.submittedData=history.state.data
  }

}

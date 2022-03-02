import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  EmployeeForm: FormGroup;

  constructor(private formbuilder:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.init();
  }

  private init():void{
    this.EmployeeForm=this.formbuilder.group({
      Name:[],
      Age:['',Validators.max(2)],
      Address:[],
      State:[],
      gender:[]
    })

  }
  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    console.log(charCode)
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
      
    } else if(event.length==2) {
      event.preventDefault();
      return false;
    }else{
      return true;
    }
    
  }
  onEmployeeFormSubmit():void{
    this.router.navigate(['empdetail'],{state:{data:this.EmployeeForm.value}})
  }
}

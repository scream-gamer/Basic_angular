import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  invalidCredentialMsg:any;
  submitted = false;
  constructor(public formbuilder:FormBuilder,public router: Router) { }
   
  ngOnInit(): void {
    this.init();
  }
  get f() { return this.LoginForm.controls; }

  private init():void{
    this.LoginForm=this.formbuilder.group({
      user_name: ['',[Validators.required]],
      user_password: ['',Validators.compose([Validators.required, Validators.minLength(8) ])]
    })

}
 onFormSubmit():void{
  this.submitted = true;
  
  console.log(this.LoginForm.value)


  //  if (this.LoginForm.invalid) {
  //    return;
  // }
     var user_name=this.LoginForm.value.user_name;
     var password=this.LoginForm.value.user_password;
  

      console.log(password.match('/^(?=.*[0-9])(?=.*[a-z][A-Z])(?=.*[//,.?;<>:!@#$%^&*(-=_+)|{}\[\]])([a-zA-Z0-9//,.?;<>\':\"!@#$%^&*(-=_+)|{}\[\]]{8,20})$/'))
     
    
     if(password.match('(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')!=null){
         this.invalidCredentialMsg="user success"
         sessionStorage.setItem("username",user_name)
         this.router.navigate(['/welcome']);	
     }else{
       this.invalidCredentialMsg="";
     }
     

     
}
}

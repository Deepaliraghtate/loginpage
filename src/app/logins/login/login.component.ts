import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:any=FormGroup;
  
  


  constructor(private fb:FormBuilder, private ser:LogService, private router:Router) { }

  ngOnInit(): void {
    this.loginform=this.fb.group({
      email : ['',Validators.required, Validators.email  ],
      password : ['', Validators.required]
    })

  }
  
  
 
  onsubmit(){
    this.ser.postLogin(this.loginform.value).subscribe((res:any)=>{
console.log(res)
this.router.navigate(['/home']);

    }),
    (err:any)=>{

    }
  }

}

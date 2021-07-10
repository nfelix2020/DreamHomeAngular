import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  form: FormGroup;
  
 
  constructor( private fb: FormBuilder, private http: HttpClient,
    private router:Router) { 
    
    this.form=this.fb.group(
      {
        email:'' ,
        password:''
      });
    
      
  }
    
  ngOnInit(): void {
    
  }

  
 submit():void{

    this.http.post('https://127.0.0.1:8000/api/users',this.form.getRawValue(),
    {withCredentials:false})
      .subscribe(res=>{
      this.router.navigate(['/Acceuil'])
    });
    
    }
  

}
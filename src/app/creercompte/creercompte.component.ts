import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creercompte',
  templateUrl: './creercompte.component.html',
  styleUrls: ['./creercompte.component.css']
})
export class CreercompteComponent implements OnInit {
  form: FormGroup;
  
 
  constructor( private fb: FormBuilder, private http: HttpClient,
    private router:Router) { 
    
    this.form=this.fb.group(
      {
        nom:'',
        email:'' ,
        password:''
      });
    
      
  }
    
  ngOnInit(): void {
    
  }

  
 onsubmit():void{

    this.http.post('https://127.0.0.1:8000/api/comptes',this.form.getRawValue())
    .subscribe(res=>{
      this.router.navigate(['/Connexion'])
    });
    
    }
  

}

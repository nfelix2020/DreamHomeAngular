import { HttpClient } from '@angular/common/http';
import { Emitters } from './../lier_nav_connexion/emitters';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

   authenticated=false;
  constructor( private http:HttpClient) { }

  ngOnInit() {
    Emitters.authEmitter.subscribe(
(auth:boolean)=>{
  this.authenticated=auth;

} 
);
  }
  logout():void{
this.http.post('https://127.0.0.1:8000/api/logout', {}, {withCredentials:true})

.subscribe(()=>this.authenticated=false);
  }
   
}
function body(arg0: string, body: any, arg2: {}, arg3: { withCredentials: boolean; }) {
  throw new Error('Function not implemented.');
}


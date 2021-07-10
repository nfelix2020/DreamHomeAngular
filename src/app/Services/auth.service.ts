import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }


//Ftc to authenticate USer

authUser (user: any){
  let UserArray= [];
  if(localStorage.getItem('Users')){
    UserArray= JSON.parse(localStorage.getItem('Users'));
  }
  return UserArray.find(p => p.email === user.email && p.mdp === user.mdp);

}

}

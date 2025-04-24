import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  OnEnrollClicked(title:String)
  {
    alert("Thank you for enrolling "+title+"  Course")
  }
  constructor() { }
}

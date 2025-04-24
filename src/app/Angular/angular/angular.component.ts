import { Component } from '@angular/core';
import { EnrollService } from '../../enroll.service';

@Component({
  selector: 'app-angular',
  imports: [],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css',
  providers:[EnrollService]
})
export class AngularComponent {
  title="Angular";

  constructor(private enrollService:EnrollService)
  {

  }
  OnEnroll()
  {
//    alert("Thank you for Enrolling "+this.title+"   course");
//const enrollService=new EnrollService();
this.enrollService.OnEnrollClicked(this.title)
  }
}

import { Component } from '@angular/core';
import { EnrollService } from '../../enroll.service';

@Component({
  selector: 'app-javascript',
  imports: [],
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css',
  providers:[EnrollService]
})
export class JavascriptComponent {
  title="JavaScript";

  constructor(private enrollService:EnrollService)
  {

  }
  OnEnroll()
  {
  //  const enrollService=new EnrollService();

    this.enrollService.OnEnrollClicked(this.title);

  }
}

import { Student } from 'app/student.model';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  email:string;
  marks:number;

  private student:Student;
  
  private showStudent()
  {
    this.student = new Student();
    this.student.name = this.name;
    this.student.email = this.email;
    this.student.marks = this.marks;
  }
}

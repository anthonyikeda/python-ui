import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  basicGroup: FormGroup;

  constructor(private builder: FormBuilder, private http: HttpClient) {
    this.basicGroup = builder.group({
      firstname: [],
      lastname: [],
      age: []
    });
  }

  publishDetails(): void {
    let data = {
      firstname: this.basicGroup.get('firstname'),
      lastname: this.basicGroup.get('lastname'),
      age: this.basicGroup.get('age')
    }

    this.http.post('http://localhost:4200/service/record', data, { observe: "response"}).subscribe({
      next: (data) => console.log(data),
      complete: () => console.log("Data sent")
    });
  }
}

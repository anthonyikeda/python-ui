import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', [Validators.required, Validators.max(99)]]
    });
  }

  get firstname() { return this.basicGroup.get('firstname'); }
  get lastname() { return this.basicGroup.get('lastname'); }
  get age() { return this.basicGroup.get('age'); }

  publishDetails(): void {
    let data = {
      firstname: this.basicGroup.get('firstname')?.value,
      lastname: this.basicGroup.get('lastname')?.value,
      age: this.basicGroup.get('age')?.value
    }

    this.http.post('http://localhost:4200/server/record', data, { observe: "response"}).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("Data sent")
    });
  }
}

import { Component } from '@angular/core';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  memberName = 'Bob';

  constructor(private service: DialogService) {}

  openModal(id: string): void {
    this.service.open(id);
  }

  closeModal(id: string) {
    this.service.close(id);
  }
}

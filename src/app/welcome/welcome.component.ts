import { Component } from '@angular/core';
import { DialogService } from '../dialog/dialog.service';
import { DialogComponent } from '../dialog/dialog.component';
import { UserInventoryEditorComponent } from '../user-inventory-editor/user-inventory-editor.component';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [DialogComponent, UserInventoryEditorComponent, DetailsComponent],
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

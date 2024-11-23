import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InventoryService } from './inventory.service';


@Component({
  selector: 'app-user-inventory-editor',
  templateUrl: './user-inventory-editor.component.html',
  styleUrls: ['./user-inventory-editor.component.css']
})
export class UserInventoryEditorComponent implements OnInit {

  userEquipment: FormGroup;

  availableEquipment: string[] = [];
  availableItems = new FormControl();
  selectedEquipment: string[] = [];

  constructor(private builder: FormBuilder, private service: InventoryService) {
    this.userEquipment = builder.group({
      selectedEquipment: ['']
    });
  }

  ngOnInit(): void {
    this.availableEquipment.push('Laptop');
    this.availableEquipment.push('iPad');
    this.availableEquipment.push('Email');
  }
  

  addItem(): void {
    console.log(this.availableItems?.value);
    this.selectedEquipment = [];
    this.availableItems?.value.forEach((value : string) => {
      console.log(value);
      this.selectedEquipment.push(value);
    });
    this.userEquipment.get('selectedEquipment')?.setValue(this.selectedEquipment);
    this.service.updateInventory('bob', this.selectedEquipment).subscribe({
      next: (data) => console.log(`Data is ${data}`),
      error: (error) => console.log(error),
      complete: () => console.log("Updated inventory")
    });

  }
}

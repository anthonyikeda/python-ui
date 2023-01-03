import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user-inventory-editor',
  templateUrl: './user-inventory-editor.component.html',
  styleUrls: ['./user-inventory-editor.component.css']
})
export class UserInventoryEditorComponent implements OnInit {

  userEquipment: FormGroup;

  availableEquipment: string[] = [];

  constructor(private builder: FormBuilder) {
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
    
  }
}

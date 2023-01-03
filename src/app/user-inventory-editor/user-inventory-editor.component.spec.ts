import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInventoryEditorComponent } from './user-inventory-editor.component';

describe('UserInventoryEditorComponent', () => {
  let component: UserInventoryEditorComponent;
  let fixture: ComponentFixture<UserInventoryEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInventoryEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInventoryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

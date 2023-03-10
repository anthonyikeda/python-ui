import { Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit, OnDestroy {

  @Input()
  id: string = '';

  private element: any;

  constructor(private service: DialogService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    document.body.appendChild(this.element);

    this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
      if (el.target?.className === 'jw-modal') {
          this.close();
      }
    });

    this.service.add(this);
  }

  ngOnDestroy(): void {
    this.service.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }
}

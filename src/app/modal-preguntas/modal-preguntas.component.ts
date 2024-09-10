import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-preguntas',
  templateUrl: './modal-preguntas.component.html',
  styleUrls: ['./modal-preguntas.component.css']
})
export class ModalPreguntasComponent implements OnInit {

  @Input() imageUrl: string | null = null;
  @Output() closeM = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.closeM.emit();
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  @Output() incrementEvent = new EventEmitter();
  @Output() decrementEvent = new EventEmitter();
  @Output() resetEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrement(){
    this.incrementEvent.emit();
  }

  onDecrement(){
    this.decrementEvent.emit();
  }

  onReset(){
    this.resetEvent.emit();
  }

}

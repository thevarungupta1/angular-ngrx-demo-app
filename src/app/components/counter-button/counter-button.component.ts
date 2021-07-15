import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  // @Output() incrementEvent = new EventEmitter();
  // @Output() decrementEvent = new EventEmitter();
  // @Output() resetEvent = new EventEmitter();

  constructor(private store: Store<{counter: { counter: number }}>) { }

  ngOnInit(): void {
  }

  // onIncrement(){
  //   this.incrementEvent.emit();
  // }

  // onDecrement(){
  //   this.decrementEvent.emit();
  // }

  // onReset(){
  //   this.resetEvent.emit();
  // }

   onIncrement(){
    this.store.dispatch(increment())
  }

  onDecrement(){
    this.store.dispatch(decrement())
  }

  onReset(){
    this.store.dispatch(reset())
  }

}

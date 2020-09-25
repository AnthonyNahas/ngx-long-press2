import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngxLongPress2]'
})
export class NgxLongPress2Directive {

  pressing: boolean;
  longPressing: boolean;
  timeout: any;
  interval: any;

  delay = 50;
  lapsedTime = 0; // used for onLongPressing event

  @Input()
  minTime = 500; // used for onLongPress event

  @Input()
  maxTime = 2000; // used for onReleasePressing event

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onLongPress = new EventEmitter();

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onLongPressing: EventEmitter<number> = new EventEmitter();

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onReleasePressing: EventEmitter<void> = new EventEmitter();

  @HostBinding('class.press')
  get press(): boolean {
    return this.pressing;
  }

  @HostBinding('class.longpress')
  get longPress(): boolean {
    return this.longPressing;
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: any): void {
    this.pressing = true;
    this.longPressing = false;
    this.timeout = setTimeout(() => {
      this.longPressing = true;
      this.onLongPress.emit(event);
      this.interval = setInterval(() => {
        this.onLongPressing.emit(this.lapsedTime);
        if (this.lapsedTime < this.maxTime) {
          this.lapsedTime += this.delay;
        } else {
          this.end();
        }
      }, this.delay);
    }, this.minTime);
  }

  @HostListener('touchend')
  @HostListener('mouseup')
  @HostListener('mouseleave')
  endPress(): void {
    this.end();
  }

  end(): void {
    clearTimeout(this.timeout);
    clearInterval(this.interval);
    this.longPressing = false;
    this.pressing = false;
    this.lapsedTime = 0;
    this.onReleasePressing.next();
  }

}

import { Component } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-long-press2-demo';

  timeLapsed1: number;


  constructor(private snackbar: MatSnackBar) {
  }

  onLongPress() {
    this.snackbar.open('long press achieved', 'OK', { duration: 1000 });
  }

  onLongPressing(timeLapsed: number) {
    this.timeLapsed1 = timeLapsed;
  }

  onReleasePressing() {
    if (this.timeLapsed1 > 0) {
      this.snackbar.open('long press released', 'OK', { duration: 1000 });
      this.timeLapsed1 = 0;
    }
  }
}

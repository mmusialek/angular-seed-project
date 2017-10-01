import { Observable } from 'rxjs/Rx';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'vth-simple-clock',
  templateUrl: 'simple-clock.component.html',
  styleUrls: ['./simple-clock.component.scss']
})
export class SimpleClockComponent implements OnInit {

  timer: string;
  timerObs: Observable<number>;

  constructor(private ngZone: NgZone) {

  }

  public ngOnInit(): void {

    // this.timerObs = Observable.interval(1000);
    // Observable.interval(1000).subscribe(() => {
    //   this.timer = new Date().toLocaleTimeString();
    // });
    this.goOutsideAngular();
  }

  goOutsideAngular() {
    this.ngZone.runOutsideAngular(() => {

      this.timerObs = Observable.interval(1000);
      Observable.interval(1000).subscribe(() => {
        this.timer = new Date().toLocaleTimeString();
        this.ngZone.run(() => {
        });
      });
    });
  }

}

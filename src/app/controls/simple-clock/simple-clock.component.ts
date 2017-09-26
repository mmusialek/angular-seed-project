import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vth-simple-clock',
  templateUrl: 'simple-clock.component.html',
  styleUrls: ['./simple-clock.component.scss']
})
export class SimpleClockComponent implements OnInit {

  timer: string;

  public ngOnInit(): void {

    Observable.interval(1000).subscribe(() => {
      this.timer = new Date().toLocaleTimeString();
    });


  }

}

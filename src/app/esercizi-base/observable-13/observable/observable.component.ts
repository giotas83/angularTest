import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable, pipe, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {

  interval = '';
  intervalSubscription: Subscription;

  customInterval = '';
  customIntervalSubscription: Subscription;

  public subject = new Subject<number>(); // creare in un servizio, per la comunicazione tra componenti lontani
  subject1 = '';
  subject2 = '';
  subject1Subscrived = false;
  subject2Subscrived = false;
  subjectSubscription1: Subscription;
  subjectSubscription2: Subscription;

  constructor() { }

  ngOnInit() {
    // this.subject.subscribe( data => this.subject1 = data );
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {this.intervalSubscription.unsubscribe(); }
    if (this.customIntervalSubscription) {this.customIntervalSubscription.unsubscribe(); }
    if (this.subjectSubscription1) {this.subjectSubscription1.unsubscribe(); }
    if (this.subjectSubscription2) {this.subjectSubscription2.unsubscribe(); }
  }

  public startInterval() {
    const $interval = interval(1000);
    this.intervalSubscription = $interval.subscribe( (data: number) => {

      this.interval += !!this.interval ? `, ${data}` : `${data}`;
    });
  }
  public stopIntervalAndReset() {
    if (this.intervalSubscription) {this.intervalSubscription.unsubscribe(); }
    this.interval = '';
  }

  public startCustomInterval() {
    const $customInterval = new Observable<number>((observer) => {
      let num = 0;
      setInterval( () => {
        observer.next(num++);
        if (num > 6) {observer.error(new Error('numero maggiore di 6')); }
      }, 1000);
    });


    this.customIntervalSubscription = $customInterval
      .pipe(
        filter(num => num > 2),
        map((num: number) => {
          return !!this.customInterval ? `, ${num}` : `${num}`;
        }))
      .subscribe( (data: string) => {
      console.log(this.customInterval);
      this.customInterval += data;
    }, error => {
      console.log(error);
      this.customInterval += error;
    });
  }
  public stopCustomInterval() {
    if (this.customIntervalSubscription) {this.customIntervalSubscription.unsubscribe(); }
  }

  public activateSubject() {
    let counter = 0;
    setInterval( () => { this.subject.next(counter++); } , 1000);
  }

  public completeSubject() {
    this.subject.complete();
  }

  subscribeSubject1() {
    this.subject1Subscrived = true;
    this.subjectSubscription1 = this.subject.subscribe( data => this.subject1 += ' ' + data );
  }
  subscribeSubject2() {
    this.subject2Subscrived = true;
    this.subjectSubscription2 = this.subject.subscribe( data => this.subject2 += ' ' +  data );
  }

  cancelSubject1() {
    this.subject1Subscrived = false;
    if (this.subjectSubscription1) {this.subjectSubscription1.unsubscribe(); }
  }

  cancelSubject2() {
    this.subject2Subscrived = false;
    if (this.subjectSubscription2) {this.subjectSubscription2.unsubscribe(); }
  }

}

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Post } from './post-model';
import { PostRestService } from './post-rest.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit, OnDestroy {

  form: FormGroup;
  posts: Post[] = [];
  loading = false;
  loaderSubscription: Subscription;
  postSubscription: Subscription;

  constructor(private postRestServ: PostRestService) { }

  ngOnInit() {
    this.initForm();
    this.postRestServ.getPosts();
    this.createSubscription();

    // per test
    //this.postRestServ.testGetObserveResponse();
    //this.postRestServ.testGetObserveEvents();
    //this.postRestServ.testGetResponseType();
    //this.postRestServ.testGetReportProgress();
  }

  ngOnDestroy(): void {
      this.loaderSubscription.unsubscribe();
      this.postSubscription.unsubscribe();
  }

  public initForm() {
    this.form = new FormGroup({
      'title': new FormControl('', Validators.required),
      'body': new FormControl('', Validators.required)
    });
  }

  createSubscription() {
    this.loaderSubscription = this.postRestServ.$loaderChangeObs
      .subscribe( showLoading => this.loading = showLoading);

    this.postSubscription = this.postRestServ.$postChangeObs
      .subscribe( (posts: Post[]) => {
        this.posts = posts;
        this.form.reset();
      });
  }

  onSubmit() {
    this.postRestServ.createPost(this.form.get('title').value, this.form.get('body').value);
  }

  onDeleteAll() {
    this.postRestServ.deleteAllPosts();
  }


}


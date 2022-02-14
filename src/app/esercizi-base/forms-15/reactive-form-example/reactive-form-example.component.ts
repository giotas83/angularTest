import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent implements OnInit {

  public form: FormGroup;

  public genders: string[] = ['male', 'female'];

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    this.form = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male')
    })
  }

  public onSubmit() {
    console.log(this.form);
  }

}

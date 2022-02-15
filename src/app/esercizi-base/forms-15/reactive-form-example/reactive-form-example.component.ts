import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent implements OnInit {

  public form: FormGroup;

  public genders: string[] = ['male', 'female'];

  get hobbiesControls() {
    return (this.form.get('hobbies') as FormArray).controls;
  }

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    this.form = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
  }

  public onAddHobby(): void {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('hobbies')).push(control);
  }

  public onSubmit() {
    console.log(this.form);
  }

}

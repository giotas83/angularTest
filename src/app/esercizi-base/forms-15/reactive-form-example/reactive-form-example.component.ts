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

  // per validatore nomi vietati
  private forbiddenNames: string[] = ['giovanni', 'paola'];

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
        'username': new FormControl(null, [Validators.required, this.forbiddenNamesValidator.bind(this)]),
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

  // validatore custom - scateno un errore se inserisco un nome vietato
  private forbiddenNamesValidator(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null; // non si passa oggetto con false !
  }

  public onSubmit() {
    console.log(this.form);
  }

}

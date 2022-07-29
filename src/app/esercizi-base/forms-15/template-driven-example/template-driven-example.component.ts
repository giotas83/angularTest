import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-example',
  templateUrl: './template-driven-example.component.html',
  styleUrls: ['./template-driven-example.component.scss']
})
export class TemplateDrivenExampleComponent implements OnInit {

  @ViewChild('f') signupForm: NgForm; // static: true si vadrà già nell ngOnInit

  public submitted: boolean = false;

  public domandaPredefinita = 'pet';
  public answer = '';
  public genders = ['male', 'female'];

  public model;
  public user;

  constructor() {
    this.model = { nome: ''};
    this.user = {
      username: '',
      email: '',
      secretQuestion: '',
      answer: '',
      gender: '',
      testInput: ''
    }
   }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('submit');
    console.log('submit, stampo ngForm', form);
    console.log('form recuperato da ViewChild', this.signupForm);

    console.warn('nome');
    console.log( 'il nome è: ', this.model.nome);

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.user.testInput = this.signupForm.value.inputTest;

    this.submitted = true;
    this.resetForm();
  }

  suggestUserName() {
    const usernameModificato = 'Suggerito';
    // in setValue metto un oggetto che rispecchia il campo value del ngForm
    // con setValue sono obbligato a ricreare tutto l'oggetto value, anche dei campi che non voglio modificare
    /* this.signupForm.setValue({
      userData: {
        username: usernameModificato,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    }); */

    // così invece modifico un solo valore senza mpdificare gli altri
    // devo questo metodo è presente nel formGroup, quindi devo accedere li per trovarlo
    (this.signupForm.form as FormGroup).patchValue({userData: { username: usernameModificato}});
  }

  public resetForm(): void {
    this.signupForm.reset();
  }

}

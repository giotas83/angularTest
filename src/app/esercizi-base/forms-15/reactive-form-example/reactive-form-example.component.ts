import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent implements OnInit, OnDestroy {

  public form: FormGroup;

  public genders: string[] = ['male', 'female'];

  // per validatori custom
  private forbiddenNames: string[] = ['giovanni', 'paola'];
  private forbiddenEmails: string[] = ['test@test.com', 'prova@prova.com'];

  get hobbiesControls() {
    return (this.form.get('hobbies') as FormArray).controls;
  }

  // Subscriptions
  private formValueChangeSubs: Subscription;
  private formStatusChangeSubs: Subscription;

  constructor() { }

  ngOnInit() {
    this.createForm();

    // sottoscrivo al valueChange di tutto il form
    // posso anche sottoscrivermi ai singoli controlli
    this.formValueChangeSubs = this.form.valueChanges.subscribe(
      (val: {[key: string]: any}) => console.log('Obj al value change del form: ', val)
    );

    // sottoscrivo status change, INVALID, VALID, PENDING (ad esempio è pending se sta aspettando un validatore asincrono, che arriva dopo)
    this.formStatusChangeSubs = this.form.statusChanges.subscribe(
      (status: string) => console.log('String al cambio stato del form: ', status)
    );
  }

  ngOnDestroy(): void {
      this.formValueChangeSubs.unsubscribe();
      this.formValueChangeSubs.unsubscribe();
  }

  public createForm(): void {
    this.form = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNamesValidator.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmailsAsyncValidator.bind(this))
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
  }

  public onAddHobby(): void {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('hobbies')).push(control);
  }

  // setto i valori del form, sono abbligato a inserire tutto il formGroup
  // utilizzate opzioni:
  // onlySelf: When true, each change only affects this control, and not its parent. Default is false.
  // emitEvent: When true or not supplied (the default), both the statusChanges and valueChanges observables emit events with the latest status and value when the control value is updated. When false, no events are emitted.
  public setFormValues() {
    // (<FormArray>this.form.get('hobbies')).push(new FormControl(null)); se voglio aggiungere in hobbies prima devo aggiungere il formControl
    this.form.setValue({
      'userData': {
        'username': 'Pippo',
        'email': 'ciao@ciao.com'
      },
      'gender': 'female',
      'hobbies': [] // ['calcio']  se voglio aggiungere un valore
    }, {onlySelf: false, emitEvent: true}); // utilizzate opzioni
  }

  // setto i valori del form, posso inserire anche i singoli valori
  public patchFormValues() {
    this.form.patchValue({
      'userData': {
        'username': 'ciao sono io'
      }
    });
  }


  // validatore custom - scateno un errore se inserisco un nome vietato
  private forbiddenNamesValidator(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null; // non si passa oggetto con false !
  }

  // validatore custom asincrono(se devo chiamare un servizio ad esempio, simulo con setTimeout)
  private forbiddenEmailsAsyncValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        if(this.forbiddenEmails.indexOf(control.value) !== -1) {
          resolve({'forbiddenEmail': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }

  public onSubmit() {
    console.log(this.form);
    this.resetForm();
  }

  // resetto il form, posso inserire un oggetto per popolare i campi al reset
  // imposto il radioButton
  // da angular 13 posso inserire al new FormControl('male', {initalValueIsDefault: true})
  // così posso usare solo reset() e imposta il campo di default
  public resetForm() {
    this.form.reset({'gender': 'male'});
  }

}

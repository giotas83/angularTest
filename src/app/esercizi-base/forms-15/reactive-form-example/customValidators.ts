import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";


export class CustomValidators {

    // per validatori custom, se nn metto static non vengono trovati nei metodi statici
  private static readonly forbiddenNames: string[] = ['giovanni', 'paola'];
  private static readonly forbiddenEmails: string[] = ['test@test.com', 'prova@prova.com'];


    // validatore custom - scateno un errore se inserisco un nome vietato
  static forbiddenNamesValidator(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null; // non si passa oggetto con false !
  }

    // validatore custom asincrono(se devo chiamare un servizio ad esempio, simulo con setTimeout)
  static forbiddenEmailsAsyncValidator(control: FormControl): Promise<any> | Observable<any> {
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


}
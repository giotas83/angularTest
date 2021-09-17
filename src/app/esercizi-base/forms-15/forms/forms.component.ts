import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  // TEST PER CONVERTIRE UN FILE IN BASE64 *******************************************
  async onInputChange(evt: Event) {

    if ((evt.target as HTMLInputElement).files && (evt.target as HTMLInputElement).files.length > 1) {
      alert('selezionare un solo file');
      return;
    }

    let file: File = (evt.target as HTMLInputElement).files[0];
    console.log('file in input', file);
    const fileBase: string | Error = await this.toBase64(file).catch(e => new Error(e));
    if (fileBase instanceof Error) {
       console.log('Error: ', fileBase.message);
       return;
    }
    console.log('file finale base 64', fileBase);
  }

  toBase64(file: File): Promise<string> {
    return new Promise( (resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        resolve(fileReader.result as string);
      };
    });
  }
  // ***************************************************************************************



}

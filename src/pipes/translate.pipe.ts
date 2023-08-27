import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

import * as english from "./../languages/en.json";
import * as telugu from "./../languages/tel.json";

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  eng: any = english;
  tel: any = telugu;

  transform(key: string, screen: string, lang: string): string {
    if(!key || !screen) {
      return key;
    }

    let language = lang;

      if(!language) {
        language = "en";
      }
  
      switch(language) {
        case "en":
          return this.eng[screen][key];
        case "tel":
          return this.tel[screen][key];
        default:
          return key;
      }
  }

}

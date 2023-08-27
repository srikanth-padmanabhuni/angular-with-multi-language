import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language = new BehaviorSubject<string>("en");

  constructor() { }

  getCurrentLanguage(): Observable<string> {
    return this.language;
  }

  setCurrentLanguage(lang : string): void {
    this.language.next(lang);
  }
}

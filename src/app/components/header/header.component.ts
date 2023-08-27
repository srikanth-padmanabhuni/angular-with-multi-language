import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { staticData } from 'src/app/constants/staticData';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  screen: string = "header";

  languageForm: FormGroup = new FormGroup({});

  languages: any = staticData.languages;

  constructor( 
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.languageService.getCurrentLanguage().subscribe((lang: string) => {
      this.languageForm = new FormGroup({
        language: new FormControl(lang)
      });
    });
  }

  changeLanguage() {
    const lang = this.languageForm.get('language')?.value;
    this.languageService.setCurrentLanguage(lang);
  }
}

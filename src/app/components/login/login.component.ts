import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges, DoCheck{

  screen: string = "login";
  lang: string = "";
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.language.getCurrentLanguage().subscribe((lang: string) => {
      this.lang = lang;
    })
  }

  ngDoCheck(): void {
    this.language.getCurrentLanguage().subscribe((lang: string) => {
      this.lang = lang;
    })
  }

  login() {
    console.log(this.loginForm.value);
  }
}

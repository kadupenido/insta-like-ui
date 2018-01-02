import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  exibirErro: Boolean = false;
  msgErro: String;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.formLogin = this.fb.group({
      'userName': [null, Validators.required],
      'password': [null, Validators.required]
    });

  }

  login(form) {
    this.authService.authenticate(form.userName, form.password).then((res) => {
      if (res.success) {
        this.router.navigate(['/']);
      } else {
        this.exibirErro = true;
        this.msgErro = res.message.message;
      }
    });
  }

}

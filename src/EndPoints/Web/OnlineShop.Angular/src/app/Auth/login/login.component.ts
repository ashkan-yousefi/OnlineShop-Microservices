import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ILogin } from 'src/Interfaces/ILogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  constructor(private authservice: AuthService, private router: Router) {

  }
  onSubmit(form: NgForm) {
    const data: ILogin = { Email: this.email, Password: this.password };
    if (this.authservice.login(data) == true)
      this.router.navigate(['userpanel']);
  }
  ngOnInit(): void {
  }

}

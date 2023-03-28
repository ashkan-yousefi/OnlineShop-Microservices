import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { IRegister } from 'src/Interfaces/IRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  repassword: string = '';
  username: string = '';
  constructor(private authservice: AuthService, private router: Router) {

  }
  onSubmit(form: NgForm) {
    const data: IRegister = { email: this.email, password: this.password, rePassword: this.repassword, userName: this.username };
    if (this.authservice.register(data) == true)
      this.router.navigate(['Login']);
  }
  ngOnInit(): void {
  }

}

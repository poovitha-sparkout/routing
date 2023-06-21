import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent {
  form: FormGroup = new FormGroup({
    Email: new FormControl(''),
    password: new FormControl(''),
  });
  error:any;
  submit() {
    if (this.form.valid) {
     return true;
    }
    else{
      return false;
    }
  }
}



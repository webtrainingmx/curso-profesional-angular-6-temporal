import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user: any = {
    email: 'esmeralda@webtraining.zone',
    password: 'esmeralda'
  };

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('>> sent POST request with form');
  }

}

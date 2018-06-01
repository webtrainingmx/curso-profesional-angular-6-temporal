import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../common/services/authentication.service';
import {SessionStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';

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

  constructor(public _authService: AuthenticationService,
              public _sessionStorage: SessionStorageService,
              public router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('>> sent POST request with form');

    this._authService.login(this.user.email, this.user.password).subscribe(
      (data) => {
        // Data from server (laravel)
        console.log(data);
        this._authService.user = data;
        this._authService.hasSession = true;
        this._sessionStorage.store('user', data);

        this.router.navigate(['/auth-home']);
      },
      error => {
        console.error(error);
        this._authService.hasSession = false;
      },
      () => {
      }
    );
  }

}

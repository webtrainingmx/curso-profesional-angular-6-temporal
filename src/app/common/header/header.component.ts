import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {AfterLoginActionsService} from '../services/after-login-actions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appName = 'Rentapy';
  isModalActive = false;

  constructor(public _authService: AuthenticationService,
              public _afterLoginActionsService: AfterLoginActionsService) {
  }

  ngOnInit() {
    this._afterLoginActionsService.onLoginCompleted.subscribe(
      (message: string) => {
        this.toggleModal();
      }
    );
  }

  toggleModal() {
    console.log('click!');
    this.isModalActive = !this.isModalActive;
  }

}

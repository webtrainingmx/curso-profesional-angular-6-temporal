import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appName = 'Rentapy';
  isModalActive = false;

  constructor(public _authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  toggleModal() {
    console.log('click!');
    this.isModalActive = !this.isModalActive;
  }

}

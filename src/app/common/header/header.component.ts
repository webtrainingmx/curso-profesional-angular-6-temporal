import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appName = 'Rentapy';
  isModalActive = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleModal() {
    console.log('click!');
    this.isModalActive = !this.isModalActive;
  }

}

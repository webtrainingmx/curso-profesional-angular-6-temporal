import {Component, OnInit} from '@angular/core';
import {Vehicle} from './models/vehicle.model';
import {VehiclesService} from './services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicles: Array<Vehicle>;

  constructor(public _vehiclesService: VehiclesService) {
  }

  ngOnInit() {
    this._vehiclesService.getVehicles().subscribe(
      response => {
        this.vehicles = response;
      },
      error => {
        console.error(error);
      },
      () => {
        console.log('Finished!');
      }
    );
  }

}

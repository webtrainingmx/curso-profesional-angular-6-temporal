import {Injectable} from '@angular/core';
import {Vehicle} from '../models/vehicle.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  vehicles: Array<Vehicle> = [];

  constructor(public _http: HttpClient, public _sessionService: SessionStorageService) {
  }

  getVehicles(): Observable<Array<Vehicle>> {
    const apiVehiclesURL = `http://rentals-api.webtraining.fun/api/vehicles`;

    return this._http.get<Array<Vehicle>>(apiVehiclesURL);
  }

  getToken(): boolean {
    const user = this._sessionService.retrieve('user');

    if (!!user && !!user.token) {
      return user.token;
    }
    return false;
  }

  createHeadersObject(token) {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${token}`
    });
  }

  getVehiclesByUsingToken(): Observable<Array<Vehicle>> {
    const apiVehiclesURL = `http://rentals-api.webtraining.fun/api/rentals/user`;
    const token = this.getToken();

    if (token) {
      const headers = this.createHeadersObject(token);
      return this._http.get<Array<Vehicle>>(apiVehiclesURL,
        {headers: headers});
    }

  }

  getVehicleById(id: number): Vehicle {
    return this.vehicles.find(vehicle => vehicle.id === id);
  }
}

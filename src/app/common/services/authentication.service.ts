import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API} from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  hasSession = false;
  user: any;

  constructor(public _http: HttpClient) {
  }

  public isLoggedIn() {
    // const user = ''
    return true;
  }

  public login(email: string, password: string) {
    const url = `${API.AUTH_SERVICES_BASE_URL}/auth/login`;

    return this._http.post(url, {
      'email': email,
      'password': password
    });
  }

}

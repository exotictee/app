import { Injectable } from '@angular/core';
import {httpclient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlApi = 'https://requires'

  constructor() { }
}

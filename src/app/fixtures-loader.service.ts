import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FixturesLoaderService {

  constructor(private http: HttpClient) {}

  public load(name: string) {
    return this.http.get(`./assets/fixtures/${name}.json`);
  }
}

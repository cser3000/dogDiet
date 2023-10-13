import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DogService {

  constructor(private dogs: HttpClient) { }

  urlDogs = "http://localhost:3000/dogs";

  getData() {
    return this.dogs.get(this.urlDogs)
  }
}

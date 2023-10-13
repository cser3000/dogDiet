import { Component, OnInit } from '@angular/core';
import {DogService} from "../../servise/dog.service";
import {Dogs} from "../../servise/dogs";

@Component({
  selector: 'app-dog-table',
  templateUrl: './dog-table.component.html',
  styleUrls: ['./dog-table.component.css'],
})
export class DogTableComponent implements OnInit {
  dogs: Dogs[] = [];

  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.dogService.getData().subscribe({next:(data:any) => {
      console.log("A", data)
      this.dogs = data
      }});
  }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css']
})
export class DogCardComponent {
  @Input() dogName = "пес";

  @Input() dogImg = "https://i.postimg.cc/76tVvMTf/dog-img-1.jpg";


}

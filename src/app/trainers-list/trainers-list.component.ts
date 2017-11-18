import { Component} from '@angular/core';

@Component({
  selector: 'trainers-list',
  template:`<div class="trainer"><h3>
    <span *ngFor="let trainer of trainers">
    {{trainer}}&nbsp;
    </span></h3>
</div>
  `, 
  styleUrls:['trainers-list.component.css']
})
export class TrainersListComponent {

    trainers= ["Sreeman","Hari","Ganesh"];
}

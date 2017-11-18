import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {

  people = [
    { name: 'Anurag Reddy', branch: 'CSE', favlang: 'Python' },
    { name: 'Ganesh', branch: 'CSE', favlang: 'C++' },
    { name: 'Akhil', branch: 'CSE', favlang: 'Java' },
    { name: 'Venkatesh', branch: 'CSE', favlang: 'Java' },
    { name: 'Nihal', branch: 'CSE', favlang: 'Java' },
    { name: 'Ashish', branch: 'CSE', favlang: 'Java' },
    { name: 'Soujanya', branch: 'CSE', favlang: 'Java' },
    { name: 'Pavitra', branch: 'CSE', favlang: 'Java' },
    { name: 'Sai kumar', branch: 'CSE', favlang: 'Java' },
    { name: 'Vinay kumar', branch: 'CSE', favlang: 'Java' },
    { name: 'Dandi', branch: 'CSE', favlang: 'Java' },
    { name: 'Anvesh', branch: 'CSE', favlang: 'Java' },
    { name: 'Chaitanya', branch: 'CSE', favlang: 'Java' },
    { name: 'Sravan', branch: 'CSE', favlang: 'Java' }
  ]
}

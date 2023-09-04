import { Component, OnInit } from '@angular/core';


//create a class for to do

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public date: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos= [

    new Todo(1, 'learn angular', false, new Date()),
    new Todo(1, 'learn spring', false, new Date()),
    new Todo(1, 'learn react', false, new Date()),
    new Todo(1, 'learn vue', false, new Date()),

    // {id : 1, description : 'learn Angular1'},
    // {id: 2, description : 'learn angilar 2'}
  ]

  // todo = {
  //   id : 1,
  //   description: 'Learn Angular'
  // }

  constructor() {    
  }

  ngOnInit(): void {
    
  }
}

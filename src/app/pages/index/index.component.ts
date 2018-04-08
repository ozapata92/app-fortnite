import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.services';
import { error } from 'util';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  datos:String;
  title:string = "Hola";
  someProperty:string = '';

  constructor(private bookService:BookService) {
  }

  ngOnInit() {
    //console.log('data var:' + this.data);
    console.log(this.bookService.cars);
    this.someProperty = this.bookService.getData();

  }

}

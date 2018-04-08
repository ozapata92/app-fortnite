import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.services';
import { error } from 'util';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  datos:Object;
  title:string = "Hola";
  someProperty:string = '';

  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.bookService.getData().subscribe(
      data => {
        this.datos = data;
        console.log(this.datos);
      }
    );
  }

}

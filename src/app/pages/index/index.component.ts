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
  constructor(private data:BookService) {
    this.data.getData().subscribe(
      data => this.datos
    )
  }

  ngOnInit() {
  }

}

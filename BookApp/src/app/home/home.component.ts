import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { Books } from '../shared/models/book';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:Books[]=[];
  constructor(private bookService:BookService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        if(params['searchItem']){
          this.books=this.bookService.getAll().filter(book=>book.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
        }
        
        else
          this.books=this.bookService.getAll();
        }
    )

    

  }
  

}

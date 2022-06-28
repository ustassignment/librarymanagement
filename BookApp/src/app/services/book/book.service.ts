import { Injectable } from '@angular/core';
import { Books } from 'src/app/shared/models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAll():Books[]{

    return[
      {
        id:1,
        name:'The Stand',
        author:'Stephen King',
        imageUrl:'/assets/img1.jpg',
    
    },
    {
      id:2,
      name:'The Famous Five',
      author:'Enid Blyton',
      imageUrl:'/assets/img2.jpg',
  
  },
  {
    id:3,
    name:'Relatively Famous',
    author:'Jessica Park',
    imageUrl:'/assets/img3.jpg',

},
{
  id:4,
  name:'Jaws',
  author:'Peter Benchley',
  imageUrl:'/assets/img4.jpg',

},
{
  id:5,
  name:'A Thousand Pieces of You',
  author:'Claudia Gray',
  imageUrl:'/assets/img5.jpg',

},
{
  id:6,
  name:'Crompton Divided',
  author:'Robert Sheckley',
  imageUrl:'/assets/img6.jpg',

},
{
  id:7,
  name:'Frankenstein',
  author:'Mary Stanley',
  imageUrl:'/assets/img7.jpg',

},
{
  id:8,
  name:'Harry Potter and the Cursed Child',
  author:'JK Rowling',
  imageUrl:'/assets/img8.jpg',

},
{
  id:9,
  name:'The Invisible Man',
  author:'H.G Wells',
  imageUrl:'/assets/img9.jpg',

},
{
  id:10,
  name:'The Hobbit',
  author:'J.R.R Tolkien',
  imageUrl:'/assets/img10.jpg',

},
{
  id:11,
  name:'Amazing Fantasy Spider-man',
  author:'Stan Lee',
  imageUrl:'/assets/img11.jpg',

},
{
  id:12,
  name:'Stardust',
  author:'Neil Gaman',
  imageUrl:'/assets/img12.jpg',

},
{
  id:13,
  name:'IT',
  author:'Stephen King',
  imageUrl:'/assets/img13.jpg',

},
{
  id:14,
  name:'The Rave',
  author:'Edgar Allan Poe',
  imageUrl:'/assets/img14.jpg',

}


    ];
  }
}

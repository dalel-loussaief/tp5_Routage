import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent  {
  articles = [
    { id: 1, title: 'Angular Routing Basics' },
    { id: 2, title: 'Understanding Route Parameters' },
    { id: 3, title: 'Nested Routes in Angular' }
  ];
 constructor(private router: Router) {}
 

  goToArticle(id: number) {
    this.router.navigate(['/articles', id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  template: `
    <h3>Détail de l'article</h3>
    <p>ID de l'article : {{ id }}</p>
  `,
})
export class ArticleDetailComponent implements OnInit {
  id: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
}

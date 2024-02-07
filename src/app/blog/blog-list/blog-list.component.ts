import { Component } from '@angular/core';
import { ContentfulService } from '../../../service/contentful.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  constructor(readonly contentfulService: ContentfulService) {}

  blog_list$ = this.contentfulService.getBlogPostList();
}

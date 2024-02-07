import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BlogItem } from '../model/blog';
import { Apollo } from 'apollo-angular';
import { GET_BLOG_POST_LIST } from '../queries/blog-post';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor(readonly apollo: Apollo) {}

  getBlogPostList(skip = 0): Observable<BlogItem[]> {
    this.apollo.query({ query: GET_BLOG_POST_LIST });
    return this.apollo
      .query<{ blogPostCollection: { items: BlogItem[] } }>({
        query: GET_BLOG_POST_LIST,
        variables: {
          limit: 10,
          skip,
        },
      })
      .pipe(
        map((result) => {
          return result.data.blogPostCollection.items;
        }),
      );
  }
}

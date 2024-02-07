import { gql } from 'apollo-angular';

export const GET_BLOG_POST_LIST = gql`
  query ($limit: Int!, $skip: Int!) {
    blogPostCollection(limit: $limit, skip: $skip) {
      items {
        title
        metadataRef {
          description
          tags
          published
        }
        slug
      }
    }
  }
`;

export const GET_BLOG_POST = gql`
  query ($slug: String!) {
    blogPostCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        body {
          json
        }
        authorRef {
          name
          bio
        }
        metadataRef {
          description
          tags
          published
        }
        image {
          url
        }
      }
    }
  }
`;

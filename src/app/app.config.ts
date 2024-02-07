import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

const contentful_url = `https://graphql.contentful.com/content/v1/spaces/${contentful_space_id}/environments/master`;

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        const auth = setContext(() => {
          return {
            headers: {
              Authorization: `Bearer ${contentful_cda_access_token}`,
            },
          };
        });

        const link = ApolloLink.from([
          auth,
          httpLink.create({ uri: contentful_url }),
        ]);
        const cache = new InMemoryCache();
        return {
          link,
          cache,
        };
      },
      deps: [HttpLink],
    },
    importProvidersFrom(ApolloModule),
  ],
};

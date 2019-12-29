import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { ApolloLink, Observable } from 'apollo-link';
// import { onError } from 'apollo-link-error';

const cache = new InMemoryCache();
// {
//   cacheRedirects: {
//     Query: {
//       movie: (_, { id }, { getCacheKey }) =>
//         getCacheKey({ __typename: 'Movie', id });
//     }
//   }
// });

// const request = async (operation) => {
//   const token = await AsyncStorage.getItem('token');
//   operation.setContext({
//     headers: {
//       authorization: token
//     }
//   });
// };

// const errorHandler = ({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     sendToLoggingService(graphQLErrors);
//   }
//   if (networkError) {
//     // logoutUser();
//   }
// };

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GQL_URL
  // credentials: 'include'
});

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle;
      // .then(oper => request(oper))
      Promise.resolve(operation)
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    // onError(errorHandler),
    requestLink,
    withClientState({
      defaults: {
        isConnected: true
      },
      resolvers: {
        Mutation: {
          updateNetworkStatus: (_, { isConnected }, { cache: networkCache }) => {
            networkCache.writeData({ data: { isConnected } });
            return null;
          }
        }
      },
      cache
    }),
    httpLink
  ]),
  cache
});

export default apolloClient;

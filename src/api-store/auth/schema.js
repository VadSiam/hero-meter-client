import gql from 'graphql-tag';

export const registrationUserMutation = gql`
mutation (
  $name: String!,
  $password: String!,
){
  registration(
    name: $name,
    password: $password,
  ) {
    name
  }
}
`;

export const autorizationTokenQuery = gql`
  query {
    authorization {
      value
    }
  }
`;

export const autorizationUserMutation = gql`
  mutation (
    $name: String!,
    $password: String!,
  ){
    authorization(
      name: $name,
      password: $password,
    ) {
      value
    }
  }
`;

export const usersQuery = gql`
query{
  users{
    name
  }
}
`;

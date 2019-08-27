import gql from "graphql-tag";

export const AUTHENTICATED = gql`
    mutation Authenticate($userId:ID!, $qrCode:String!) {
    authenticate(id:$userId, qrCode:$qrCode) {
            isLoggedIn
      }
    }
`;

export const CURRENT_USER = gql`
    query CurrentUser($current:ID) {
        user(where:{ id:$current }) {
            email
            role
          }
        }
`;

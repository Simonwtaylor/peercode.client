import { gql } from "@apollo/client";

export const createMessageMutation = gql`
mutation createMessage ($createMessageInput: CreateMessageModel!) {
  createMessage (createMessageInput: $createMessageInput) {
    id
  }
}
`;
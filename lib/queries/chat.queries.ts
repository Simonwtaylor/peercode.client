import { gql } from '@apollo/client';

export const getChatQuery = gql`
query chat ($id: Int!) {
  chat (id: $id) {
    id
    name
    messages {
      id
      content
      datePosted
      user {
        id
        username
        email
        role
        bio
        github
        twitter
        website
        mentor
        uid
        imageUrl
        discordId
      }
      userId
      chatId
    }
  }
}
`;

export const getUserChatsQuery = gql`
query userChats ($id: Int!) {
  userChats (id: $id) {
    id
    name
  }
}
`;
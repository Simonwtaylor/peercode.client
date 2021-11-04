import { gql } from '@apollo/client';

export const updateContractMutation = gql`
mutation updateContract ($updateContractInput: UpdateContractModel!) {
  updateContract (updateContractInput: $updateContractInput) {
    id
  }
}
`;
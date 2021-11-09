import { gql } from '@apollo/client';

export const updateContractMutation = gql`
mutation updateContract ($updateContractInput: UpdateContractModel!) {
  updateContract (updateContractInput: $updateContractInput) {
    id
  }
}
`;

export const createContractMutation = gql`
mutation createContract ($createContractInput: CreateContractModel!) {
  createContract (createContractInput: $createContractInput) {
    id
  }
}
`;

export const signContractMutation = gql`
mutation updateUserContractSignature ($updateUserContractSignatureInput: UpdateUserContractSignatureModel!) {
  updateUserContractSignature (updateUserContractSignatureInput: $updateUserContractSignatureInput) {
    id
  }
}
`;
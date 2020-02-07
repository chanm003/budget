import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  ObjectId: any,
  DateTime: any,
};

export type CacIdentity = {
   __typename?: 'CacIdentity',
  distinguishedName: Scalars['String'],
};


export type Directorate = {
   __typename?: 'Directorate',
  _id: Scalars['ObjectId'],
  title: Scalars['String'],
  createdAt: Scalars['DateTime'],
  createdBy: User,
  updatedAt: Scalars['DateTime'],
  updatedBy: User,
};

export type DirectorateInput = {
  title: Scalars['String'],
};

export type GithubIdentity = {
   __typename?: 'GithubIdentity',
  id: Scalars['String'],
};

export type LocalIdentity = {
   __typename?: 'LocalIdentity',
  expires: Scalars['DateTime'],
};

export type MfpIndicator = {
   __typename?: 'MfpIndicator',
  _id: Scalars['ObjectId'],
  title: Scalars['String'],
  createdAt: Scalars['DateTime'],
  createdBy: User,
  updatedAt: Scalars['DateTime'],
  updatedBy: User,
};

export type MfpIndicatorInput = {
  title: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  DirectorateCreateOne: Directorate,
  DirectorateUpdateById?: Maybe<Directorate>,
  DirectorateRemoveById?: Maybe<Directorate>,
  MfpIndicatorCreateOne: MfpIndicator,
  MfpIndicatorUpdateById?: Maybe<MfpIndicator>,
  MfpIndicatorRemoveById?: Maybe<MfpIndicator>,
  ProgramCreateOne: Program,
  ProgramUpdateById?: Maybe<Program>,
  ProgramRemoveById?: Maybe<Program>,
  UserUpdateMyProfile?: Maybe<UpdateMyProfileResult>,
};


export type MutationDirectorateCreateOneArgs = {
  input: DirectorateInput
};


export type MutationDirectorateUpdateByIdArgs = {
  input: DirectorateInput,
  id: Scalars['ObjectId']
};


export type MutationDirectorateRemoveByIdArgs = {
  id: Scalars['ObjectId']
};


export type MutationMfpIndicatorCreateOneArgs = {
  input: MfpIndicatorInput
};


export type MutationMfpIndicatorUpdateByIdArgs = {
  input: MfpIndicatorInput,
  id: Scalars['ObjectId']
};


export type MutationMfpIndicatorRemoveByIdArgs = {
  id: Scalars['ObjectId']
};


export type MutationProgramCreateOneArgs = {
  input: ProgramInput
};


export type MutationProgramUpdateByIdArgs = {
  input: ProgramInput,
  id: Scalars['ObjectId']
};


export type MutationProgramRemoveByIdArgs = {
  id: Scalars['ObjectId']
};


export type MutationUserUpdateMyProfileArgs = {
  input: UserInput
};


export type Program = {
   __typename?: 'Program',
  _id: Scalars['ObjectId'],
  title: Scalars['String'],
  createdAt: Scalars['DateTime'],
  createdBy: User,
  updatedAt: Scalars['DateTime'],
  updatedBy: User,
};

export type ProgramInput = {
  title: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  DirectorateById?: Maybe<Directorate>,
  DirectorateMany: Array<Directorate>,
  MfpIndicatorById?: Maybe<MfpIndicator>,
  MfpIndicatorMany: Array<MfpIndicator>,
  ProgramById?: Maybe<Program>,
  ProgramMany: Array<Program>,
  UserById?: Maybe<User>,
};


export type QueryDirectorateByIdArgs = {
  id: Scalars['ObjectId']
};


export type QueryMfpIndicatorByIdArgs = {
  id: Scalars['ObjectId']
};


export type QueryProgramByIdArgs = {
  id: Scalars['ObjectId']
};


export type QueryUserByIdArgs = {
  id: Scalars['ObjectId']
};

export type UpdateMyProfileResult = {
   __typename?: 'UpdateMyProfileResult',
  user: User,
  token: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  _id: Scalars['ObjectId'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  method: Scalars['String'],
  cac?: Maybe<CacIdentity>,
  github?: Maybe<GithubIdentity>,
  local?: Maybe<LocalIdentity>,
  lastLoggedIn: Scalars['DateTime'],
  role: Scalars['String'],
};

export type UserInput = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
};

export type DirectorateByIdQueryVariables = {
  id: Scalars['ObjectId']
};


export type DirectorateByIdQuery = (
  { __typename?: 'Query' }
  & { DirectorateById: Maybe<(
    { __typename?: 'Directorate' }
    & Pick<Directorate, '_id' | 'title'>
  )> }
);

export type DirectorateManyQueryVariables = {};


export type DirectorateManyQuery = (
  { __typename?: 'Query' }
  & { DirectorateMany: Array<(
    { __typename?: 'Directorate' }
    & Pick<Directorate, '_id' | 'title' | 'updatedAt'>
    & { updatedBy: (
      { __typename?: 'User' }
      & Pick<User, '_id' | 'firstName' | 'lastName'>
    ) }
  )> }
);

export type DirectorateCreateOneMutationVariables = {
  title: Scalars['String']
};


export type DirectorateCreateOneMutation = (
  { __typename?: 'Mutation' }
  & { DirectorateCreateOne: (
    { __typename?: 'Directorate' }
    & Pick<Directorate, '_id' | 'title'>
  ) }
);

export type DirectorateRemoveByIdMutationVariables = {
  id: Scalars['ObjectId']
};


export type DirectorateRemoveByIdMutation = (
  { __typename?: 'Mutation' }
  & { DirectorateRemoveById: Maybe<(
    { __typename?: 'Directorate' }
    & Pick<Directorate, '_id' | 'title'>
  )> }
);

export type DirectorateUpdateByIdMutationVariables = {
  id: Scalars['ObjectId'],
  title: Scalars['String']
};


export type DirectorateUpdateByIdMutation = (
  { __typename?: 'Mutation' }
  & { DirectorateUpdateById: Maybe<(
    { __typename?: 'Directorate' }
    & Pick<Directorate, '_id' | 'title'>
  )> }
);

export type MfpIndicatorByIdQueryVariables = {
  id: Scalars['ObjectId']
};


export type MfpIndicatorByIdQuery = (
  { __typename?: 'Query' }
  & { MfpIndicatorById: Maybe<(
    { __typename?: 'MfpIndicator' }
    & Pick<MfpIndicator, '_id' | 'title'>
  )> }
);

export type MfpIndicatorManyQueryVariables = {};


export type MfpIndicatorManyQuery = (
  { __typename?: 'Query' }
  & { MfpIndicatorMany: Array<(
    { __typename?: 'MfpIndicator' }
    & Pick<MfpIndicator, '_id' | 'title' | 'updatedAt'>
    & { updatedBy: (
      { __typename?: 'User' }
      & Pick<User, '_id' | 'firstName' | 'lastName'>
    ) }
  )> }
);

export type MfpIndicatorCreateOneMutationVariables = {
  title: Scalars['String']
};


export type MfpIndicatorCreateOneMutation = (
  { __typename?: 'Mutation' }
  & { MfpIndicatorCreateOne: (
    { __typename?: 'MfpIndicator' }
    & Pick<MfpIndicator, '_id' | 'title'>
  ) }
);

export type MfpIndicatorRemoveByIdMutationVariables = {
  id: Scalars['ObjectId']
};


export type MfpIndicatorRemoveByIdMutation = (
  { __typename?: 'Mutation' }
  & { MfpIndicatorRemoveById: Maybe<(
    { __typename?: 'MfpIndicator' }
    & Pick<MfpIndicator, '_id' | 'title'>
  )> }
);

export type MfpIndicatorUpdateByIdMutationVariables = {
  id: Scalars['ObjectId'],
  title: Scalars['String']
};


export type MfpIndicatorUpdateByIdMutation = (
  { __typename?: 'Mutation' }
  & { MfpIndicatorUpdateById: Maybe<(
    { __typename?: 'MfpIndicator' }
    & Pick<MfpIndicator, '_id' | 'title'>
  )> }
);

export type ProgramByIdQueryVariables = {
  id: Scalars['ObjectId']
};


export type ProgramByIdQuery = (
  { __typename?: 'Query' }
  & { ProgramById: Maybe<(
    { __typename?: 'Program' }
    & Pick<Program, '_id' | 'title'>
  )> }
);

export type ProgramManyQueryVariables = {};


export type ProgramManyQuery = (
  { __typename?: 'Query' }
  & { ProgramMany: Array<(
    { __typename?: 'Program' }
    & Pick<Program, '_id' | 'title' | 'updatedAt'>
    & { updatedBy: (
      { __typename?: 'User' }
      & Pick<User, '_id' | 'firstName' | 'lastName'>
    ) }
  )> }
);

export type ProgramCreateOneMutationVariables = {
  title: Scalars['String']
};


export type ProgramCreateOneMutation = (
  { __typename?: 'Mutation' }
  & { ProgramCreateOne: (
    { __typename?: 'Program' }
    & Pick<Program, '_id' | 'title'>
  ) }
);

export type ProgramRemoveByIdMutationVariables = {
  id: Scalars['ObjectId']
};


export type ProgramRemoveByIdMutation = (
  { __typename?: 'Mutation' }
  & { ProgramRemoveById: Maybe<(
    { __typename?: 'Program' }
    & Pick<Program, '_id' | 'title'>
  )> }
);

export type ProgramUpdateByIdMutationVariables = {
  id: Scalars['ObjectId'],
  title: Scalars['String']
};


export type ProgramUpdateByIdMutation = (
  { __typename?: 'Mutation' }
  & { ProgramUpdateById: Maybe<(
    { __typename?: 'Program' }
    & Pick<Program, '_id' | 'title'>
  )> }
);

export type UserByIdQueryVariables = {
  id: Scalars['ObjectId']
};


export type UserByIdQuery = (
  { __typename?: 'Query' }
  & { UserById: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'firstName' | 'lastName' | 'email'>
  )> }
);

export type UserUpdateMyProfileMutationVariables = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String']
};


export type UserUpdateMyProfileMutation = (
  { __typename?: 'Mutation' }
  & { UserUpdateMyProfile: Maybe<(
    { __typename?: 'UpdateMyProfileResult' }
    & Pick<UpdateMyProfileResult, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, '_id' | 'firstName' | 'lastName' | 'email' | 'lastLoggedIn'>
    ) }
  )> }
);


export const DirectorateByIdDocument = gql`
    query DirectorateById($id: ObjectId!) {
  DirectorateById(id: $id) {
    _id
    title
  }
}
    `;
export type DirectorateByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<DirectorateByIdQuery, DirectorateByIdQueryVariables>, 'query'> & ({ variables: DirectorateByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const DirectorateByIdComponent = (props: DirectorateByIdComponentProps) => (
      <ApolloReactComponents.Query<DirectorateByIdQuery, DirectorateByIdQueryVariables> query={DirectorateByIdDocument} {...props} />
    );
    
export type DirectorateByIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<DirectorateByIdQuery, DirectorateByIdQueryVariables> & TChildProps;
export function withDirectorateById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DirectorateByIdQuery,
  DirectorateByIdQueryVariables,
  DirectorateByIdProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, DirectorateByIdQuery, DirectorateByIdQueryVariables, DirectorateByIdProps<TChildProps>>(DirectorateByIdDocument, {
      alias: 'directorateById',
      ...operationOptions
    });
};

/**
 * __useDirectorateByIdQuery__
 *
 * To run a query within a React component, call `useDirectorateByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useDirectorateByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDirectorateByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDirectorateByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DirectorateByIdQuery, DirectorateByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<DirectorateByIdQuery, DirectorateByIdQueryVariables>(DirectorateByIdDocument, baseOptions);
      }
export function useDirectorateByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DirectorateByIdQuery, DirectorateByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DirectorateByIdQuery, DirectorateByIdQueryVariables>(DirectorateByIdDocument, baseOptions);
        }
export type DirectorateByIdQueryHookResult = ReturnType<typeof useDirectorateByIdQuery>;
export type DirectorateByIdLazyQueryHookResult = ReturnType<typeof useDirectorateByIdLazyQuery>;
export type DirectorateByIdQueryResult = ApolloReactCommon.QueryResult<DirectorateByIdQuery, DirectorateByIdQueryVariables>;
export const DirectorateManyDocument = gql`
    query DirectorateMany {
  DirectorateMany {
    _id
    title
    updatedAt
    updatedBy {
      _id
      firstName
      lastName
    }
  }
}
    `;
export type DirectorateManyComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<DirectorateManyQuery, DirectorateManyQueryVariables>, 'query'>;

    export const DirectorateManyComponent = (props: DirectorateManyComponentProps) => (
      <ApolloReactComponents.Query<DirectorateManyQuery, DirectorateManyQueryVariables> query={DirectorateManyDocument} {...props} />
    );
    
export type DirectorateManyProps<TChildProps = {}> = ApolloReactHoc.DataProps<DirectorateManyQuery, DirectorateManyQueryVariables> & TChildProps;
export function withDirectorateMany<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DirectorateManyQuery,
  DirectorateManyQueryVariables,
  DirectorateManyProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, DirectorateManyQuery, DirectorateManyQueryVariables, DirectorateManyProps<TChildProps>>(DirectorateManyDocument, {
      alias: 'directorateMany',
      ...operationOptions
    });
};

/**
 * __useDirectorateManyQuery__
 *
 * To run a query within a React component, call `useDirectorateManyQuery` and pass it any options that fit your needs.
 * When your component renders, `useDirectorateManyQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDirectorateManyQuery({
 *   variables: {
 *   },
 * });
 */
export function useDirectorateManyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DirectorateManyQuery, DirectorateManyQueryVariables>) {
        return ApolloReactHooks.useQuery<DirectorateManyQuery, DirectorateManyQueryVariables>(DirectorateManyDocument, baseOptions);
      }
export function useDirectorateManyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DirectorateManyQuery, DirectorateManyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DirectorateManyQuery, DirectorateManyQueryVariables>(DirectorateManyDocument, baseOptions);
        }
export type DirectorateManyQueryHookResult = ReturnType<typeof useDirectorateManyQuery>;
export type DirectorateManyLazyQueryHookResult = ReturnType<typeof useDirectorateManyLazyQuery>;
export type DirectorateManyQueryResult = ApolloReactCommon.QueryResult<DirectorateManyQuery, DirectorateManyQueryVariables>;
export const DirectorateCreateOneDocument = gql`
    mutation DirectorateCreateOne($title: String!) {
  DirectorateCreateOne(input: {title: $title}) {
    _id
    title
  }
}
    `;
export type DirectorateCreateOneMutationFn = ApolloReactCommon.MutationFunction<DirectorateCreateOneMutation, DirectorateCreateOneMutationVariables>;
export type DirectorateCreateOneComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DirectorateCreateOneMutation, DirectorateCreateOneMutationVariables>, 'mutation'>;

    export const DirectorateCreateOneComponent = (props: DirectorateCreateOneComponentProps) => (
      <ApolloReactComponents.Mutation<DirectorateCreateOneMutation, DirectorateCreateOneMutationVariables> mutation={DirectorateCreateOneDocument} {...props} />
    );
    
export type DirectorateCreateOneProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DirectorateCreateOneMutation, DirectorateCreateOneMutationVariables> & TChildProps;
export function withDirectorateCreateOne<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DirectorateCreateOneMutation,
  DirectorateCreateOneMutationVariables,
  DirectorateCreateOneProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DirectorateCreateOneMutation, DirectorateCreateOneMutationVariables, DirectorateCreateOneProps<TChildProps>>(DirectorateCreateOneDocument, {
      alias: 'directorateCreateOne',
      ...operationOptions
    });
};

/**
 * __useDirectorateCreateOneMutation__
 *
 * To run a mutation, you first call `useDirectorateCreateOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDirectorateCreateOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [directorateCreateOneMutation, { data, loading, error }] = useDirectorateCreateOneMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useDirectorateCreateOneMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DirectorateCreateOneMutation, DirectorateCreateOneMutationVariables>) {
        return ApolloReactHooks.useMutation<DirectorateCreateOneMutation, DirectorateCreateOneMutationVariables>(DirectorateCreateOneDocument, baseOptions);
      }
export type DirectorateCreateOneMutationHookResult = ReturnType<typeof useDirectorateCreateOneMutation>;
export type DirectorateCreateOneMutationResult = ApolloReactCommon.MutationResult<DirectorateCreateOneMutation>;
export type DirectorateCreateOneMutationOptions = ApolloReactCommon.BaseMutationOptions<DirectorateCreateOneMutation, DirectorateCreateOneMutationVariables>;
export const DirectorateRemoveByIdDocument = gql`
    mutation DirectorateRemoveById($id: ObjectId!) {
  DirectorateRemoveById(id: $id) {
    _id
    title
  }
}
    `;
export type DirectorateRemoveByIdMutationFn = ApolloReactCommon.MutationFunction<DirectorateRemoveByIdMutation, DirectorateRemoveByIdMutationVariables>;
export type DirectorateRemoveByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DirectorateRemoveByIdMutation, DirectorateRemoveByIdMutationVariables>, 'mutation'>;

    export const DirectorateRemoveByIdComponent = (props: DirectorateRemoveByIdComponentProps) => (
      <ApolloReactComponents.Mutation<DirectorateRemoveByIdMutation, DirectorateRemoveByIdMutationVariables> mutation={DirectorateRemoveByIdDocument} {...props} />
    );
    
export type DirectorateRemoveByIdProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DirectorateRemoveByIdMutation, DirectorateRemoveByIdMutationVariables> & TChildProps;
export function withDirectorateRemoveById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DirectorateRemoveByIdMutation,
  DirectorateRemoveByIdMutationVariables,
  DirectorateRemoveByIdProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DirectorateRemoveByIdMutation, DirectorateRemoveByIdMutationVariables, DirectorateRemoveByIdProps<TChildProps>>(DirectorateRemoveByIdDocument, {
      alias: 'directorateRemoveById',
      ...operationOptions
    });
};

/**
 * __useDirectorateRemoveByIdMutation__
 *
 * To run a mutation, you first call `useDirectorateRemoveByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDirectorateRemoveByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [directorateRemoveByIdMutation, { data, loading, error }] = useDirectorateRemoveByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDirectorateRemoveByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DirectorateRemoveByIdMutation, DirectorateRemoveByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<DirectorateRemoveByIdMutation, DirectorateRemoveByIdMutationVariables>(DirectorateRemoveByIdDocument, baseOptions);
      }
export type DirectorateRemoveByIdMutationHookResult = ReturnType<typeof useDirectorateRemoveByIdMutation>;
export type DirectorateRemoveByIdMutationResult = ApolloReactCommon.MutationResult<DirectorateRemoveByIdMutation>;
export type DirectorateRemoveByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<DirectorateRemoveByIdMutation, DirectorateRemoveByIdMutationVariables>;
export const DirectorateUpdateByIdDocument = gql`
    mutation DirectorateUpdateById($id: ObjectId!, $title: String!) {
  DirectorateUpdateById(input: {title: $title}, id: $id) {
    _id
    title
  }
}
    `;
export type DirectorateUpdateByIdMutationFn = ApolloReactCommon.MutationFunction<DirectorateUpdateByIdMutation, DirectorateUpdateByIdMutationVariables>;
export type DirectorateUpdateByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DirectorateUpdateByIdMutation, DirectorateUpdateByIdMutationVariables>, 'mutation'>;

    export const DirectorateUpdateByIdComponent = (props: DirectorateUpdateByIdComponentProps) => (
      <ApolloReactComponents.Mutation<DirectorateUpdateByIdMutation, DirectorateUpdateByIdMutationVariables> mutation={DirectorateUpdateByIdDocument} {...props} />
    );
    
export type DirectorateUpdateByIdProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DirectorateUpdateByIdMutation, DirectorateUpdateByIdMutationVariables> & TChildProps;
export function withDirectorateUpdateById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DirectorateUpdateByIdMutation,
  DirectorateUpdateByIdMutationVariables,
  DirectorateUpdateByIdProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DirectorateUpdateByIdMutation, DirectorateUpdateByIdMutationVariables, DirectorateUpdateByIdProps<TChildProps>>(DirectorateUpdateByIdDocument, {
      alias: 'directorateUpdateById',
      ...operationOptions
    });
};

/**
 * __useDirectorateUpdateByIdMutation__
 *
 * To run a mutation, you first call `useDirectorateUpdateByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDirectorateUpdateByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [directorateUpdateByIdMutation, { data, loading, error }] = useDirectorateUpdateByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useDirectorateUpdateByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DirectorateUpdateByIdMutation, DirectorateUpdateByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<DirectorateUpdateByIdMutation, DirectorateUpdateByIdMutationVariables>(DirectorateUpdateByIdDocument, baseOptions);
      }
export type DirectorateUpdateByIdMutationHookResult = ReturnType<typeof useDirectorateUpdateByIdMutation>;
export type DirectorateUpdateByIdMutationResult = ApolloReactCommon.MutationResult<DirectorateUpdateByIdMutation>;
export type DirectorateUpdateByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<DirectorateUpdateByIdMutation, DirectorateUpdateByIdMutationVariables>;
export const MfpIndicatorByIdDocument = gql`
    query MfpIndicatorById($id: ObjectId!) {
  MfpIndicatorById(id: $id) {
    _id
    title
  }
}
    `;
export type MfpIndicatorByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MfpIndicatorByIdQuery, MfpIndicatorByIdQueryVariables>, 'query'> & ({ variables: MfpIndicatorByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const MfpIndicatorByIdComponent = (props: MfpIndicatorByIdComponentProps) => (
      <ApolloReactComponents.Query<MfpIndicatorByIdQuery, MfpIndicatorByIdQueryVariables> query={MfpIndicatorByIdDocument} {...props} />
    );
    
export type MfpIndicatorByIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<MfpIndicatorByIdQuery, MfpIndicatorByIdQueryVariables> & TChildProps;
export function withMfpIndicatorById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MfpIndicatorByIdQuery,
  MfpIndicatorByIdQueryVariables,
  MfpIndicatorByIdProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MfpIndicatorByIdQuery, MfpIndicatorByIdQueryVariables, MfpIndicatorByIdProps<TChildProps>>(MfpIndicatorByIdDocument, {
      alias: 'mfpIndicatorById',
      ...operationOptions
    });
};

/**
 * __useMfpIndicatorByIdQuery__
 *
 * To run a query within a React component, call `useMfpIndicatorByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMfpIndicatorByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMfpIndicatorByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMfpIndicatorByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MfpIndicatorByIdQuery, MfpIndicatorByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<MfpIndicatorByIdQuery, MfpIndicatorByIdQueryVariables>(MfpIndicatorByIdDocument, baseOptions);
      }
export function useMfpIndicatorByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MfpIndicatorByIdQuery, MfpIndicatorByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MfpIndicatorByIdQuery, MfpIndicatorByIdQueryVariables>(MfpIndicatorByIdDocument, baseOptions);
        }
export type MfpIndicatorByIdQueryHookResult = ReturnType<typeof useMfpIndicatorByIdQuery>;
export type MfpIndicatorByIdLazyQueryHookResult = ReturnType<typeof useMfpIndicatorByIdLazyQuery>;
export type MfpIndicatorByIdQueryResult = ApolloReactCommon.QueryResult<MfpIndicatorByIdQuery, MfpIndicatorByIdQueryVariables>;
export const MfpIndicatorManyDocument = gql`
    query MfpIndicatorMany {
  MfpIndicatorMany {
    _id
    title
    updatedAt
    updatedBy {
      _id
      firstName
      lastName
    }
  }
}
    `;
export type MfpIndicatorManyComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MfpIndicatorManyQuery, MfpIndicatorManyQueryVariables>, 'query'>;

    export const MfpIndicatorManyComponent = (props: MfpIndicatorManyComponentProps) => (
      <ApolloReactComponents.Query<MfpIndicatorManyQuery, MfpIndicatorManyQueryVariables> query={MfpIndicatorManyDocument} {...props} />
    );
    
export type MfpIndicatorManyProps<TChildProps = {}> = ApolloReactHoc.DataProps<MfpIndicatorManyQuery, MfpIndicatorManyQueryVariables> & TChildProps;
export function withMfpIndicatorMany<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MfpIndicatorManyQuery,
  MfpIndicatorManyQueryVariables,
  MfpIndicatorManyProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MfpIndicatorManyQuery, MfpIndicatorManyQueryVariables, MfpIndicatorManyProps<TChildProps>>(MfpIndicatorManyDocument, {
      alias: 'mfpIndicatorMany',
      ...operationOptions
    });
};

/**
 * __useMfpIndicatorManyQuery__
 *
 * To run a query within a React component, call `useMfpIndicatorManyQuery` and pass it any options that fit your needs.
 * When your component renders, `useMfpIndicatorManyQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMfpIndicatorManyQuery({
 *   variables: {
 *   },
 * });
 */
export function useMfpIndicatorManyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MfpIndicatorManyQuery, MfpIndicatorManyQueryVariables>) {
        return ApolloReactHooks.useQuery<MfpIndicatorManyQuery, MfpIndicatorManyQueryVariables>(MfpIndicatorManyDocument, baseOptions);
      }
export function useMfpIndicatorManyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MfpIndicatorManyQuery, MfpIndicatorManyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MfpIndicatorManyQuery, MfpIndicatorManyQueryVariables>(MfpIndicatorManyDocument, baseOptions);
        }
export type MfpIndicatorManyQueryHookResult = ReturnType<typeof useMfpIndicatorManyQuery>;
export type MfpIndicatorManyLazyQueryHookResult = ReturnType<typeof useMfpIndicatorManyLazyQuery>;
export type MfpIndicatorManyQueryResult = ApolloReactCommon.QueryResult<MfpIndicatorManyQuery, MfpIndicatorManyQueryVariables>;
export const MfpIndicatorCreateOneDocument = gql`
    mutation MfpIndicatorCreateOne($title: String!) {
  MfpIndicatorCreateOne(input: {title: $title}) {
    _id
    title
  }
}
    `;
export type MfpIndicatorCreateOneMutationFn = ApolloReactCommon.MutationFunction<MfpIndicatorCreateOneMutation, MfpIndicatorCreateOneMutationVariables>;
export type MfpIndicatorCreateOneComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<MfpIndicatorCreateOneMutation, MfpIndicatorCreateOneMutationVariables>, 'mutation'>;

    export const MfpIndicatorCreateOneComponent = (props: MfpIndicatorCreateOneComponentProps) => (
      <ApolloReactComponents.Mutation<MfpIndicatorCreateOneMutation, MfpIndicatorCreateOneMutationVariables> mutation={MfpIndicatorCreateOneDocument} {...props} />
    );
    
export type MfpIndicatorCreateOneProps<TChildProps = {}> = ApolloReactHoc.MutateProps<MfpIndicatorCreateOneMutation, MfpIndicatorCreateOneMutationVariables> & TChildProps;
export function withMfpIndicatorCreateOne<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MfpIndicatorCreateOneMutation,
  MfpIndicatorCreateOneMutationVariables,
  MfpIndicatorCreateOneProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, MfpIndicatorCreateOneMutation, MfpIndicatorCreateOneMutationVariables, MfpIndicatorCreateOneProps<TChildProps>>(MfpIndicatorCreateOneDocument, {
      alias: 'mfpIndicatorCreateOne',
      ...operationOptions
    });
};

/**
 * __useMfpIndicatorCreateOneMutation__
 *
 * To run a mutation, you first call `useMfpIndicatorCreateOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMfpIndicatorCreateOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mfpIndicatorCreateOneMutation, { data, loading, error }] = useMfpIndicatorCreateOneMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useMfpIndicatorCreateOneMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MfpIndicatorCreateOneMutation, MfpIndicatorCreateOneMutationVariables>) {
        return ApolloReactHooks.useMutation<MfpIndicatorCreateOneMutation, MfpIndicatorCreateOneMutationVariables>(MfpIndicatorCreateOneDocument, baseOptions);
      }
export type MfpIndicatorCreateOneMutationHookResult = ReturnType<typeof useMfpIndicatorCreateOneMutation>;
export type MfpIndicatorCreateOneMutationResult = ApolloReactCommon.MutationResult<MfpIndicatorCreateOneMutation>;
export type MfpIndicatorCreateOneMutationOptions = ApolloReactCommon.BaseMutationOptions<MfpIndicatorCreateOneMutation, MfpIndicatorCreateOneMutationVariables>;
export const MfpIndicatorRemoveByIdDocument = gql`
    mutation MfpIndicatorRemoveById($id: ObjectId!) {
  MfpIndicatorRemoveById(id: $id) {
    _id
    title
  }
}
    `;
export type MfpIndicatorRemoveByIdMutationFn = ApolloReactCommon.MutationFunction<MfpIndicatorRemoveByIdMutation, MfpIndicatorRemoveByIdMutationVariables>;
export type MfpIndicatorRemoveByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<MfpIndicatorRemoveByIdMutation, MfpIndicatorRemoveByIdMutationVariables>, 'mutation'>;

    export const MfpIndicatorRemoveByIdComponent = (props: MfpIndicatorRemoveByIdComponentProps) => (
      <ApolloReactComponents.Mutation<MfpIndicatorRemoveByIdMutation, MfpIndicatorRemoveByIdMutationVariables> mutation={MfpIndicatorRemoveByIdDocument} {...props} />
    );
    
export type MfpIndicatorRemoveByIdProps<TChildProps = {}> = ApolloReactHoc.MutateProps<MfpIndicatorRemoveByIdMutation, MfpIndicatorRemoveByIdMutationVariables> & TChildProps;
export function withMfpIndicatorRemoveById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MfpIndicatorRemoveByIdMutation,
  MfpIndicatorRemoveByIdMutationVariables,
  MfpIndicatorRemoveByIdProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, MfpIndicatorRemoveByIdMutation, MfpIndicatorRemoveByIdMutationVariables, MfpIndicatorRemoveByIdProps<TChildProps>>(MfpIndicatorRemoveByIdDocument, {
      alias: 'mfpIndicatorRemoveById',
      ...operationOptions
    });
};

/**
 * __useMfpIndicatorRemoveByIdMutation__
 *
 * To run a mutation, you first call `useMfpIndicatorRemoveByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMfpIndicatorRemoveByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mfpIndicatorRemoveByIdMutation, { data, loading, error }] = useMfpIndicatorRemoveByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMfpIndicatorRemoveByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MfpIndicatorRemoveByIdMutation, MfpIndicatorRemoveByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<MfpIndicatorRemoveByIdMutation, MfpIndicatorRemoveByIdMutationVariables>(MfpIndicatorRemoveByIdDocument, baseOptions);
      }
export type MfpIndicatorRemoveByIdMutationHookResult = ReturnType<typeof useMfpIndicatorRemoveByIdMutation>;
export type MfpIndicatorRemoveByIdMutationResult = ApolloReactCommon.MutationResult<MfpIndicatorRemoveByIdMutation>;
export type MfpIndicatorRemoveByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<MfpIndicatorRemoveByIdMutation, MfpIndicatorRemoveByIdMutationVariables>;
export const MfpIndicatorUpdateByIdDocument = gql`
    mutation MfpIndicatorUpdateById($id: ObjectId!, $title: String!) {
  MfpIndicatorUpdateById(input: {title: $title}, id: $id) {
    _id
    title
  }
}
    `;
export type MfpIndicatorUpdateByIdMutationFn = ApolloReactCommon.MutationFunction<MfpIndicatorUpdateByIdMutation, MfpIndicatorUpdateByIdMutationVariables>;
export type MfpIndicatorUpdateByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<MfpIndicatorUpdateByIdMutation, MfpIndicatorUpdateByIdMutationVariables>, 'mutation'>;

    export const MfpIndicatorUpdateByIdComponent = (props: MfpIndicatorUpdateByIdComponentProps) => (
      <ApolloReactComponents.Mutation<MfpIndicatorUpdateByIdMutation, MfpIndicatorUpdateByIdMutationVariables> mutation={MfpIndicatorUpdateByIdDocument} {...props} />
    );
    
export type MfpIndicatorUpdateByIdProps<TChildProps = {}> = ApolloReactHoc.MutateProps<MfpIndicatorUpdateByIdMutation, MfpIndicatorUpdateByIdMutationVariables> & TChildProps;
export function withMfpIndicatorUpdateById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MfpIndicatorUpdateByIdMutation,
  MfpIndicatorUpdateByIdMutationVariables,
  MfpIndicatorUpdateByIdProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, MfpIndicatorUpdateByIdMutation, MfpIndicatorUpdateByIdMutationVariables, MfpIndicatorUpdateByIdProps<TChildProps>>(MfpIndicatorUpdateByIdDocument, {
      alias: 'mfpIndicatorUpdateById',
      ...operationOptions
    });
};

/**
 * __useMfpIndicatorUpdateByIdMutation__
 *
 * To run a mutation, you first call `useMfpIndicatorUpdateByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMfpIndicatorUpdateByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mfpIndicatorUpdateByIdMutation, { data, loading, error }] = useMfpIndicatorUpdateByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useMfpIndicatorUpdateByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MfpIndicatorUpdateByIdMutation, MfpIndicatorUpdateByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<MfpIndicatorUpdateByIdMutation, MfpIndicatorUpdateByIdMutationVariables>(MfpIndicatorUpdateByIdDocument, baseOptions);
      }
export type MfpIndicatorUpdateByIdMutationHookResult = ReturnType<typeof useMfpIndicatorUpdateByIdMutation>;
export type MfpIndicatorUpdateByIdMutationResult = ApolloReactCommon.MutationResult<MfpIndicatorUpdateByIdMutation>;
export type MfpIndicatorUpdateByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<MfpIndicatorUpdateByIdMutation, MfpIndicatorUpdateByIdMutationVariables>;
export const ProgramByIdDocument = gql`
    query ProgramById($id: ObjectId!) {
  ProgramById(id: $id) {
    _id
    title
  }
}
    `;
export type ProgramByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProgramByIdQuery, ProgramByIdQueryVariables>, 'query'> & ({ variables: ProgramByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ProgramByIdComponent = (props: ProgramByIdComponentProps) => (
      <ApolloReactComponents.Query<ProgramByIdQuery, ProgramByIdQueryVariables> query={ProgramByIdDocument} {...props} />
    );
    
export type ProgramByIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<ProgramByIdQuery, ProgramByIdQueryVariables> & TChildProps;
export function withProgramById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProgramByIdQuery,
  ProgramByIdQueryVariables,
  ProgramByIdProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ProgramByIdQuery, ProgramByIdQueryVariables, ProgramByIdProps<TChildProps>>(ProgramByIdDocument, {
      alias: 'programById',
      ...operationOptions
    });
};

/**
 * __useProgramByIdQuery__
 *
 * To run a query within a React component, call `useProgramByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProgramByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProgramByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProgramByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProgramByIdQuery, ProgramByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<ProgramByIdQuery, ProgramByIdQueryVariables>(ProgramByIdDocument, baseOptions);
      }
export function useProgramByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProgramByIdQuery, ProgramByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProgramByIdQuery, ProgramByIdQueryVariables>(ProgramByIdDocument, baseOptions);
        }
export type ProgramByIdQueryHookResult = ReturnType<typeof useProgramByIdQuery>;
export type ProgramByIdLazyQueryHookResult = ReturnType<typeof useProgramByIdLazyQuery>;
export type ProgramByIdQueryResult = ApolloReactCommon.QueryResult<ProgramByIdQuery, ProgramByIdQueryVariables>;
export const ProgramManyDocument = gql`
    query ProgramMany {
  ProgramMany {
    _id
    title
    updatedAt
    updatedBy {
      _id
      firstName
      lastName
    }
  }
}
    `;
export type ProgramManyComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProgramManyQuery, ProgramManyQueryVariables>, 'query'>;

    export const ProgramManyComponent = (props: ProgramManyComponentProps) => (
      <ApolloReactComponents.Query<ProgramManyQuery, ProgramManyQueryVariables> query={ProgramManyDocument} {...props} />
    );
    
export type ProgramManyProps<TChildProps = {}> = ApolloReactHoc.DataProps<ProgramManyQuery, ProgramManyQueryVariables> & TChildProps;
export function withProgramMany<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProgramManyQuery,
  ProgramManyQueryVariables,
  ProgramManyProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ProgramManyQuery, ProgramManyQueryVariables, ProgramManyProps<TChildProps>>(ProgramManyDocument, {
      alias: 'programMany',
      ...operationOptions
    });
};

/**
 * __useProgramManyQuery__
 *
 * To run a query within a React component, call `useProgramManyQuery` and pass it any options that fit your needs.
 * When your component renders, `useProgramManyQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProgramManyQuery({
 *   variables: {
 *   },
 * });
 */
export function useProgramManyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProgramManyQuery, ProgramManyQueryVariables>) {
        return ApolloReactHooks.useQuery<ProgramManyQuery, ProgramManyQueryVariables>(ProgramManyDocument, baseOptions);
      }
export function useProgramManyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProgramManyQuery, ProgramManyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProgramManyQuery, ProgramManyQueryVariables>(ProgramManyDocument, baseOptions);
        }
export type ProgramManyQueryHookResult = ReturnType<typeof useProgramManyQuery>;
export type ProgramManyLazyQueryHookResult = ReturnType<typeof useProgramManyLazyQuery>;
export type ProgramManyQueryResult = ApolloReactCommon.QueryResult<ProgramManyQuery, ProgramManyQueryVariables>;
export const ProgramCreateOneDocument = gql`
    mutation ProgramCreateOne($title: String!) {
  ProgramCreateOne(input: {title: $title}) {
    _id
    title
  }
}
    `;
export type ProgramCreateOneMutationFn = ApolloReactCommon.MutationFunction<ProgramCreateOneMutation, ProgramCreateOneMutationVariables>;
export type ProgramCreateOneComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ProgramCreateOneMutation, ProgramCreateOneMutationVariables>, 'mutation'>;

    export const ProgramCreateOneComponent = (props: ProgramCreateOneComponentProps) => (
      <ApolloReactComponents.Mutation<ProgramCreateOneMutation, ProgramCreateOneMutationVariables> mutation={ProgramCreateOneDocument} {...props} />
    );
    
export type ProgramCreateOneProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ProgramCreateOneMutation, ProgramCreateOneMutationVariables> & TChildProps;
export function withProgramCreateOne<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProgramCreateOneMutation,
  ProgramCreateOneMutationVariables,
  ProgramCreateOneProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ProgramCreateOneMutation, ProgramCreateOneMutationVariables, ProgramCreateOneProps<TChildProps>>(ProgramCreateOneDocument, {
      alias: 'programCreateOne',
      ...operationOptions
    });
};

/**
 * __useProgramCreateOneMutation__
 *
 * To run a mutation, you first call `useProgramCreateOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProgramCreateOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [programCreateOneMutation, { data, loading, error }] = useProgramCreateOneMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useProgramCreateOneMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ProgramCreateOneMutation, ProgramCreateOneMutationVariables>) {
        return ApolloReactHooks.useMutation<ProgramCreateOneMutation, ProgramCreateOneMutationVariables>(ProgramCreateOneDocument, baseOptions);
      }
export type ProgramCreateOneMutationHookResult = ReturnType<typeof useProgramCreateOneMutation>;
export type ProgramCreateOneMutationResult = ApolloReactCommon.MutationResult<ProgramCreateOneMutation>;
export type ProgramCreateOneMutationOptions = ApolloReactCommon.BaseMutationOptions<ProgramCreateOneMutation, ProgramCreateOneMutationVariables>;
export const ProgramRemoveByIdDocument = gql`
    mutation ProgramRemoveById($id: ObjectId!) {
  ProgramRemoveById(id: $id) {
    _id
    title
  }
}
    `;
export type ProgramRemoveByIdMutationFn = ApolloReactCommon.MutationFunction<ProgramRemoveByIdMutation, ProgramRemoveByIdMutationVariables>;
export type ProgramRemoveByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ProgramRemoveByIdMutation, ProgramRemoveByIdMutationVariables>, 'mutation'>;

    export const ProgramRemoveByIdComponent = (props: ProgramRemoveByIdComponentProps) => (
      <ApolloReactComponents.Mutation<ProgramRemoveByIdMutation, ProgramRemoveByIdMutationVariables> mutation={ProgramRemoveByIdDocument} {...props} />
    );
    
export type ProgramRemoveByIdProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ProgramRemoveByIdMutation, ProgramRemoveByIdMutationVariables> & TChildProps;
export function withProgramRemoveById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProgramRemoveByIdMutation,
  ProgramRemoveByIdMutationVariables,
  ProgramRemoveByIdProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ProgramRemoveByIdMutation, ProgramRemoveByIdMutationVariables, ProgramRemoveByIdProps<TChildProps>>(ProgramRemoveByIdDocument, {
      alias: 'programRemoveById',
      ...operationOptions
    });
};

/**
 * __useProgramRemoveByIdMutation__
 *
 * To run a mutation, you first call `useProgramRemoveByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProgramRemoveByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [programRemoveByIdMutation, { data, loading, error }] = useProgramRemoveByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProgramRemoveByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ProgramRemoveByIdMutation, ProgramRemoveByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<ProgramRemoveByIdMutation, ProgramRemoveByIdMutationVariables>(ProgramRemoveByIdDocument, baseOptions);
      }
export type ProgramRemoveByIdMutationHookResult = ReturnType<typeof useProgramRemoveByIdMutation>;
export type ProgramRemoveByIdMutationResult = ApolloReactCommon.MutationResult<ProgramRemoveByIdMutation>;
export type ProgramRemoveByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<ProgramRemoveByIdMutation, ProgramRemoveByIdMutationVariables>;
export const ProgramUpdateByIdDocument = gql`
    mutation ProgramUpdateById($id: ObjectId!, $title: String!) {
  ProgramUpdateById(input: {title: $title}, id: $id) {
    _id
    title
  }
}
    `;
export type ProgramUpdateByIdMutationFn = ApolloReactCommon.MutationFunction<ProgramUpdateByIdMutation, ProgramUpdateByIdMutationVariables>;
export type ProgramUpdateByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ProgramUpdateByIdMutation, ProgramUpdateByIdMutationVariables>, 'mutation'>;

    export const ProgramUpdateByIdComponent = (props: ProgramUpdateByIdComponentProps) => (
      <ApolloReactComponents.Mutation<ProgramUpdateByIdMutation, ProgramUpdateByIdMutationVariables> mutation={ProgramUpdateByIdDocument} {...props} />
    );
    
export type ProgramUpdateByIdProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ProgramUpdateByIdMutation, ProgramUpdateByIdMutationVariables> & TChildProps;
export function withProgramUpdateById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProgramUpdateByIdMutation,
  ProgramUpdateByIdMutationVariables,
  ProgramUpdateByIdProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ProgramUpdateByIdMutation, ProgramUpdateByIdMutationVariables, ProgramUpdateByIdProps<TChildProps>>(ProgramUpdateByIdDocument, {
      alias: 'programUpdateById',
      ...operationOptions
    });
};

/**
 * __useProgramUpdateByIdMutation__
 *
 * To run a mutation, you first call `useProgramUpdateByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProgramUpdateByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [programUpdateByIdMutation, { data, loading, error }] = useProgramUpdateByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useProgramUpdateByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ProgramUpdateByIdMutation, ProgramUpdateByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<ProgramUpdateByIdMutation, ProgramUpdateByIdMutationVariables>(ProgramUpdateByIdDocument, baseOptions);
      }
export type ProgramUpdateByIdMutationHookResult = ReturnType<typeof useProgramUpdateByIdMutation>;
export type ProgramUpdateByIdMutationResult = ApolloReactCommon.MutationResult<ProgramUpdateByIdMutation>;
export type ProgramUpdateByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<ProgramUpdateByIdMutation, ProgramUpdateByIdMutationVariables>;
export const UserByIdDocument = gql`
    query UserById($id: ObjectId!) {
  UserById(id: $id) {
    _id
    firstName
    lastName
    email
  }
}
    `;
export type UserByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserByIdQuery, UserByIdQueryVariables>, 'query'> & ({ variables: UserByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserByIdComponent = (props: UserByIdComponentProps) => (
      <ApolloReactComponents.Query<UserByIdQuery, UserByIdQueryVariables> query={UserByIdDocument} {...props} />
    );
    
export type UserByIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<UserByIdQuery, UserByIdQueryVariables> & TChildProps;
export function withUserById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserByIdQuery,
  UserByIdQueryVariables,
  UserByIdProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, UserByIdQuery, UserByIdQueryVariables, UserByIdProps<TChildProps>>(UserByIdDocument, {
      alias: 'userById',
      ...operationOptions
    });
};

/**
 * __useUserByIdQuery__
 *
 * To run a query within a React component, call `useUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, baseOptions);
      }
export function useUserByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, baseOptions);
        }
export type UserByIdQueryHookResult = ReturnType<typeof useUserByIdQuery>;
export type UserByIdLazyQueryHookResult = ReturnType<typeof useUserByIdLazyQuery>;
export type UserByIdQueryResult = ApolloReactCommon.QueryResult<UserByIdQuery, UserByIdQueryVariables>;
export const UserUpdateMyProfileDocument = gql`
    mutation UserUpdateMyProfile($firstName: String!, $lastName: String!, $email: String!) {
  UserUpdateMyProfile(input: {firstName: $firstName, lastName: $lastName, email: $email}) {
    user {
      _id
      firstName
      lastName
      email
      lastLoggedIn
    }
    token
  }
}
    `;
export type UserUpdateMyProfileMutationFn = ApolloReactCommon.MutationFunction<UserUpdateMyProfileMutation, UserUpdateMyProfileMutationVariables>;
export type UserUpdateMyProfileComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UserUpdateMyProfileMutation, UserUpdateMyProfileMutationVariables>, 'mutation'>;

    export const UserUpdateMyProfileComponent = (props: UserUpdateMyProfileComponentProps) => (
      <ApolloReactComponents.Mutation<UserUpdateMyProfileMutation, UserUpdateMyProfileMutationVariables> mutation={UserUpdateMyProfileDocument} {...props} />
    );
    
export type UserUpdateMyProfileProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UserUpdateMyProfileMutation, UserUpdateMyProfileMutationVariables> & TChildProps;
export function withUserUpdateMyProfile<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserUpdateMyProfileMutation,
  UserUpdateMyProfileMutationVariables,
  UserUpdateMyProfileProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UserUpdateMyProfileMutation, UserUpdateMyProfileMutationVariables, UserUpdateMyProfileProps<TChildProps>>(UserUpdateMyProfileDocument, {
      alias: 'userUpdateMyProfile',
      ...operationOptions
    });
};

/**
 * __useUserUpdateMyProfileMutation__
 *
 * To run a mutation, you first call `useUserUpdateMyProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdateMyProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateMyProfileMutation, { data, loading, error }] = useUserUpdateMyProfileMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUserUpdateMyProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserUpdateMyProfileMutation, UserUpdateMyProfileMutationVariables>) {
        return ApolloReactHooks.useMutation<UserUpdateMyProfileMutation, UserUpdateMyProfileMutationVariables>(UserUpdateMyProfileDocument, baseOptions);
      }
export type UserUpdateMyProfileMutationHookResult = ReturnType<typeof useUserUpdateMyProfileMutation>;
export type UserUpdateMyProfileMutationResult = ApolloReactCommon.MutationResult<UserUpdateMyProfileMutation>;
export type UserUpdateMyProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<UserUpdateMyProfileMutation, UserUpdateMyProfileMutationVariables>;
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

export type Mutation = {
   __typename?: 'Mutation',
  DirectorateCreateOne: Directorate,
  DirectorateUpdateById?: Maybe<Directorate>,
  DirectorateRemoveById?: Maybe<Directorate>,
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


export type MutationUserUpdateMyProfileArgs = {
  input: UserInput
};


export type Query = {
   __typename?: 'Query',
  DirectorateById?: Maybe<Directorate>,
  DirectorateMany: Array<Directorate>,
  UserById?: Maybe<User>,
};


export type QueryDirectorateByIdArgs = {
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
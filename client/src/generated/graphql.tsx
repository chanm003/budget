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
  MongoID: any,
  Date: any,
  JSON: any,
};


export type _IdOperatorsFilterDirectorateInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindManyDirectorateInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindManyProgramInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindManyUserInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterProgramInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterRemoveManyDirectorateInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterRemoveManyProgramInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterRemoveManyUserInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterUserInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type CreateManyDirectorateInput = {
  title: Scalars['String'],
  createdBy?: Maybe<Scalars['MongoID']>,
  updatedBy?: Maybe<Scalars['MongoID']>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
};

export type CreateManyDirectoratePayload = {
   __typename?: 'CreateManyDirectoratePayload',
  recordIds: Array<Maybe<Scalars['MongoID']>>,
  records: Array<Maybe<Directorate>>,
  createCount: Scalars['Int'],
};

export type CreateManyProgramInput = {
  title: Scalars['String'],
  createdBy?: Maybe<Scalars['MongoID']>,
  updatedBy?: Maybe<Scalars['MongoID']>,
  administrators?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
};

export type CreateManyProgramPayload = {
   __typename?: 'CreateManyProgramPayload',
  recordIds: Array<Maybe<Scalars['MongoID']>>,
  records: Array<Maybe<Program>>,
  createCount: Scalars['Int'],
};

export type CreateManyUserInput = {
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  method: EnumUserMethod,
  local?: Maybe<UserLocalInput>,
  cac?: Maybe<UserCacInput>,
  github?: Maybe<UserGithubInput>,
  lastLoggedIn?: Maybe<Scalars['Date']>,
  role?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
};

export type CreateManyUserPayload = {
   __typename?: 'CreateManyUserPayload',
  recordIds: Array<Maybe<Scalars['MongoID']>>,
  records: Array<Maybe<User>>,
  createCount: Scalars['Int'],
};

export type CreateOneDirectorateInput = {
  title: Scalars['String'],
  createdBy?: Maybe<Scalars['MongoID']>,
  updatedBy?: Maybe<Scalars['MongoID']>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
};

export type CreateOneDirectoratePayload = {
   __typename?: 'CreateOneDirectoratePayload',
  recordId?: Maybe<Scalars['MongoID']>,
  record?: Maybe<Directorate>,
};

export type CreateOneProgramInput = {
  title: Scalars['String'],
  createdBy?: Maybe<Scalars['MongoID']>,
  updatedBy?: Maybe<Scalars['MongoID']>,
  administrators?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
};

export type CreateOneProgramPayload = {
   __typename?: 'CreateOneProgramPayload',
  recordId?: Maybe<Scalars['MongoID']>,
  record?: Maybe<Program>,
};

export type CreateOneUserInput = {
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  method: EnumUserMethod,
  local?: Maybe<UserLocalInput>,
  cac?: Maybe<UserCacInput>,
  github?: Maybe<UserGithubInput>,
  lastLoggedIn?: Maybe<Scalars['Date']>,
  role?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
};

export type CreateOneUserPayload = {
   __typename?: 'CreateOneUserPayload',
  recordId?: Maybe<Scalars['MongoID']>,
  record?: Maybe<User>,
};


export type Directorate = {
   __typename?: 'Directorate',
  title?: Maybe<Scalars['String']>,
  createdBy?: Maybe<User>,
  updatedBy?: Maybe<User>,
  _id: Scalars['MongoID'],
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
};

export enum EnumUserMethod {
  Local = 'local',
  Cac = 'cac',
  Github = 'github'
}

export type FilterDirectorateInput = {
  title?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['MongoID']>,
  updatedBy?: Maybe<Scalars['MongoID']>,
  _id?: Maybe<Scalars['MongoID']>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  _operators?: Maybe<OperatorsFilterDirectorateInput>,
  OR?: Maybe<Array<FilterDirectorateInput>>,
  AND?: Maybe<Array<FilterDirectorateInput>>,
};

export type FilterFindManyDirectorateInput = {
  title?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['MongoID']>,
  updatedBy?: Maybe<Scalars['MongoID']>,
  _id?: Maybe<Scalars['MongoID']>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  _operators?: Maybe<OperatorsFilterFindManyDirectorateInput>,
  OR?: Maybe<Array<FilterFindManyDirectorateInput>>,
  AND?: Maybe<Array<FilterFindManyDirectorateInput>>,
};

export type FilterFindManyProgramInput = {
  title?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['MongoID']>,
  updatedBy?: Maybe<Scalars['MongoID']>,
  administrators?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  _id?: Maybe<Scalars['MongoID']>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  _operators?: Maybe<OperatorsFilterFindManyProgramInput>,
  OR?: Maybe<Array<FilterFindManyProgramInput>>,
  AND?: Maybe<Array<FilterFindManyProgramInput>>,
};

export type FilterFindManyUserInput = {
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  method?: Maybe<EnumUserMethod>,
  local?: Maybe<UserLocalInput>,
  cac?: Maybe<UserCacInput>,
  github?: Maybe<UserGithubInput>,
  lastLoggedIn?: Maybe<Scalars['Date']>,
  role?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  _operators?: Maybe<OperatorsFilterFindManyUserInput>,
  OR?: Maybe<Array<FilterFindManyUserInput>>,
  AND?: Maybe<Array<FilterFindManyUserInput>>,
};

export type FilterProgramInput = {
  title?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['MongoID']>,
  updatedBy?: Maybe<Scalars['MongoID']>,
  administrators?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  _id?: Maybe<Scalars['MongoID']>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  _operators?: Maybe<OperatorsFilterProgramInput>,
  OR?: Maybe<Array<FilterProgramInput>>,
  AND?: Maybe<Array<FilterProgramInput>>,
};

export type FilterRemoveManyDirectorateInput = {
  title?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['MongoID']>,
  updatedBy?: Maybe<Scalars['MongoID']>,
  _id?: Maybe<Scalars['MongoID']>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  _operators?: Maybe<OperatorsFilterRemoveManyDirectorateInput>,
  OR?: Maybe<Array<FilterRemoveManyDirectorateInput>>,
  AND?: Maybe<Array<FilterRemoveManyDirectorateInput>>,
};

export type FilterRemoveManyProgramInput = {
  title?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['MongoID']>,
  updatedBy?: Maybe<Scalars['MongoID']>,
  administrators?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  _id?: Maybe<Scalars['MongoID']>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  _operators?: Maybe<OperatorsFilterRemoveManyProgramInput>,
  OR?: Maybe<Array<FilterRemoveManyProgramInput>>,
  AND?: Maybe<Array<FilterRemoveManyProgramInput>>,
};

export type FilterRemoveManyUserInput = {
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  method?: Maybe<EnumUserMethod>,
  local?: Maybe<UserLocalInput>,
  cac?: Maybe<UserCacInput>,
  github?: Maybe<UserGithubInput>,
  lastLoggedIn?: Maybe<Scalars['Date']>,
  role?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  _operators?: Maybe<OperatorsFilterRemoveManyUserInput>,
  OR?: Maybe<Array<FilterRemoveManyUserInput>>,
  AND?: Maybe<Array<FilterRemoveManyUserInput>>,
};

export type FilterUserInput = {
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  method?: Maybe<EnumUserMethod>,
  local?: Maybe<UserLocalInput>,
  cac?: Maybe<UserCacInput>,
  github?: Maybe<UserGithubInput>,
  lastLoggedIn?: Maybe<Scalars['Date']>,
  role?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  _operators?: Maybe<OperatorsFilterUserInput>,
  OR?: Maybe<Array<FilterUserInput>>,
  AND?: Maybe<Array<FilterUserInput>>,
};



export type Mutation = {
   __typename?: 'Mutation',
  DirectorateCreateMany?: Maybe<CreateManyDirectoratePayload>,
  DirectorateCreateOne?: Maybe<CreateOneDirectoratePayload>,
  DirectorateRemoveById?: Maybe<RemoveByIdDirectoratePayload>,
  DirectorateRemoveMany?: Maybe<RemoveManyDirectoratePayload>,
  DirectorateUpdateById?: Maybe<UpdateByIdDirectoratePayload>,
  ProgramCreateMany?: Maybe<CreateManyProgramPayload>,
  ProgramCreateOne?: Maybe<CreateOneProgramPayload>,
  ProgramRemoveById?: Maybe<RemoveByIdProgramPayload>,
  ProgramRemoveMany?: Maybe<RemoveManyProgramPayload>,
  ProgramUpdateById?: Maybe<UpdateByIdProgramPayload>,
  UserCreateMany?: Maybe<CreateManyUserPayload>,
  UserCreateOne?: Maybe<CreateOneUserPayload>,
  UserRemoveById?: Maybe<RemoveByIdUserPayload>,
  UserRemoveMany?: Maybe<RemoveManyUserPayload>,
  UserUpdateById?: Maybe<UpdateByIdUserPayload>,
  UserUpdateMyProfile?: Maybe<UpdateProfileResponse>,
};


export type MutationDirectorateCreateManyArgs = {
  records: Array<CreateManyDirectorateInput>
};


export type MutationDirectorateCreateOneArgs = {
  record: CreateOneDirectorateInput
};


export type MutationDirectorateRemoveByIdArgs = {
  _id: Scalars['MongoID']
};


export type MutationDirectorateRemoveManyArgs = {
  filter: FilterRemoveManyDirectorateInput
};


export type MutationDirectorateUpdateByIdArgs = {
  record: UpdateByIdDirectorateInput
};


export type MutationProgramCreateManyArgs = {
  records: Array<CreateManyProgramInput>
};


export type MutationProgramCreateOneArgs = {
  record: CreateOneProgramInput
};


export type MutationProgramRemoveByIdArgs = {
  _id: Scalars['MongoID']
};


export type MutationProgramRemoveManyArgs = {
  filter: FilterRemoveManyProgramInput
};


export type MutationProgramUpdateByIdArgs = {
  record: UpdateByIdProgramInput
};


export type MutationUserCreateManyArgs = {
  records: Array<CreateManyUserInput>
};


export type MutationUserCreateOneArgs = {
  record: CreateOneUserInput
};


export type MutationUserRemoveByIdArgs = {
  _id: Scalars['MongoID']
};


export type MutationUserRemoveManyArgs = {
  filter: FilterRemoveManyUserInput
};


export type MutationUserUpdateByIdArgs = {
  record: UpdateByIdUserInput
};


export type MutationUserUpdateMyProfileArgs = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String']
};

export type OperatorsFilterDirectorateInput = {
  _id?: Maybe<_IdOperatorsFilterDirectorateInput>,
};

export type OperatorsFilterFindManyDirectorateInput = {
  _id?: Maybe<_IdOperatorsFilterFindManyDirectorateInput>,
};

export type OperatorsFilterFindManyProgramInput = {
  _id?: Maybe<_IdOperatorsFilterFindManyProgramInput>,
};

export type OperatorsFilterFindManyUserInput = {
  _id?: Maybe<_IdOperatorsFilterFindManyUserInput>,
};

export type OperatorsFilterProgramInput = {
  _id?: Maybe<_IdOperatorsFilterProgramInput>,
};

export type OperatorsFilterRemoveManyDirectorateInput = {
  _id?: Maybe<_IdOperatorsFilterRemoveManyDirectorateInput>,
};

export type OperatorsFilterRemoveManyProgramInput = {
  _id?: Maybe<_IdOperatorsFilterRemoveManyProgramInput>,
};

export type OperatorsFilterRemoveManyUserInput = {
  _id?: Maybe<_IdOperatorsFilterRemoveManyUserInput>,
};

export type OperatorsFilterUserInput = {
  _id?: Maybe<_IdOperatorsFilterUserInput>,
};

export type Program = {
   __typename?: 'Program',
  title?: Maybe<Scalars['String']>,
  createdBy?: Maybe<User>,
  updatedBy?: Maybe<User>,
  administrators?: Maybe<Array<Maybe<User>>>,
  _id: Scalars['MongoID'],
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
};


export type ProgramAdministratorsArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindManyUserInput>
};

export type Query = {
   __typename?: 'Query',
  DirectorateById?: Maybe<Directorate>,
  DirectorateByIds?: Maybe<Array<Maybe<Directorate>>>,
  DirectorateCount?: Maybe<Scalars['Int']>,
  DirectorateMany?: Maybe<Array<Maybe<Directorate>>>,
  ProgramById?: Maybe<Program>,
  ProgramByIds?: Maybe<Array<Maybe<Program>>>,
  ProgramCount?: Maybe<Scalars['Int']>,
  ProgramMany?: Maybe<Array<Maybe<Program>>>,
  UserById?: Maybe<User>,
  UserByIds?: Maybe<Array<Maybe<User>>>,
  UserCount?: Maybe<Scalars['Int']>,
  UserMany?: Maybe<Array<Maybe<User>>>,
};


export type QueryDirectorateByIdArgs = {
  _id: Scalars['MongoID']
};


export type QueryDirectorateByIdsArgs = {
  _ids: Array<Maybe<Scalars['MongoID']>>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindByIdsDirectorateInput>
};


export type QueryDirectorateCountArgs = {
  filter?: Maybe<FilterDirectorateInput>
};


export type QueryDirectorateManyArgs = {
  filter?: Maybe<FilterFindManyDirectorateInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindManyDirectorateInput>
};


export type QueryProgramByIdArgs = {
  _id: Scalars['MongoID']
};


export type QueryProgramByIdsArgs = {
  _ids: Array<Maybe<Scalars['MongoID']>>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindByIdsProgramInput>
};


export type QueryProgramCountArgs = {
  filter?: Maybe<FilterProgramInput>
};


export type QueryProgramManyArgs = {
  filter?: Maybe<FilterFindManyProgramInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindManyProgramInput>
};


export type QueryUserByIdArgs = {
  _id: Scalars['MongoID']
};


export type QueryUserByIdsArgs = {
  _ids: Array<Maybe<Scalars['MongoID']>>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindByIdsUserInput>
};


export type QueryUserCountArgs = {
  filter?: Maybe<FilterUserInput>
};


export type QueryUserManyArgs = {
  filter?: Maybe<FilterFindManyUserInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindManyUserInput>
};

export type RemoveByIdDirectoratePayload = {
   __typename?: 'RemoveByIdDirectoratePayload',
  recordId?: Maybe<Scalars['MongoID']>,
  record?: Maybe<Directorate>,
};

export type RemoveByIdProgramPayload = {
   __typename?: 'RemoveByIdProgramPayload',
  recordId?: Maybe<Scalars['MongoID']>,
  record?: Maybe<Program>,
};

export type RemoveByIdUserPayload = {
   __typename?: 'RemoveByIdUserPayload',
  recordId?: Maybe<Scalars['MongoID']>,
  record?: Maybe<User>,
};

export type RemoveManyDirectoratePayload = {
   __typename?: 'RemoveManyDirectoratePayload',
  numAffected?: Maybe<Scalars['Int']>,
};

export type RemoveManyProgramPayload = {
   __typename?: 'RemoveManyProgramPayload',
  numAffected?: Maybe<Scalars['Int']>,
};

export type RemoveManyUserPayload = {
   __typename?: 'RemoveManyUserPayload',
  numAffected?: Maybe<Scalars['Int']>,
};

export enum SortFindByIdsDirectorateInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsProgramInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyDirectorateInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyProgramInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateByIdDirectorateInput = {
  title?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['MongoID']>,
  updatedBy?: Maybe<Scalars['MongoID']>,
  _id: Scalars['MongoID'],
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
};

export type UpdateByIdDirectoratePayload = {
   __typename?: 'UpdateByIdDirectoratePayload',
  recordId?: Maybe<Scalars['MongoID']>,
  record?: Maybe<Directorate>,
};

export type UpdateByIdProgramInput = {
  title?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['MongoID']>,
  updatedBy?: Maybe<Scalars['MongoID']>,
  administrators?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  _id: Scalars['MongoID'],
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
};

export type UpdateByIdProgramPayload = {
   __typename?: 'UpdateByIdProgramPayload',
  recordId?: Maybe<Scalars['MongoID']>,
  record?: Maybe<Program>,
};

export type UpdateByIdUserInput = {
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  method?: Maybe<EnumUserMethod>,
  local?: Maybe<UserLocalInput>,
  cac?: Maybe<UserCacInput>,
  github?: Maybe<UserGithubInput>,
  lastLoggedIn?: Maybe<Scalars['Date']>,
  role?: Maybe<Scalars['String']>,
  _id: Scalars['MongoID'],
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
};

export type UpdateByIdUserPayload = {
   __typename?: 'UpdateByIdUserPayload',
  recordId?: Maybe<Scalars['MongoID']>,
  record?: Maybe<User>,
};

export type UpdateProfileResponse = {
   __typename?: 'UpdateProfileResponse',
  user?: Maybe<User>,
  token: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  method?: Maybe<EnumUserMethod>,
  local?: Maybe<UserLocal>,
  cac?: Maybe<UserCac>,
  github?: Maybe<UserGithub>,
  lastLoggedIn?: Maybe<Scalars['Date']>,
  role?: Maybe<Scalars['String']>,
  _id: Scalars['MongoID'],
  updatedAt?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
};

export type UserCac = {
   __typename?: 'UserCac',
  distinguishedName?: Maybe<Scalars['String']>,
};

export type UserCacInput = {
  distinguishedName?: Maybe<Scalars['String']>,
};

export type UserGithub = {
   __typename?: 'UserGithub',
  id?: Maybe<Scalars['String']>,
};

export type UserGithubInput = {
  id?: Maybe<Scalars['String']>,
};

export type UserLocal = {
   __typename?: 'UserLocal',
  expires?: Maybe<Scalars['Date']>,
};

export type UserLocalInput = {
  password?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Date']>,
};

export type DirectorateByIdQueryVariables = {
  id: Scalars['MongoID']
};


export type DirectorateByIdQuery = (
  { __typename?: 'Query' }
  & { DirectorateById: Maybe<(
    { __typename?: 'Directorate' }
    & Pick<Directorate, '_id' | 'title'>
  )> }
);

export type DirectorateCreateOneMutationVariables = {
  title: Scalars['String']
};


export type DirectorateCreateOneMutation = (
  { __typename?: 'Mutation' }
  & { DirectorateCreateOne: Maybe<(
    { __typename?: 'CreateOneDirectoratePayload' }
    & { record: Maybe<(
      { __typename?: 'Directorate' }
      & Pick<Directorate, '_id' | 'title'>
    )> }
  )> }
);

export type DirectorateManyQueryVariables = {};


export type DirectorateManyQuery = (
  { __typename?: 'Query' }
  & { DirectorateMany: Maybe<Array<Maybe<(
    { __typename?: 'Directorate' }
    & Pick<Directorate, '_id' | 'title'>
  )>>> }
);

export type DirectorateRemoveByIdMutationVariables = {
  id: Scalars['MongoID']
};


export type DirectorateRemoveByIdMutation = (
  { __typename?: 'Mutation' }
  & { DirectorateRemoveById: Maybe<(
    { __typename?: 'RemoveByIdDirectoratePayload' }
    & { record: Maybe<(
      { __typename?: 'Directorate' }
      & Pick<Directorate, '_id' | 'title'>
    )> }
  )> }
);

export type DirectorateUpdateByIdMutationVariables = {
  id: Scalars['MongoID'],
  title: Scalars['String']
};


export type DirectorateUpdateByIdMutation = (
  { __typename?: 'Mutation' }
  & { DirectorateUpdateById: Maybe<(
    { __typename?: 'UpdateByIdDirectoratePayload' }
    & { record: Maybe<(
      { __typename?: 'Directorate' }
      & Pick<Directorate, '_id' | 'title'>
    )> }
  )> }
);

export type UserByIdQueryVariables = {
  id: Scalars['MongoID']
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
    { __typename?: 'UpdateProfileResponse' }
    & Pick<UpdateProfileResponse, 'token'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, '_id' | 'firstName' | 'lastName' | 'email' | 'lastLoggedIn' | 'updatedAt'>
    )> }
  )> }
);


export const DirectorateByIdDocument = gql`
    query DirectorateById($id: MongoID!) {
  DirectorateById(_id: $id) {
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
export const DirectorateCreateOneDocument = gql`
    mutation DirectorateCreateOne($title: String!) {
  DirectorateCreateOne(record: {title: $title}) {
    record {
      _id
      title
    }
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
export const DirectorateManyDocument = gql`
    query DirectorateMany {
  DirectorateMany {
    _id
    title
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
export const DirectorateRemoveByIdDocument = gql`
    mutation DirectorateRemoveById($id: MongoID!) {
  DirectorateRemoveById(_id: $id) {
    record {
      _id
      title
    }
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
    mutation DirectorateUpdateById($id: MongoID!, $title: String!) {
  DirectorateUpdateById(record: {_id: $id, title: $title}) {
    record {
      _id
      title
    }
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
    query UserById($id: MongoID!) {
  UserById(_id: $id) {
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
  UserUpdateMyProfile(firstName: $firstName, lastName: $lastName, email: $email) {
    user {
      _id
      firstName
      lastName
      email
      lastLoggedIn
      updatedAt
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
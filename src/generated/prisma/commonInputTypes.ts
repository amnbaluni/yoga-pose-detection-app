export interface UserCreateInput {
  email: string
  name?: string
}

export interface UserUncheckedCreateInput {
  id?: string
  email: string
  name?: string
}

export interface UserWhereInput {
  id?: string
  email?: string
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
}

export interface UserUpdateInput {
  email?: string
  name?: string | null
}

export type UserSelect = Record<string, boolean>
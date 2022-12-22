import { Dispatch, SetStateAction } from 'react'

import { IUser } from '@/shared/interfaces/user.interface'

export type TypeuserState = IUser | null

export interface IContext {
	user: TypeuserState
	setUser: Dispatch<SetStateAction<TypeuserState>>
}

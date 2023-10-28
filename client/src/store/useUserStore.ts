import {create} from 'zustand'
import {createSelectors} from './createSelectors'
import { User } from '@models/index'

interface UserStore {
	user: User | null
	setUser: (newUser: User) => void
}

const useUserStoreBase = create<UserStore>()((set) => ({
	user: null,
	setUser: (newUser) => set({user: newUser}),
}))

export const useUserStore = createSelectors(useUserStoreBase)

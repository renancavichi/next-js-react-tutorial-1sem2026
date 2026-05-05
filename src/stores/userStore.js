import {create} from 'zustand'

export const useUserStore = create((set) => ({
    users: [],
    updateUsers: (newUsers) => set({users: newUsers}),
    addUser: (user) => set(state => ({users: [...state.users, user]}))
}))
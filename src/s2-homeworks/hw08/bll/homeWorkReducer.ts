import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedState = [...state]; 
            sortedState.sort((a, b) => {
                if (action.payload === 'up') {
                    return a.name > b.name ? 1 : -1;
                } else {
                    return a.name > b.name ? -1 : 1;
                }
            });
            return sortedState
        }
        case 'check': {

            return state.filter((u)=>(u.age >= action.payload)) // need to fix
        }
        default:
            return state
    }
}

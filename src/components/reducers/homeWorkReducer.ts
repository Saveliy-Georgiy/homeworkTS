import {v1} from "uuid";

export const initialState = {
    people: [
        {id: v1(), name: "Saveliy", age: 20},
        {id: v1(), name: "Dima", age: 34},
        {id: v1(), name: "Vanya", age: 15},
        {id: v1(), name: "Dan", age: 45},
        {id: v1(), name: "Zed", age: 12},
    ] as Array<PeopleType>,
};

export type PeopleType = {
    id: string,
    name: string,
    age: number
}

export type SortPeopleUpActionType = {
    type: 'SORT',
    payload: 'up',
}
export type SortPeopleDownActionType = {
    type: 'SORT',
    payload: 'down'

}
export type SortPeopleAgeActionType = {
    type: 'CHECK',
    payload: 18
}

type ActionsType = SortPeopleUpActionType | SortPeopleDownActionType | SortPeopleAgeActionType

export type InitialStateType = typeof initialState

export const hwReducer = (
    state = initialState,
    action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SORT': {
            if (action.payload === 'up') {
                return {
                    ...state,
                    people: state.people.sort((a, b) => a.name > b.name ? 1 : -1)
                }


            } else {
                return {
                    ...state,
                    people: state.people.sort((a, b) => a.name > b.name ? -1 : 1)
                }
            }
        }
        case 'CHECK': {
            return {
                ...state,
                people: state.people.filter(p => p.age >= 18)
            }
        }
        default:
            throw new Error("I don't understand this type")
    }

};

export const SortPeopleUpAC = (): SortPeopleUpActionType => {
    return {type: 'SORT', payload: 'up'}
}
export const SortPeopleDownAC = (): SortPeopleDownActionType => {
    return {type: 'SORT', payload: 'down'}
}
export const SortPeopleAgeAC = (): SortPeopleAgeActionType => {
    return {type: 'CHECK', payload: 18}
}

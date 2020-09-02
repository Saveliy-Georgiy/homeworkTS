import {hwReducer, InitialStateType, SortPeopleAgeAC, SortPeopleDownAC, SortPeopleUpAC} from "./homeWorkReducer";
import {v1} from "uuid";

test('array of people should be sorted A-Z', () => {

    const startState: InitialStateType = {
        people: [
            {id: v1(), name: "Saveliy", age: 20},
            {id: v1(), name: "Dima", age: 34},
            {id: v1(), name: "Vanya", age: 15},
            {id: v1(), name: "Dan", age: 45},
            {id: v1(), name: "Zed", age: 12},
        ]
    }

    const endState = hwReducer(startState, SortPeopleUpAC())

    expect(endState.people[0].name).toBe("Dan");
    expect(endState.people[1].name).toBe("Dima");
    expect(endState.people[2].name).toBe("Saveliy");
    expect(endState.people[3].name).toBe("Vanya");
    expect(endState.people[4].name).toBe("Zed");
});

test('array of people should be sorted Z-A', () => {

    const startState: InitialStateType = {
        people: [
            {id: v1(), name: "Saveliy", age: 20},
            {id: v1(), name: "Dima", age: 34},
            {id: v1(), name: "Vanya", age: 15},
            {id: v1(), name: "Dan", age: 45},
            {id: v1(), name: "Zed", age: 12},
        ]
    }

    const endState = hwReducer(startState, SortPeopleDownAC())
    expect(endState.people[0].name).toBe("Zed");
    expect(endState.people[1].name).toBe("Vanya");
    expect(endState.people[2].name).toBe("Saveliy");
    expect(endState.people[3].name).toBe("Dima");
    expect(endState.people[4].name).toBe("Dan");
});

test('array of people should be sorted by age', () => {

    const startState: InitialStateType = {
        people: [
            {id: v1(), name: "Saveliy", age: 20},
            {id: v1(), name: "Dima", age: 34},
            {id: v1(), name: "Vanya", age: 15},
            {id: v1(), name: "Dan", age: 45},
            {id: v1(), name: "Zed", age: 12},
        ]
    }

    const endState = hwReducer(startState, SortPeopleAgeAC())
    expect(endState.people.length).toBe(3);
    expect(endState.people[0].age).toBe(20);
    expect(endState.people[1].age).toBe(34);
    expect(endState.people[2].age).toBe(45);

});

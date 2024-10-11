export interface PersonInter {
    id: string,
    name: string,
    age: number
}

export type Persons = Array<PersonInter>

export type todo = {
    status: string,
    name: string,
    flag: string
}
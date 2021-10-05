import { IUser, UserType } from "./types";

const user: UserType | IUser = {
    name: '::testName::',
    surname: '::testSurname::',
    email: '::testEmail::',
    birthYear: new Date()
}

console.log({user})
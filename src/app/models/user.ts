export class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

export class UserNextGen {
    constructor(public name: string, public age: number, public nationality: string) { }
}

export function buildUser(name: string, age: number, nationality: string): UserNextGen {
    return new UserNextGen(name, age, nationality);
}
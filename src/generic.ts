interface Person {
    name: string;
    age: number;
}


const p: Person = {
    name: 'heesang',
    age: 38
}

function getProperty<T, K extends keyof T>(person: T, propName: K): T[K] {
    return person[propName];
}


function setProperty<T, K extends keyof T>(person: T, propName: K, value: T[K]): void {
    person[propName] = value;
}

const what = getProperty(p, 'name');

setProperty(p, 'age', 23);

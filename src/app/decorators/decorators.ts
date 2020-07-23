// interface Person {
//     name: string;
// }

// interface AgedPerson extends Person {
//     age: number;
// }

// const person: Person = {
//     name: "Denis"
// };

// function  addAge(age: number) {
//     return function (person) {
//         return {
//             name: person.name,
//             age
//         }
//     }
// }

// const newPerson = addAge(29)(person);  

function AddAge(age: number) {
    return function (targetClass: Person) {
        return class {
            name = targetClass.name;
            age = age;
        }
    }
}

@AddAge(29)

class Person {
    public name: string = "Denis";
}
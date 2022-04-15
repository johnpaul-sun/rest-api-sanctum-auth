//returning function
const createMultiplier = x => y => x * y; 

// console.log(createMultiplier(2)(4))

//closure
const createPrinter = () => {
    const number = 42;

    return () => {
        console.log(`My number is ${number}`)
    }
}

// createPrinter()()

//Implement private variable
const Person = ({name, age, job}) => {
    let _name = name;
    let _age = age;
    let _job = job;

    return {
        getName: () => _name,
        getAge: () => _age,
        getJob: () => _job,

        setName: newName => _name = newName,
        setAge: newAge => _age = newAge,
        setJob: newJob => _job = newJob,
    }
}

const me = Person({name: "Paul", age: 21, job: "Developer"})

// console.log(me.getName())
// console.log(me.setName("Pong")) 

//Higher-order functions
const divide = (x,y) => x / y;

const secondArgumentNotZero = func => (...args) => {
    if (args[1] === 0) {
        console.log("Error: dividing by zero")
        return null
    } 
    return func(...args)
}
 
// console.log(secondArgumentNotZero(divide)(7,1))

//Spread operator

const car = {
    color: "red",
    tire: 4,
    type: "SUV",
}

const company = {
    manufacturer: "Toyota",
    branch: "Abad Santos",
    agentName: "Anne Smith"
}

const updateData = {
    color: "black"
}

const mergeData = {
    ...car,
    ...company,
    ...updateData
}

const carNumbers = [1,2,3,4,5]
const newCarNumbers = [
    0,
    ...carNumbers,
    6
]
console.log(newCarNumbers)
// console.log(mergeData)

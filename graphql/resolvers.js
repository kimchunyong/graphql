const people = [
    {
        name: "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        name: "Nicolas",
        age: 18,
        gender: "female"
    }, {
        name: "Nicolas",
        age: 18,
        gender: "female"
    }, {
        name: "Nicolas",
        age: 16,
        gender: "female"
    }, {
        name: "Nicolas",
        age: 18,
        gender: "female"
    }, {
        name: "Nicolas",
        age: 18,
        gender: "female"
    }, {
        name: "Nicolas",
        age: 18,
        gender: "female"
    }
]

const resolvers = {
    Query: {
        people: () => people
    }
};

export default resolvers;
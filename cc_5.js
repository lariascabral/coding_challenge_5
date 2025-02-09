// Task 1 - Customer Profile

let customer = { 
    name: "John Doe", 
    age: 35, 
    email: "john.doe@email.com" 
} ;                                                         // Creation of customer's profile

for (const property in customer) {
    console.log(`${property}: ${customer[property]}`)} ;    // Each property in the object will be log individually
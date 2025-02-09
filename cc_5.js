// Task 1 - Customer Profile

let customer = { 
    name: "John Doe", 
    age: 35, 
    email: "john.doe@email.com" 
} ;                                      // Creation of customer's profile

for (const property in customer) {
    console.log(`${property}: ${customer[property]}`)} ;    // Each property in the object will be log individually


// Task 2 - Order Details

let order ={ 
    orderId: 12345, 
    totalAmount: 150, 
    status: "Processing",                 // Creation of order as object
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}`) ;
        console.log(`Order Total Amount: $${this.totalAmount}`) ;
        console.log(`Order Status: ${this.status}`) ;
    }
} ;                                      // Addition of displayOrder method using this

order.displayOrder() ;                   // Calling the method displayOrder
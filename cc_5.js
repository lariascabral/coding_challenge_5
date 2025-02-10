// Task 1 - Customer Profile

let customer = { 
    name: "John Doe", 
    age: 35, 
    email: "john.doe@email.com" 
} ;                                             // Creation of customer's profile

for (const property in customer) {
    console.log(`${property}: ${customer[property]}`)} ;    // Each property in the object will be log individually


// Task 2 - Order Details

let order ={ 
    orderId: 12345, 
    totalAmount: 150, 
    status: "Processing",                        // Creation of order as object
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}`) ;
        console.log(`Order Total Amount: $${this.totalAmount}`) ;
        console.log(`Order Status: ${this.status}`) ;
    }
} ;                                             // Addition of displayOrder method using this

order.displayOrder() ;                          // Calling the method displayOrder


// Task 3 - Shopping Cart

let cartItems = ["Shampoo", "Conditioner", "Hair Mask"] ;     // Creation of array
cartItems.push("Curly Cream") ;                // Adding a new product using .push
cartItems.pop()                                // Deleting last product using .pop
cartItems.unshift("Prepoo")                    // Adding the first product in the hair washing process using .unshift
cartItems.shift()                              // Un-adding prepoo from the list since not necessary using .shift

console.log("Hair washing process products:", cartItems)        // Output: Hair washing process products: (3) ['Shampoo', 'Conditioner', 'Hair Mask']


// Task 4 - Price Adjustments

let prices = [100, 200, 300] ;                 // Creation of array
let discountedPrices = prices.map(price => price - (price * 0.10)) ;         // Using .map to apply 10% discount

console.log("Prices with 10% discount applied:", discountedPrices) ;        // Output: Prices with 10% discount applied: (3) [90, 180, 270]


// Task 5 - Product Availability

let inventory = [25, 0, 62, 80, 99, 102, 0] ;    // Creation of array
let productAvailability = inventory.filter(quantity => quantity) ;      // Usage of .filter to polish inventory results

console.log("Quantities in the inventory:", productAvailability) ;       // Output: Quantities in the inventory: (5) [25, 62, 80, 99, 102]


var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'; 

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'John Doe';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Jane Doe'; 
}

console.log("Initial customerName:", customerName);
upperCaseCustomerName();
console.log("After upperCaseCustomerName:", customerName);

setBestCustomer();
console.log("bestCustomer:", bestCustomer);

overwriteBestCustomer();
console.log("After overwriteBestCustomer:", bestCustomer);

console.log("Initial leastFavoriteCustomer:", leastFavoriteCustomer);
try {
    changeLeastFavoriteCustomer();
} catch (error) {
    console.log("Error:", error.message);
}

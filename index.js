let store = {customers:[], meals:[], deliveries:[], employers:[]};

let customerId = 0;
class Customer {
  constructor(name, employer){
    this.name = name;
    this.id = ++customerId;
    if (employer){
      this.employerId = employer.id;
    }
    store.customers.push(this);
  }
}

let mealId = 0;
class Meal {
  constructor(title, price){
    this.title = title;
    this.price = price;
    this.id = ++mealId;

    store.meals.push(this);
  }
  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.mealId == this.id;
    });
  }
  customers() {
    return this.deliveries().map(delivery => {
      return delivery.customer();
    });
  }
  static byPrice() {
    return store.meals.sort((meal1, meal2) => {
      return meal1.price < meal2.price;
    });
  }
}


let deliveryId = 0;
class Delivery {
  constructor(meal, customer){
    this.id = ++deliveryId;
    if (meal){
      this.mealId = meal.id;
    }
    if (customer){
      this.customerId = customer.id;
    }
    store.deliveries.push(this);
  }
  meal() {
   return store.meals.find(meal => {
     return meal.id === this.mealId;
   });
 }
 customer() {
   return store.customers.find(customer => {
     return customer.id === this.customerId;
   });
 }
}


let employerId = 0;
class Employer {
  constructor(name){
    this.name = name;
    this.id = ++employerId;

    store.employers.push(this);
  }
}

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
}


let employerId = 0;
class Employer {
  constructor(name){
    this.name = name;
    this.id = ++employerId;

    store.employers.push(this);
  }
}

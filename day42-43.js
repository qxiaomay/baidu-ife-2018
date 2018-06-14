Array.prototype.remove = function(val) { 
  var index = this.indexOf(val); 
  if (index > -1) { 
    this.splice(index, 1); 
  } 
};

function createId() {
  return ((new Date()).getTime().toString().substr(8,4)+'-'+Math.random().toString().substr(2,4));
}

// ES5
/*
{
  // 餐馆类
  function Restaurant(rest) {
    this.cash = rest.cash;
    this.seats = rest.seats;
    this.staff = rest.staff;
  }

  Restaurant.prototype.hire = function(obj) {
    this.staff.push(obj)
  }

  Restaurant.prototype.fire = function(obj) {
    this.staff.remove(obj);
  }

  // 职员类
  function Staffmember(name, salary) {
    this.id = createId();
    this.name = name;
    this.salary = salary;
  }

  Staffmember.prototype.work = function() {
    console.log('do work');
  }

  // 服务员类
  function Waiter(name, salary) {
    Staffmember.call(this, name, salary);
  }
  Waiter.prototype = Object.create(Staffmember.prototype);
  Waiter.prototype.constructer = Waiter;

  Waiter.prototype.work = function(param) {
    if (Object.prototype.toString.call(param)=='[object Array]') {
      console.log('记录客人点菜');
    } else {
      console.log('上菜行为');
    }
  }

  // 厨师类
  function Cook(name, salary) {
    Staffmember.call(this, name, salary);
  }
  Cook.prototype = Object.create(Staffmember.prototype);
  Cook.prototype.constructer = Cook;

  Cook.prototype.work = function(dish) {
    console.log('cook '+dish);
  }

  // 顾客类
  function Customer() {}
  Customer.prototype.order = function(dish) {
    // 让厨子做菜
    Cook.work(dish);
  }

  Customer.prototype.eat = function(dish) {
    console.log('eat '+dish);
  }

  // 菜品类
  function Dish(name, cost, price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
  }

  // 测试
  var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
  });

  console.log(ifeRestaurant)

  var newCook = new Cook("Tony", 10000);
  ifeRestaurant.hire(newCook);

  console.log(ifeRestaurant.staff);

  ifeRestaurant.fire(newCook);
  console.log(ifeRestaurant.staff);
}
*/

// ES6
{
  // 餐馆类
  class Restaurant {
    constructor(opt) {
      this.cash = opt.cash;
      this.seats = opt.seats;
      this.staff = opt.staff;
    }

    hire(sb) {
      this.staff.push(sb);
    }

    fire(sb) {
      this.staff.remove(sb);
    }
  }

  // 职员类
  class Staff {
    constructor(name, salary) {
      this.id = createId();
      this.name = name;
      this.salary = salary;
    }

    work() {}
  }

  class Waiter extends Staff {
    work(arg) {
      if (Object.prototype.toString.call(arg)=='[object Array]') {
        console.log('记录客人点菜');
      } else {
        console.log('上菜行为');
      }
    }
  }

  class Cook extends Staff {
    work() {
      console.log('cook cook');
    }
  }

  // 顾客类
  class Customer {
    orderDishes() {
      console.log('order');
      Waiter.work();
    }
    eatDishes() {
      console.log('eat eat');
    }
  }

  // 菜品类
  class Dish {
    constructor(opt) {
      this.name = opt.name;
      this.cost = opt.cost;
      this.price = opt.price;
    }
  }

  // 测试
  let ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
  })

  let newCook = new Cook('Tony', 10000)
  ifeRestaurant.hire(newCook)

  console.log(ifeRestaurant.staff)

  ifeRestaurant.fire(newCook)
  console.log(ifeRestaurant.staff)
}

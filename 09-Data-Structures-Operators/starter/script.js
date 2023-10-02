'use strict';

// const nums=[4,6,2];
// const [x,y,z]=nums;
// console.log(x,y,z);
// console.log(nums);

// const [c1,c2,c3,c4]=restaurant.categories;
// console.log(c1,c2,c3);

// let [m1,m2,m3,m4]=restaurant.mainMenu;
// console.log(m1,m2,m3,m4);

// [m1,,m2,m3,m4]=restaurant.starterMenu;
// console.log(m1,m2,m3,m4);

// // switching variables
// [m1,m3]=[m3,m1];
// console.log(m1,m3);

// const [starter,category,mainMenu]=restaurant.order(3,1,2);
// console.log(starter,category,mainMenu);

// // nested destructuring
// const nested=[2,3,[5,6]];
// const [n1,n2,[i,j]]=nested;
// console.log(n1,n2,i,j);

// //default value in destructuring
// const names=["radha","krsihna"];
// const [d1=1,d2=1,d3=1]=names;
// console.log(d1,d2,d3);

// order: function (starter, category, mainMenu) {
//   return [
//     this.starterMenu[starter],
//     this.categories[category],
//     this.mainMenu[mainMenu],
//   ];
// },

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starter, category, mainMenu) {
    return [
      this.starterMenu[starter],
      this.categories[category],
      this.mainMenu[mainMenu],
    ];
  },

  noOfItems: function (...Items) {
    return Items.length;
  },
  orderDelivery: function ({
    location,
    time = '18:00',
    starter = 0,
    main = 0,
  }) {
    console.log(
      `Order received as StarterMenu: ${this.starterMenu[starter]}, mainMenu: ${this.mainMenu[main]} and will be delivered on ${location} at ${time}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const { name, mainMenu, starterMenu } = restaurant;
// console.log(name, mainMenu, starterMenu);

// const {
//   name: restaurantName,
//   categories: resCategory,
//   mainMenu: resMainCourse,
// } = restaurant;
// console.log(restaurantName, resCategory, resMainCourse);

// const { menu = [], location: resLoc = 'def' } = restaurant;
// console.log(menu, resLoc);

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// let {
//   openingHours: {
//     thu: { open, close },
//   },
// } = restaurant;
// console.log(open, close);

// restaurant.orderDelivery({
//   starter: 3,
//   main: 1,
//   location: 'Krishna Nagar',
//   time: '16:00',
// });

// restaurant.orderDelivery({
//   starter: 3,
//   location: 'Krishna Nagar',
// });

// // mutating variables
// let a=76;
// let b=54;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 87,
// };

// // {a,b}=obj;
// ({a,b}=obj);
// console.log(a,b);

// // swaping variables
// ({a:b,b:a}={b,a});
// console.log(a,b);

console.log(...restaurant.categories);

const newBadArr = ['Indian', 'prasadam', restaurant.categories];
console.log(newBadArr);
const newGoodArr = ['Indian', 'prasadam', ...restaurant.categories];
console.log(newGoodArr);

const newStarterMenu = [...restaurant.starterMenu, 'Pasta'];
console.log(newStarterMenu);

const newMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(newMenu);

console.log(...'Krishna');
console.log(restaurant.categories.forEach(c => console.log(...c)));

const order = [3, 1, 0];
console.log(`Your pizza with`, ...restaurant.order(...order), `is ready`);

const newRestaurant = {
  foundeIn: 1996,
  ...restaurant,
  founder: 'HDG A.C Bhaktivedanta Swami prabupada',
};

console.log(newRestaurant);

console.log(restaurant.name, newRestaurant.name);
newRestaurant.name = 'Krishna Prasadam';
console.log(restaurant.name, newRestaurant.name);

const [a, b, ...others] = [1, 2, 3, 4];
console.log(a, b, others);
// serial mapping of the values into variables
const [Garlic, , Focaccia, ...otherItems] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(Garlic, Focaccia, otherItems);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

console.log(
  restaurant.noOfItems(
    restaurant.starterMenu[0],
    restaurant.starterMenu[3],
    restaurant.mainMenu[2],
    'Dosa'
  )
);

console.log(restaurant.noOfItems(...restaurant.order(0,1,4)));
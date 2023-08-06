'use strict';

// var x = 1;
// const y = 3;
// let z = 2;

// console.log(x === window.x);
// console.log(window.y);
// console.log(y === window.y);
// console.log(window.z);
// console.log(z === window.z);

// const krishna = {
//   firstName: 'Krishna',
//   year: 2000,
//   calAge: function () {
//       console.log(this.firstName);
//   },
// //   calrough: () => {
// //     console.log(this);
// //     console.log(this.firstName);
// // },
// };

// console.log(krishna.calAge());
// console.log(krishna.calrough());

const krishna = {
  firstName: 'Krishna',
  year: 2000,
  calAge: function () {
    console.log(this.firstName);

    const isEternaArrow = () => {
      console.log(this);
      console.log(this.firstName);
    };
    isEternaArrow();
    
    const isEternal = function () {
      console.log(this);
      console.log(this.firstName);
    };
    isEternal();
  },
};

krishna.calAge();

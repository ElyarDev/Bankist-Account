'use strict';

// const { use } = require("react");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// DISPLAY MOVEMENTS
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
      `

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}

// CURRENT BALANCE
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} €`;
}

// SUMMARY
const calcDisplaySummary = function (acc) {
  // IN
  const incomes = acc.movements.filter(move => move > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  // OUT
  const out = acc.movements.filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)}€`;

  // INTEREST
  const interest = acc.movements.filter(mov => mov > 0)
    .map(deposite => deposite * acc.interestRate / 100)
    .filter(int => { return int >= 1 })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
}

// COMPUTE USERNAME
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase().split(' ').map(function (name) {
        // get first word of each name
        return name[0];
      }).join('')
  })
}

createUsernames(accounts);

// UPDATE UI FUNCTION
const updateUi = function (acc) {
  // display movements
  displayMovements(acc.movements);

  // display balance
  calcDisplayBalance(acc);

  // display summary
  calcDisplaySummary(acc);
}

// LOGIN
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display ui and welcome
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;

    // clear input
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // update ui
    updateUi(currentAccount);
  }
})

// TRANSFER
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);

  // empty input
  inputTransferAmount.value = inputTransferTo.value = '';

  // checking the money user have (4 condition)
  if (amount > 0 && receiverAccount && currentAccount.balance >= amount
    && receiverAccount?.username !== currentAccount.username) {
    // doing transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // update ui
    updateUi(currentAccount);
  }
})

// CLOSE ACCOUNT
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin) {
    // get the index of current account
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    // delete account
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }

  // empty input
  inputCloseUsername.value = inputClosePin.value = '';
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// console.log(arr.splice(2));
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// console.log(arr2.reverse());
// console.log(arr2);

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// console.log(letters.join(' - '));

// ********************************************************************************************

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('elyar'.at(0));

// ********************************************************************************************

// for (const move of movements) {
// if (move > 0) {
//   console.log(`you deposited ${move}`);
// }
// else {
//   console.log(`you withdrew ${Math.abs(move)}`);
// }
// }

// movements.forEach(function (movement, index, arr) {
//   if (movement > 0) {
//     console.log(`movement ${index + 1}: you deposited ${movement}`);
//   }
//   else {
//     console.log(`movement ${index + 1}: you withdrew ${Math.abs(movement)}`);
//   }
// })

// ********************************************************************************************

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// })

// const currenciesUniqe = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// currenciesUniqe.forEach(function (value, _, map) {
//   console.log(`${value} : ${value}`);
// })

// ********************************************************************************************

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`dog number ${i + 1} is adult and ${dog} years old`);
//     }
//     else {
//       console.log(`dog number ${i + 1} is puppy`);
//     }
//   })
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// ********************************************************************************************

// const euroToUsd = 1.1;

// const movementUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// })

// const movementUSD = movements.map(mov => mov * euroToUsd);

// console.log(movements);
// console.log(movementUSD);

// ********************************************************************************************

// const deposits = movements.filter(function (move) {
//   return move > 0;
// })
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(function (move) {
//   return move < 0;
// })
// console.log(withdrawals);

// ********************************************************************************************

// console.log(movements);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`iteration ${i} : ${acc}`);
//   return acc + cur;
// }, 0)

// console.log(balance);

// ********************************************************************************************

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
//   console.log(humanAges);

//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return average;
// }

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2);

// ********************************************************************************************

// const euroToUsd = 1.1;
// const total = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(total)

// ********************************************************************************************

// const firstWithDrawal = movements.find(mov => mov < 0);

// console.log(movements);
// console.log(firstWithDrawal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account)

// ********************************************************************************************

// console.log(movements);
// const lastWithDrawal = movements.findLast(mov => mov < 0);
// console.log(lastWithDrawal);

// const latestLargeMovementIndex = movements.findLastIndex(mov =>
//   Math.abs(mov) > 1000
// )
// console.log(latestLargeMovementIndex);

// ********************************************************************************************

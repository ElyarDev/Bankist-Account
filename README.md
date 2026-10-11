# 🏦 Bankist — Interactive Banking Application

A modern, interactive banking application built with **HTML5, CSS3, and JavaScript (ES6+)**. Bankist simulates a banking dashboard where users can manage their accounts, monitor transactions, transfer money, request loans, and track their financial activity through a clean and intuitive interface.

This project was developed to practice modern JavaScript concepts, DOM manipulation, array methods, event handling, and dynamic user interface updates.

<p align="center">
  <a href="https://elyardev.github.io/Bankist-Account/">
    <strong>🚀 View Live Demo</strong>
  </a>
  &nbsp; | &nbsp;
  <a href="https://github.com/ElyarDev">
    <strong>💻 GitHub Profile</strong>
  </a>
</p>

---

## ✨ Features

### 🔐 User Authentication
- Login system using predefined usernames and PINs.
- Personalized welcome message after successful login.
- Dashboard visibility controlled by login status.
- Basic credential validation using JavaScript.

### 💰 Account Overview
- Display the current account balance.
- Calculate total incoming deposits.
- Calculate total outgoing withdrawals.
- Calculate eligible interest earnings.
- Automatically update account information after transactions.

### 📊 Transaction History
- Display deposits and withdrawals.
- Differentiate between incoming and outgoing transactions.
- Dynamically generate transaction elements.
- Update transaction history after account operations.

### 💸 Money Transfers
- Transfer money between available demo accounts.
- Validate transfer amounts.
- Check the sender's available balance.
- Prevent transfers to the same account.
- Update both accounts after a successful transfer.

### 🏦 Loan Requests
- Request a loan by entering an amount.
- Check loan eligibility based on previous deposits.
- Add approved loans to the account's transaction history.
- Automatically recalculate the balance and account summary.

### ⚙️ Account Management
- Close an account after confirming the username and PIN.
- Remove the account from the available demo accounts.
- Hide the dashboard after account closure.

### 🔄 Additional Interface Elements
- Transaction sorting control.
- Session countdown timer interface.
- Separate sections for transfers, loans, and account closure.
- Clean dashboard layout and interactive forms.

> **Note:** Features such as transaction sorting, automatic logout, and transaction dates may require additional JavaScript implementation if they are not functional in the current version.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structuring the application |
| CSS4 | Styling and layout |
| JavaScript (ES6+) | Application logic and interactivity |
| DOM Manipulation | Dynamically updating interface elements |
| Array Methods | Processing transactions and account data |
| Event Listeners | Handling user interactions |
| Google Fonts | Poppins typography |

---

## 🧠 JavaScript Concepts Practiced

This project demonstrates practical experience with the following JavaScript concepts:

- Variables, functions, arrays, and objects.
- Array iteration using `forEach()`.
- Data transformation using `map()`.
- Filtering data using `filter()`.
- Calculations using `reduce()`.
- Searching with `find()` and `findIndex()`.
- Conditional checks using `some()`.
- Arrow functions and callback functions.
- Template literals and dynamic HTML generation.
- DOM selection and manipulation.
- Event handling with `addEventListener()`.
- Conditional logic and form validation.
- Optional chaining with `?.`.
- Working with `Map` and `Set`.
- Managing application state through JavaScript objects.
- Calculating account balances, transaction summaries, and interest.

---

## 📂 Project Structure

```text
Bankist-Account/
│
├── index.html       # Application structure
├── style.css        # Styling and layout
├── script.js        # Banking logic and interactions
├── logo.png         # Application logo
├── icon.png         # Browser favicon
└── README.md        # Project documentation
```

*This structure represents the expected organization based on the HTML file. Adjust filenames if your repository uses a different structure.*

---

## 🚀 Getting Started

You can explore the live version or run the project locally.

### Option 1: Live Demo

Visit the deployed application:

**[Open Bankist Account](https://elyardev.github.io/Bankist-Account/)**

### Option 2: Run Locally

**1. Clone the repository**

```bash
git clone https://github.com/ElyarDev/Bankist-Account.git
```

**2. Navigate to the project directory**

```bash
cd Bankist-Account
```

**3. Open the application**

Open `index.html` in your browser, or use the Live Server extension in Visual Studio Code.

No package installation or build process is required for the current frontend implementation.

---

## 👤 Demo Accounts

The application includes four predefined demo accounts.

| Account Holder | Username | PIN |
|---|---|---|
| Jonas Schmedtmann | `js` | `1111` |
| Jessica Davis | `jd` | `2222` |
| Steven Thomas Williams | `stw` | `3333` |
| Sarah Smith | `ss` | `4444` |

**How to log in:**

1. Open the live demo.
2. Enter one of the usernames listed above.
3. Enter the corresponding PIN.
4. Click the login arrow to access the dashboard.

> **Security notice:** These credentials are public demonstration data stored in client-side JavaScript. They do not provide real authentication or protect sensitive information.

---

## 🔒 Security Disclaimer

Bankist is an educational frontend project designed to demonstrate JavaScript programming and interactive interface development.

- Authentication is handled entirely on the client side.
- Account data is stored in JavaScript objects.
- Transactions are simulated and are not connected to real bank accounts.
- There is no backend authentication or database persistence in the provided implementation.
- The application is not intended for real financial transactions.

**Never enter real banking credentials or sensitive financial information.**

---

## 🎯 Project Goals

The main goal of this project is to strengthen JavaScript fundamentals by building an interactive application that combines data processing, user input, event-driven programming, and dynamic interface updates.

The project also demonstrates how different interface components can work together to simulate common banking operations.

---

## 🔮 Future Improvements

Possible improvements for future versions include:

- [ ] Implement functional transaction sorting.
- [ ] Add an automatic logout timer.
- [ ] Display transaction dates and relative timestamps.
- [ ] Improve responsive behavior on mobile devices.
- [ ] Add form validation and clear error messages.
- [ ] Persist demo data using local storage.
- [ ] Add automated tests for banking operations.
- [ ] Build a backend API using Node.js and Express.
- [ ] Store account data in a database.
- [ ] Implement secure server-side authentication and authorization.
- [ ] Improve accessibility and keyboard navigation.

---

## 👨‍💻 Author

**Elyar Athari**

Frontend developer focused on building interactive web applications and improving JavaScript development skills.

- **GitHub:** [ElyarDev](https://github.com/ElyarDev)
- **Live Project:** [Bankist Account](https://elyardev.github.io/Bankist-Account/)

---

## 📄 License

This project is intended for educational and portfolio purposes. If the project incorporates original course materials or third-party assets, review the applicable licensing and attribution requirements before redistributing them.

---

⭐ **Thanks for checking out Bankist!**

Feel free to explore the live demo, review the source code, and follow my development journey on GitHub.

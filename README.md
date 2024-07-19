# Homebanking

## Summary

- [About](#About)
- [Installation](#Installation)
- [Usage](#Usage)

## About

Homebanking web application developed with the Angular framework, featuring functionalities such as login, transaction history, depositing and withdrawing funds, authentication services, and logging.

## Installation

Install the latest version of Node [Node](https://nodejs.org/en/).

Install TypeScript:

```
$ npm install -g typescript
```

Install Angular:
```
$ npm install -g @angular/cli
```

Download the project and install dependencies:

```
git clone git@github.com:sandrabressan/homebanking.git
cd homebanking-main
npm install
```
<br>

## Usage
<br>

In the terminal, run the command:

```
$ ng serve
```

Open your browser and navigate to http://localhost:4200.

On the main page, click **Access Your Account**; you will be redirected to the **Login** page.

The **Transaction History** page is protected by an authentication service.

Currently, there are two registered users: Maria and José. To log in with these users, use the following credentials:

Maria:

```
Agência: 1234
Conta: 12345678-9
Senha: 1234qwer
```
José:

```
Agência: 5678
Conta: 98765432-1
Senha: qwer1234
```
Using any of these credentials will direct you to the **Transaction History** page, where you can view the current balance and transaction history.

The **Transaction History** page loads the user's transaction history using the **AccountService**, which simulates a request to an HTTP endpoint and displays the last 10 transactions.

To deposit or withdraw funds, enter a numeric value in the **Enter the amount (R$)** field and click **Deposit** or **Withdraw**.

To log out, click **Log Out**.

Login attempts and transactions are recorded using the logging service, which prints to the console and saves encrypted logs in the browser's local storage.

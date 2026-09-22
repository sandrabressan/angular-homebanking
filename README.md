# Homebanking

A home banking web application developed with **Angular and TypeScript**.

## Summary

* [About](#about)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [Project Status](#project-status)

## About

Homebanking web application developed with the Angular framework, featuring functionalities such as login, transaction history, depositing and withdrawing funds, authentication services, and logging.

## Installation

Install the latest version of [Node.js](https://nodejs.org/).

Install the Angular CLI:

```bash
npm install -g @angular/cli
```

Clone the project and install the dependencies:

```bash
git clone https://github.com/sandrabressan/angular-homebanking.git
cd angular-homebanking
npm install
```

## Usage

In the terminal, run:

```bash
ng serve
```

Open your browser and navigate to:

http://localhost:4200

On the main page, click **Access Your Account** to access the **Login** page.

The **Transaction History** page is protected by an authentication service. The application includes predefined test users and simulated account data for demonstration purposes.

After logging in, users can:

* View their current balance
* View their transaction history
* Deposit funds
* Withdraw funds
* Log out

The **Transaction History** page loads transaction data using the `AccountService`, which simulates a request to an HTTP endpoint and displays the user's recent transactions.

Login attempts and transactions are recorded using the logging service, which prints information to the console and stores encrypted logs in the browser's local storage.

## Technologies

* Angular
* TypeScript
* HTML
* CSS

## Project Status

This project is no longer under active development.

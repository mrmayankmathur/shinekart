# Shinekart E-Commerce Platform

Welcome to Shinekart, your go-to e-commerce platform for a seamless online shopping experience. This repository contains the codebase for the Shinekart platform, built with modern web technologies like TypeScript, React, and Shadcn UI.

## Table of Contents

- [About Shinekart](#about-shinekart)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About Shinekart

Shinekart is a fully functional e-commerce platform designed to offer a smooth and intuitive shopping experience. Whether you're a developer looking to contribute or a business owner aiming to launch your online store, Shinekart provides the tools and features needed to succeed.

## Features

- **User Authentication**: Secure login and registration using Clerk.
- **Product Management**: Add, update, and remove products easily.
- **Shopping Cart**: Dynamic cart management with add, update, and delete functionality.
- **Order Processing**: Seamless order placement and tracking.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Admin Dashboard**: Manage users, orders, and products efficiently.

## Tech Stack

- **Frontend**: 
  - [TypeScript](https://www.typescriptlang.org/)
  - [React](https://reactjs.org/)
  - [Shadcn UI](https://shadcn.dev/)
  - [Redux](https://redux.js.org/) for state management
  - [React Router](https://reactrouter.com/) for navigation

- **Backend**: 
  - [PostgreSQL](https://www.postgresql.org/)
  - [Clerk](https://clerk.com/) for authentication

- **Tools**:
  - [VS Code](https://code.visualstudio.com/)
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)

## Installation

### Prerequisites

- npm (>= 6.x) or yarn (>= 1.x)

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/mrmayankmathur/shinekart.git
   cd shinekart
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application**

   ```bash
   npm start
   # or
   yarn start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

Once the application is up and running, you can explore the following features:

- **Browse Products**: View all available products.
- **User Authentication**: Register and log in to your account.
- **Shopping Cart**: Add products to your cart and proceed to checkout.
- **Admin Dashboard**: Manage products, users, and orders (admin access required).

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new Pull Request.

Please ensure your code follows our [coding guidelines](CONTRIBUTING.md) and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries or support, please reach out to us at:

- **Email**: support@shinekart.com
- **GitHub Issues**: [https://github.com/yourusername/shinekart/issues](https://github.com/yourusername/shinekart/issues)

Thank you for visiting Shinekart! Happy coding!

# E-Commerce Website 🛒

An advanced e-commerce platform built using the **MERN stack** (MongoDB, Express, React, Node.js), offering a seamless shopping experience for users and robust management features for admins.

## 🛠️ Features

### For Users
- **User Authentication**: Secure login and registration using JWT.
- **Product Browsing**: Search and browse products by categories, brands, and keywords.
- **Product Details**: View product information, reviews, and ratings.
- **Cart Management**: Add, edit, or remove items from the shopping cart.
- **Order Placement**: Checkout securely with integrated payment options.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

### For Admins
- **Product Management**: Add, edit, or remove products.
- **Order Management**: Track orders and update shipping statuses.
- **User Management**: View and manage user information.
- **Dashboard**: View essential statistics like total sales, products, and orders.

## 🔧 Tech Stack

- **MongoDB**: NoSQL database for storing product, user, and order information.
- **Express.js**: Web framework for Node.js, handling API routes and server-side logic.
- **React.js**: Frontend framework for building a dynamic and responsive user interface.
- **Node.js**: Backend JavaScript runtime environment.
- **JWT (JSON Web Tokens)**: For secure authentication and session management.
- **Payment Integration**: For secure payments and transactions.

## 🚀 How to Run Locally

### Prerequisites
- Node.js installed on your machine.
- MongoDB Atlas or local MongoDB server.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-mern.git
   cd ecommerce-mern

2. Install the dependencies:
    ```bash
    npm install
    cd frontend
    npm install
3. Add environement varibles
    ```bash
    PORT = 5000
    MONGO_URI = your-mongodb-uri
    JWT_SECRET = your-secret-key
3. Start the development server:
   ```bash
    npm run server
    cd frontend
    npm start

The website will be running at [Shoppy](https://shoppy-ks.vercel.app/).

## 🛡️ Security

- **Data Validation**: Inputs are validated to prevent SQL injection and XSS attacks.
- **HTTPS**: Secure data transmission between client and server.
- **JWT Authentication**: Safeguards user sessions.

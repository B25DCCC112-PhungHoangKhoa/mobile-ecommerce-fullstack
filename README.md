# TechStore - E-commerce Web Application

A full-stack e-commerce web application for selling smartphones, built with Node.js, Express.js, EJS, and MySQL.

## Features

### Customer
- User registration and login
- Session-based authentication
- Browse products and categories
- Search for products
- Product details and reviews
- Shopping cart
- Checkout and order placement
- View order history
- View order details
- Cancel orders
- Download invoices

### Admin
- Role-based authorization
- Admin dashboard
- Product management
- Category management
- Order management
- User management

## Tech Stack

### Backend
- Node.js
- Express.js
- RESTful API
- EJS

### Database
- MySQL
- mysql2

### Authentication & Security
- Express Session
- bcryptjs
- Role-based authorization

### Other Tools
- Multer
- Puppeteer
- dotenv
- Git

## Project Structure

```text
├── config/          # Database configuration
├── controllers/     # Application/business logic
├── middleware/      # Authentication and middleware
├── models/          # Database models
├── public/          # Static assets
├── routes/          # Application routes
├── views/           # EJS templates
├── database.sql     # Database schema
├── app.js            # Application entry point
└── package.json

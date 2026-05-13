# Advanced Events: Ticket Management Platform

A full-stack web application developed for managing tickets for events that allows users to browse events, book tickets, manage enquiries, and access role-based dashboards. The system follows the MVC architectural pattern and implements secure authentication, event management, and booking functionality using Node.js, Express, EJS, and MongoDB.

---

# Table of Contents

1. Project Overview
2. Features
3. Technologies Used
4. MVC Architecture
5. Folder Structure
6. Team Members & Roles
7. Installation & Setup
8. Environment Variables
9. Running the Application
10. Authentication & Security
11. GitHub Collaboration
12. Future Improvements

---

# Project Overview

Advan was developed to modernize and simplify the event booking process for organizations managing conferences, workshops, festivals, and private events.

The platform solves common industry problems such as:
- Overbooking
- Manual event management
- Poor access control
- Lack of centralized booking systems
- Limited administrative insights

The application provides:
- Secure user authentication
- Event management
- Ticket booking
- Capacity validation
- Admin analytics
- Contact enquiry management

---

# Features

## User Authentication
- User registration
- User login/logout
- Password hashing using bcrypt
- Role-based access control

## Event Management
- Create events
- Edit events
- Delete events
- Manage event capacity

## Ticket Booking System
- Book tickets
- Capacity validation
- Booking history tracking

## Dashboard System
- User booking dashboard
- Admin analytics dashboard
- Event statistics

## Contact Management
- Submit enquiries
- Store enquiries in MongoDB
- Admin enquiry management

## Search & Filtering
- Search events
- Filter by category
- Filter by availability
- Filter by date

---

# Technologies Used

## Backend
- Node.js
- Express.js

## Frontend
- EJS
- HTML5
- CSS3
- JavaScript

## Database
- MongoDB
- Mongoose ODM

## Authentication & Security
- bcrypt
- express-session
- dotenv

## Development Tools
- Nodemon
- Git & GitHub
- Visual Studio Code
- MongoDB Compass
- Postman / Thunder Client

---

# MVC Architecture

The project follows the MVC (Model-View-Controller) architecture pattern.

## Models
Responsible for database schemas and data handling.

## Views
Responsible for the frontend interface using EJS templates.

## Controllers
Responsible for application logic and request handling.

## Routes
Responsible for application endpoints and routing.

## Middleware
Responsible for:
- Authentication
- Authorization
- Error handling

---

# Folder Structure

Group-A_WPR371_GroupProject-main/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── eventController.js
│   ├── bookingController.js
│   └── contactController.js
│
├── middleware/
│   ├── auth.js
│   └── errorHandler.js
│
├── models/
│   ├── User.js
│   ├── Event.js
│   ├── Booking.js
│   └── Contact.js
│
├── public/
│   ├── main.js
│   └── style.css
│
├── routes/
│   ├── authRoutes.js
│   ├── eventRoutes.js
│   ├── bookingRoutes.js
│   ├── index.js
│   └── contactRoutes.js
│
├── views/
│     ├── partials/
│     ├── footer.ejs
│     └── header.ejs
│   ├── index.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── events.ejs
│   ├── bookings.ejs
│   ├── contact.ejs
│   ├── admin.ejs
│   └── admin_events.ejs
│
├── MongoDB.env
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md

---

# Team Members & Roles

| Team Member | Role                            | Responsibilities                                              |
|-------------|---------------------------------|---------------------------------------------------------------|
| Member 1    | Team Lead / Project Coordinator | Planning, coordination, task management                       | Kuzivakwashe Bvunyenge
| Member 2    | Backend Developer               | Server logic, controllers, APIs                               | Andru Juan Boosyen
| Member 3    | Frontend Developer              | UI design, EJS views, responsiveness                          | Erich Lorenz
| Member 4    | Database Engineer               | MongoDB schemas, database design                              | Denise Masikgeshu Mkhabela
| Member 5    | Security Engineer               | Authentication, middleware                                    | Maximillian Smith
| Member 6    | DevOps Engineer                 | Infrastructure, environment setup                             | Sria Velloo

<h1>Gill's PC Parts </h1>

<!-- Link to site: <a href="https://cypress.great-site.net/">Cypress</a>. Feel Free to sign up for an account. Admin Account required for administrator features. -->


## 📜Overview
Gill's Pc Parts is a full-stack web application that allows users to buy and sell PC components, featuring secure authentication, product listings, and a responsive user interface.
Currently a WIP.

## 🚀 Tech Stack
***Frontend:***
- Angular
- TypeScript
- Bootstrap
- HTML
- CSS

***Backend:***
- ASP.NET Core Web API
- C#
- Entity Framework Core
- JWT Authentication

***Database:***
- Microsoft SQL Server (MSSQL)

## 📝 Features

* **User Authentication**:

  * Secure user registration and login using JWT-based authentication.
  * Passwords are hashed and never stored in plain text.
  * Role-based access control (buyers vs sellers).
  * Protected routes enforced using Angular route guards.

* **Product Listings**:

  * Users can browse available PC components listed by sellers.
  * View product details including price, condition, and description.
  * Listings are dynamically loaded from the backend API.

* **Sell PC Components**:

  * Authenticated users can create new product listings.
  * Full CRUD operations for seller-managed products.
  * Form validation ensures accurate and complete product data.

* **Search & Navigation**:

  * Users can search for PC components by name or category.
  * Clean and intuitive navigation using Angular routing.
  * URL-based navigation without page reloads (Single Page Application).

* **Shopping Cart**:

  * Authenticated users can add and remove items from their cart.
  * Cart data is managed on the client side via Angular services.
  * Cart access is restricted to logged-in users.

* **Secure API Communication**:

  * Angular communicates with ASP.NET Core Web API using HTTP services.
  * JWT tokens are attached to protected API requests.
  * Backend endpoints are secured using authentication middleware.

* **Responsive Design**:

  * Built with Bootstrap for a mobile-first, responsive layout.
  * Works across desktop, tablet, and mobile devices.
  * Consistent UI using reusable Angular components .


## ⚙️ Setup Instructions
***Prerequisites:***

- Node.js (v18+ recommended)

- Angular CLI

- .NET SDK (v7 or later)

- Microsoft SQL Server (Developer or Express Edition)

- Azure Data Studio (for database management)

- Frontend (Angular)

***Steps:***
1. Clone the repository to your device: `git clone https://github.com/YourUsername/pc-parts-marketplace.git`
2. `cd pc-parts-marketplace`
3. `npm install`
4. `ng serve`

**The Angular application will be available at: `http://localhost:4200`**

***Backend (.NET Core Web API):***
1. `cd GillPcParts.API`
2. `dotnet restore`
3. `dotnet run`

The API will run on:

`https://localhost:5001`

***Database Setup (MSSQL):***

1. Ensure SQL Server is running locally

2. Update the connection string in appsettings.json:

`"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=PcMarketplaceDb;User Id=sa;Password=YourPassword;TrustServerCertificate=True;"
}`

3. Run Entity Framework Core migrations:

- `dotnet ef migrations add InitialCreate`
- `dotnet ef database update`

This will create the database schema automatically.

## 🗄️ Database Design

Users
- ├─ Id (PK)
- ├─ Username
- ├─ Email
- ├─ PasswordHash
- └─ Role

Products
- ├─ Id (PK)
- ├─ Name
- ├─ Description
- ├─ Price
- ├─ Condition
- ├─ Category
- └─ SellerId (FK -> Users.Id)

CartItems
- ├─ Id (PK)
- ├─ UserId (FK -> Users.Id)
- ├─ ProductId (FK -> Products.Id)
- └─ Quantity

Orders
 - ├─ Id (PK)
 - ├─ UserId (FK -> Users.Id)
 - ├─ TotalAmount
 - ├─ Status
 - ├─ CreatedAt
 - └─ UpdatedAt

OrderItems
- ├─ Id (PK)
- ├─ OrderId (FK -> Orders.Id)
- ├─ ProductId (FK -> Products.Id)
- ├─ Quantity
- └─ Price

## 💡Future Enhancements
- Admin Dashboard
- Cleaner UI
- More Advanced Messaging/Email System




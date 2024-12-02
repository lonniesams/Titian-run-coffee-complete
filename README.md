
# Titan Coffee Run Project

## Project Overview
The Titan Coffee Run project is a comprehensive web application developed to demonstrate skills in modern web development and backend integration. The application allows users to log in, place coffee orders, view sales trends, and manage transactions using a RESTful backend.

## Modules Completed
### Module 1: Event Handling and CSS Scripting
- Implemented event handling for form submissions and dynamic updates.
- Demonstrated scripting CSS to enhance user interactivity.

### Module 2: Animations and Graphs
- Created a bar graph displaying sales trends for coffee using the `<canvas>` element.
- Implemented animations for resetting the graph bars.

### Module 3: User Authentication and Authorization
- Developed login and registration functionalities.
- Implemented basic admin access control for viewing sales trends.

### Module 4: Backend Integration
- Set up a RESTful backend using `json-server`.
- Created a `db.json` file to manage order data.
- Used API calls to retrieve and display transactions in the frontend.

### Module 5: Coffee Ordering System
- Developed an order management system with cart functionality.
- Used JavaScript classes to represent products and orders.
- Stored cart data persistently using `localStorage`.

### Module 6: Checkout Page
- Created a checkout page to display ordered items and calculate the total.
- Integrated data retrieval and updates with the backend using RESTful APIs.

## Backend Setup
### Instructions to Run the Backend
1. Navigate to the backend directory:
   ```bash
   cd titan-run-backend
   ```
2. Start the backend server using `json-server`:
   ```bash
   json-server --watch db.json
   ```
3. Access the backend at:
   - `http://localhost:3000/orders`

## Key Features
- Dynamic order management with RESTful API integration.
- Role-based access control for admin features.
- Persistent cart and order data using `localStorage` and backend storage.

## How to Use
1. Start the backend server.
2. Open the application in a browser.
3. Log in as a user or admin:
   - **Admin Credentials**:
     - Username: `admin`
     - Password: `test123`
4. Place coffee orders and view sales trends.

## Future Improvements
- Migrate backend to a production-ready framework (e.g., Express.js).
- Enhance authentication with JWT or session management.
- Implement database integration for better scalability.

## Author
Developed by [Your Full Name]


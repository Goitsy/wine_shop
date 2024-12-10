# E-Commerce Backend Project 🛒

Welcome to the **E-Commerce Backend Project**!

This exercise is designed to help you apply your skills in building a backend for an e-commerce site using **MongoDB** and **Express.js**. This project will require teamwork and individual initiative as you tackle core functionalities and optional advanced features.

## Project Objectives

By the end of this project, you will:

1. Build a backend with essential e-commerce functionality.
2. Implement user authentication with JWTs for session persistence.
3. Create and manage product and cart operations.
4. Optionally, apply data validation and sanitation for secure and reliable input handling.
5. Optionally, add admin functionalities and advanced cart features.

## Requirements

### Core Functionalities

1. **User Management**

   - Users should be able to **sign up** and **log in**.
   - Implement session persistence using **JWTs** to allow users to stay logged in.

2. **Product Management**

   - Pre-seed the database with an initial set of products.
   - Products should have relevant attributes such as `name`, `price`, `description`, and `category`.

3. **Cart Management**

   - Users should have a cart to which they can add products.
   - Ensure users can view their cart with a list of added products.

### Extras (Optional)

1. **Admin Role**

   - Add an `admin` role that can:
     - Create new products.
     - Update existing products.
     - Delete products from the database.

2. **Input Validation**

   - Use a library like **Express Validator** to:
     - Validate user inputs for signing up, logging in, and cart operations.
     - Sanitize inputs to prevent security vulnerabilities like injection attacks.

3. **Advanced Cart Features**

   - When a product is added to the cart:
     - Add a `quantity` field.
     - Update the quantity if the same product is added more than once.

## Deliverables

1. **Working API**

   - Your API should meet the requirements above and allow users to perform the specified actions.

2. **Documentation**

   - Create a readme to include details about the project.
   - OPTIONALLY: Create an index.html page with clear instructions on how to run and test the backend. See [Api docs](https://document360.com/blog/api-documentation/) for more information. This will take time so please keep this step brief.

3. **Extra Features** (if implemented)

   - Highlight any optional features completed.

---

We will share projects on Thursday the 12th at 1:30. Have fun 🥳 building this out and please reach out if you have any questions.

Happy coding </>

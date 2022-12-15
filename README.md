#Vue3 CDN Project & Vanilla JS Form validation

## Challenge

### 1. Create product listing page

- File: `app/index.html`
- data set `src/data/products.json`
- Product listing from API and listed to template.
- Navigation to detail page using vue-router.
- Product state management using vuex.
- Sort products by price and name.
- Action for Favorite icon.
- Grid and List view toggle option.

### 2. Form Validation with only  vanilla JS

- File: `app/form.html` 
- Rules:
    - name: text only, no case sensitive
    - surname: text only, no case sensitive
    - email: alphanumeric, no case sensitive must contain `@` symbol and domain name
    - phone: can contain `+` (only in front of the number) and `space` characters and numbers only
    - password: must be at least 8 long and contain at least 1 special character
- Form validation using javascript and regex
- Success and Failure icon indicator
- Display error message
- Validate on both typing or submitting form.

##To run the application:

- clone the project and the checkout master branch

- Run the command: npm install && npm start

- then go the url

Product List URL: http://localhost:8080/app/index.html
Form URL: http://localhost:8080/app/form.html
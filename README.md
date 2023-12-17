Languages used
HTML,CSS and JavaScript(React.js)
- how to open react project file
- command 
- npm create vite@latest file-name -- --template react
- after created file - npm install
- About Application
- React Redux shopping cart application for shows product added to cart was created using "React + Vite"
- public
  - contains
  - mocks
    - products.json
    - This JSON represents an array of product objects, each containing details like id, title, description, price, addPrice, discountPercentage, rating, stock, brand, category, thumbnail, and an array of images. 
- App.css & App.jsx
- src File includes 3 main components
- Redux
    - contains
    - store.jsx
    - Reducers 
      - ProductSlice.jsx
    - store.jsx
      - contains
      -   It imports configureStore from the toolkit and a ProductsReducer from a file named
      -   ProductsSlice.js located in the Reducers directory. The configureStore function is used to create the store configuration by specifying a root reducer that manages the application state.
      -   In this case, it configures the store to use ProductsReducer specifically to handle the productsData state within the Redux store.
- Reducers
  - contains
  - ProductSlice.jsx
    - The code uses createSlice from @reduxjs/toolkit to create a Redux slice named ProductsSlice.
    - It manages two arrays in its initial state: products and cartProducts. Three reducers (saveProducts, saveCartProducts, deleteProduct) are defined to update the state based on dispatched actions.
    - saveProducts and saveCartProducts replace the existing arrays with the payload received, while deleteProduct is currently empty.
    - Action creators for these reducers are generated automatically and exported for use in a Redux store.
  - pages
  - contains
    - cart.jsx
    - home.jsx
      - cart.jsx
        - Cart component using React and Bootstrap. It interacts with Redux using useSelector and useDispatch to manage cart-related data.
        - It displays items in the cart, allows quantity adjustments, removal of items, and calculates the total cost displayed at the bottom.
        - If the cart is empty, it shows an image indicating so.
      - home.jsx
        -  Home component using React. It fetches product data from an API endpoint when the component mounts and displays this data as product cards.
        -  The component also incorporates a carousel slide and allows users to add products to a shopping cart.
        -  It uses Redux for state management and Bootstrap for layout components.
  - components
    - contains
      - CarouseSlide.jsx
      - cartCard.jsx
      - navbar.jsx
      - productsCard.jsx
        - CarouseSlide.jsx
          -  It showcases multiple images in a carousel format, each image being displayed as a slide.
        - cartCard.jsx
          - CartCard component in React, presenting an individual item within a shopping cart.
          - It renders product information such as title, description, and an image along with a form to select item quantity.
          - This component allows users to adjust quantities, remove items from the cart, and displays sub-total, shipping details, and total price information.
          - It utilizes React Bootstrap components for layout and interacts with Redux to manage cart-related state using useDispatch and useSelector hooks.
        - navbar.jsx
          - NavBar component in React that creates a navigation bar using React Bootstrap components.
          - It includes links to the home page and the cart page using React Router's Link component.
          - The cart link displays a button with a cart icon from the react-icons library
          - a badge indicating the number of items in the cart obtained from Redux state using useSelector hook.
        - productsCard.jsx
          - ProductCard component displaying product information in a card format using React Bootstrap.
          - It includes details like the product image, title, description, and price. This component allows users to add the product to a cart with a button click,
          - showing a confirmation message briefly after addition.
          - It utilizes local state managed by useState to track whether the product has been added to the cart.       
    
- To Run Application
 - npm run dev
- after the above command 
the file runs in this url -http://localhost:5173/

- Then i have pushed my code on github and 
deployed my task 

deployed link
-
https://sweet-tulumba-0d42d7.netlify.app/

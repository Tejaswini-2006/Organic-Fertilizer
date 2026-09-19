Organic Fertilizers - Online Store

A simple web-based Organic Fertilizer Shopping Website that allows users to explore organic fertilizer products, view prices, add products to a shopping cart, and proceed toward checkout.
The project contains a frontend built with HTML, CSS, and JavaScript and communicates with a backend API running on localhost:5000 for products, cart, and checkout operations.
 Features
 
- Home / Hero Section — Introduction to the organic fertilizer store.
- About Us — Explains the mission of providing eco-friendly organic fertilizers.
- Product Catalog — Displays organic fertilizer products with images, descriptions, and prices.
- Add to Cart — Adds selected products to the shopping cart.
- Cart Section — Displays products added to the cart.
- Checkout — Sends the cart to the backend checkout API.
- Contact Us — Contact form for customer messages.
- Responsive Layout — Uses flexible CSS layouts for different screen sizes.
Products
The current product catalog includes:
Product	Price
Organic Fertilizer - 1kg	₹399
Liquid Fertilizer - 500ml	₹250
Organic Compost - 2kg	₹499
Plant Food - 200g	₹150
Soil Enricher - 1kg	₹350
Organic Granules - 500g	₹199
Compost Tea - 1L	₹299
Neem Cake Powder - 500g	₹120
Earthworm Castings - 1kg	₹450
Fish Emulsion - 500ml	₹200
EarthWorm Castings - 500g	₹250
Kelp Meal - 1kg	₹375


🛠️ Technologies Used
Technology	Purpose
HTML5	Website structure
CSS3	Styling, layout, colors, and responsive design
JavaScript	Product loading, cart operations, and checkout requests
REST API	Communication between frontend and backend
Google Fonts	Typography
External Product Images	Product and hero images


📁 Project Structure

organic-fertilizers/
│
├── index.html
├── style.css
├── script.js
└── README.md
The uploaded source contains the HTML page, script.js, and style.css. The JavaScript expects a backend API at http://localhost:5000.

Backend API Requirements

The frontend JavaScript communicates with these API endpoints:

Get Products
GET http://localhost:5000/api/products
Used to fetch products dynamically and display them in the product section.

Add to Cart
POST http://localhost:5000/api/cart
Example request body:
{
  "productName": "Organic Fertilizer - 1kg",
  "price": "399"
}
The frontend expects the response to contain the updated cart.

Checkout
POST http://localhost:5000/api/checkout
The frontend expects a JSON response containing a checkout message.

 How to Run
Option 1 — Run the Frontend
If the project is only being tested as a static frontend, open the HTML file using a browser or use VS Code Live Server.

For example:
index.html
However, the dynamic product/cart functionality requires the backend API to be running.

Option 2 — Run with a Local Backend
Start the backend server on:
http://localhost:5000

Make sure these endpoints are available:
GET  /api/products
POST /api/cart
POST /api/checkout
Then open the frontend in your browser.

Shopping Cart Workflow

Open Website
     ↓
View Products
     ↓
Click "Add to Cart"
     ↓
POST /api/cart
     ↓
Receive Updated Cart
     ↓
Display Cart Items
     ↓
Click "Proceed to Checkout"
     ↓
POST /api/checkout
     ↓
Display Checkout Message
     ↓
Clear Cart

Contact Form
The Contact Us section contains:
- Name
- Email
- Message
- Send Message button
The form currently uses:
mailto:support@organicfertilizers.com
so it attempts to open the user's email client rather than sending the message through a server-side contact API.

Design

The website uses:
- Green shades for organic/natural branding
- Orange call-to-action buttons
- Product cards with shadows
- Flexible product layout
- Hero background image
- Google Fonts
- Separate sections for About, Products, Contact, Cart, and Footer

  Future Enhancements
  
- 🔐 User registration and login
- 🛒 Quantity management in cart
- ❌ Remove-from-cart functionality
- 💳 Real payment gateway integration
- 📦 Order history and order tracking
- 🔎 Product search and filtering
- 🏷️ Product categories
- ⭐ Product reviews and ratings
- ❤️ Wishlist
- 📱 Improved mobile navigation
- 🔒 Secure backend authentication
- 🗄️ Database-backed product management
- 👨‍💼 Admin dashboard
- 📊 Sales and inventory management

 Security Recommendations
 
For a production e-commerce application:
- Validate all product and cart data on the backend.
- Never trust prices sent by the browser.
- Store products and prices in a secure database.
- Use authenticated user sessions.
- Validate and sanitize contact-form input.
- Use HTTPS in production.
- Implement secure payment processing.
- Add server-side authorization for cart and checkout operations.

 Important Note
 
The current frontend contains product information directly in the HTML, while script.js also attempts to load products from the backend API.
Therefore, when using the API-based version, the backend should be configured to return the product data expected by the JavaScript.

Author

Tejaswini Rakhunde
GitHub: Tejaswini-2006

Grow Naturally. Shop Organic.

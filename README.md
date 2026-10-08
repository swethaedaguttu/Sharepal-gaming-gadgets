# SharePal Gaming Gadgets

A responsive React-based recreation of SharePal's Gaming Gadgets rental page, designed with a clean, modern interface and optimized for desktop, tablet, and mobile screens.

## LIVE DEMO  https://sharepal-gaming-gadgets-neon.vercel.app/bangalore/gaming-gadgets-on-rent

## ✨ Overview

SharePal Gaming Gadgets provides a product-focused rental browsing experience for gaming devices and accessories.

The page includes:

- Gaming gadget product listing
- Product search
- Category navigation
- Sorting options
- Date selection for rentals
- Dynamic rental price calculation
- Add-to-cart functionality
- Cart drawer
- FAQ accordion
- Responsive navigation
- Mobile-friendly product grid
- Promotional sections
- Responsive footer

## 🎮 Features

### Product Discovery

- Browse gaming gadgets in a responsive product grid
- Search products by name
- Sort products by price
- Navigate between gaming categories
- Product cards with pricing and rental information

### Rental Selection

- Select rental dates
- Calculate rental pricing based on selected duration
- Add products to the cart
- Review selected products through the cart drawer

### Responsive Experience

The interface is optimized for:

- Desktop
- Laptop
- Tablet
- Mobile

The product grid automatically adapts to different screen sizes for a consistent browsing experience.

### Interactive UI

- Search interaction
- Category navigation
- Product sorting
- Date picker
- Rental price calculation
- Add-to-cart interaction
- Cart drawer
- FAQ accordion
- Empty category state

## 🛠️ Tech Stack

- **React**
- **Vite**
- **JavaScript**
- **CSS**
- **HTML5**

## 📱 Responsive Design

The layout adapts across multiple viewport sizes:

| Screen Size | Layout |
|---|---|
| Large Desktop | 4-column product grid |
| Desktop | 4-column product grid |
| Tablet | 3-column product grid |
| Mobile | 2-column product grid |

The implementation was also checked across common desktop, tablet, and mobile viewport sizes to ensure there is no horizontal overflow.

## 🗂️ Project Structure

```text
sharepal-gaming-gadgets/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project

```bash
cd sharepal-gaming-gadgets
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local development URL shown in your terminal.

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🔗 Main Route

The primary page is available at:

```text
/bangalore/gaming-gadgets-on-rent
```

The root route redirects to the main gaming gadgets page.

## 🧩 Key Components

The application is organized into reusable UI components for:

- Header and navigation
- Hero section
- Category navigation
- Product grid
- Product cards
- Search
- Filters and sorting
- Rental date selection
- Cart drawer
- Promotional sections
- FAQ
- Footer

This component-based structure keeps the interface maintainable and makes individual sections easier to update.

## 📊 Product Data

The application uses a local product dataset containing **23 gaming products**.

Product information is rendered dynamically rather than hardcoding individual product cards into the page.

This makes it easier to update the catalog or add additional products in the future.

## ♿ Accessibility

The interface follows basic accessibility practices, including:

- Descriptive image `alt` text
- Semantic links and buttons
- Keyboard-friendly interactive elements
- Clear visual hierarchy
- Responsive layouts
- No horizontal scrolling across tested viewport sizes

## 🎨 Design Approach

The implementation focuses on recreating a polished rental-commerce experience with:

- Clear product hierarchy
- Strong visual spacing
- Responsive product cards
- Consistent typography
- Prominent pricing
- Simple navigation
- Clean interactive states
- Mobile-first considerations

The overall layout is designed to feel natural and familiar across different devices.

## 🔮 Future Improvements

Potential improvements include:

- Backend-powered product inventory
- User authentication
- Persistent shopping cart
- Real-time availability
- Online payments
- Order tracking
- Product reviews
- Wishlist functionality
- Location-based inventory
- Expanded gaming catalog

## 📄 License

This project is intended for learning and portfolio purposes.

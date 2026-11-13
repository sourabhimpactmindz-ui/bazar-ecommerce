# bazaar store (static home page)

    npm install
    npm run dev

## Structure

    src/
      main.jsx                 entry, loads global styles
      App.jsx                  renders the page (add routing here later)
      pages/Home.jsx           page = layout + sections in order
      components/
        layout/                Navbar, Footer (footer reveal is CSS only)
        sections/              Hero, PainPoints, ShopIntro, ProductGrid, TechHumans, Roles, WinCta
        shop/                  CartPanel, ProductCard (add cart logic here)
      hooks/useInView.js       runs animations once when a block scrolls into view
        ui/                    Button, Highlight, Mascot, Icons
      data/                    products.js, content.js (all text and sample data)
      styles/global.css        colors, fonts, base styles

Each component has its own .css file next to it. Colors live in `styles/global.css` as CSS variables.
Everything is static: the "+" buttons and cart panel have no logic yet.

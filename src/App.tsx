import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import WishlistPage from "./pages/Wishlists";
import { Routes, Route } from "react-router-dom";
import {
  WishlistProvider,
  useWishlist,
} from "./Context/WishlistContext";

function AppContent() {
  const { wishlists } = useWishlist();

  const wishlistCount = wishlists.reduce(
    (total, wishlist) => total + wishlist.productIds.length,
    0
  );

  return (
    <>
      <Navbar wishlistCount={wishlistCount} />

      <Home />

      <WishlistPage />
    </>
  );
}

function App() {
  return (
    <WishlistProvider>
      <AppContent />
    </WishlistProvider>
  );
}

<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/wishlist" element={<WishlistPage />} />
</Routes>

export default App;
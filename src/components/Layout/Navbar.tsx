type NavbarProps = {
  wishlistCount: number;
};

function Navbar({ wishlistCount }: NavbarProps) {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <span className="text-3xl">🛍️</span>

          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Wishlist Store
            </h1>

            <p className="text-sm text-gray-500">
              Simple E-Commerce Store
            </p>
          </div>
        </div>

        <div className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold">
          ❤️ Wishlist ({wishlistCount})
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
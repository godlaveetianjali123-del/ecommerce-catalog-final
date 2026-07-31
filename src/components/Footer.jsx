function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} E-Commerce Catalog. All rights reserved.
        </p>

        <p className="text-gray-400 text-sm mt-2">
          Built with React, Vite and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
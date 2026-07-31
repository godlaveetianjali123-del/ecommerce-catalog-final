import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="container py-20 text-center">

      <h1 className="text-6xl font-bold text-red-600">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mt-3">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Go Home
      </Link>

    </section>
  );
}

export default NotFound;
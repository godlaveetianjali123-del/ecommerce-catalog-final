import Hero from "../components/hero";
import CategoryMenu from "../components/CategoryMenu";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Hero />

      <CategoryMenu />


      <section className="container py-10">

        <div className="bg-white rounded-lg p-6 shadow">

          <h2 className="text-3xl font-bold mb-8">
            Featured Products
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.slice(0,4).map((product)=>(
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>


    </div>
  );
}

export default Home;

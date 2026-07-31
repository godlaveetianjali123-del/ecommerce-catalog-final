import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useSearch } from "../context/SearchContext";


function Products() {

  const { search } = useSearch();


  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (
    <section className="bg-gray-100 min-h-screen py-10">

      <div className="container mx-auto px-5">

        <h1 className="text-4xl font-bold mb-8">
          Products
        </h1>


        {
          filteredProducts.length === 0 ? (

            <p className="text-xl text-gray-600">
              No products found
            </p>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {
                filteredProducts.map((product)=>(
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))
              }

            </div>

          )
        }


      </div>

    </section>
  );
}


export default Products;
import { products } from "@/data/HomeBouquetsData";

type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  image_url: string;
  variants: Variant[];
};

type Variant = {
  size: "mini" | "regular" | "full";
  price: string;
};

function CatalogList({ products }: { products: Product[] }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} className="group">
              <img
                alt={product.title}
                src={product.image_url}
                className="aspect-square w-full overflow-hidden rounded-lg object-cover group-hover:opacity-75 sm:aspect-2/3"
              />
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{product.title}</h3>
                {/* <p>{product.price}</p> */}
              </div>
              <p className="mt-1 text-sm text-gray-500 italic">
                {product.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CatalogList;

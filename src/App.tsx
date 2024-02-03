import { Product } from "./components/Product";

import { products } from "./data/products";

function App() {
  return (
    <>
      <section>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div>
          <Product product={products[0]} />
          <Product product={products[1]} />
        </div>
      </section>
    </>
  );
}

export default App;

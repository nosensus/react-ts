import { useContext, useState } from "react";
import { CreateProduct } from "./components/CreateProduct";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";
import { IProduct } from "./models";
import { ModalContext } from "./context/ModalContext";
// import { products } from "./data/products";

function App() {
  const { loading, error, products, addProduct } = useProducts();
  //const [modal, setModal] = useState(true); // т.к добавили контекст ModalState нам это ненужно больше
  const { modal, open, close } = useContext(ModalContext); // перечисляем то что нам нужно из modalContex'a

  const createHandler = (product: IProduct) => {
    // setModal(false); //не нужно заменили контекстом
    close();
    addProduct(product); // вызываем чтобы закончить добавление
  };

  return (
    <>
      <section>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div>
          {loading && <Loader />}
          {error && <ErrorMessage errorMsg={error} />}
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        {modal && (
          // <Modal title="Create new product" onClose={() => setModal(false)}> //не нужно заменили контекстом
          <Modal title="Create new product" onClose={close}>
            <CreateProduct onCreate={createHandler} />
          </Modal>
        )}
        {/* button className="bg-yellow-400" onClick={() => setModal(true)}> //не нужно заменили контекстом */}
        <button className="bg-yellow-400" onClick={open}>
          Add product
        </button>
      </section>
    </>
  );
}

export default App;

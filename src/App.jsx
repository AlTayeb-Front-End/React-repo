// import "./style/global.css";
// import TagButtons from "./sections/TagButtons";
// import Post from "./components/Post";
// import Header from "./sections/Header";
// import Posts from "./sections/Posts";
// import BasicForm from "./components/BasicForm";
// import ToDoList from "./sections/ToDo";

// function App() {
//   return (
//     <>
//       {/* <Header /> */}
//       <ToDoList />
//     </>
//   );
// }

// export default App;

import { useState } from "react";

const initialProducts = [
  {
    id: 110,
    name: "Baklava",
    count: 1,
  },
  {
    id: 111,
    name: "Cheese",
    count: 5,
  },
  {
    id: 112,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    console.log(productId);
    let updatedProducts = products.map((product) => {
      return product.id === productId
        ? { ...product, count: product.count + 1 }
        : product;
    });
    setProducts(() => updatedProducts);
  }

  return (
    <ul style={{ margin: "150px auto", width: "fit-content" }}>
      {products.map((product) => (
        <li key={product.id} style={{ marginBottom: "15px" }}>
          {product.name} (<b>{product.count}</b>)
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}

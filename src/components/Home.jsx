import Header from "./Header.jsx";
import CardPizza from "./CardPizza.jsx";
import { pizzas } from "../pizzas";

export default function Home() {
  return (
    <main className="container my-4">
      <Header />
      <section className="d-flex flex-wrap gap-3 justify-content-center mt-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img || "https://via.placeholder.com/150"}
          />
        ))}
      </section>
    </main>
  );
}

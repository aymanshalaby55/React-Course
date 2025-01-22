import Logo from "./logo";
import Form from "./Form";
import Stats from "./Stats";
import Packinglist from "./packinglist";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  const [item, setItem] = useState(initialItems);
  const numItems = item.length;
  function handleAddItem(data) {
    setItem((items) => [...items, data]);
  }

  function handleDelete(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function handleDeleteAll() {
    setItem([]);
  }
  function handleBox(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form addItem={handleAddItem} />
      <Packinglist
        items={item}
        handleDelete={handleDelete}
        onToggleItem={handleBox}
        handleDeleteAll={handleDeleteAll}
      />
      <Stats numItems={numItems} />
    </div>
  );
}

export default App;

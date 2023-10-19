/* 

  producto = {
    id: string,
    price: number
  }

*/

const carrito = new Map([
  [
    "PAN",
    {
      id: "PAN",
      price: 200,
      quantity: 1,
    },
  ],
  [
    "FACTURAS",
    {
      id: "FACTURAS",
      price: 600,
      quantity: 4,
    },
  ],
]);

const _createProduct = (product) => ({
  ...product,
  quantity: 1,
});

const agregarProducto = (producto) => {
  const productoEnElCarrito = carrito.get(producto.id);

  productoEnElCarrito
    ? productoEnElCarrito.quantity++
    : carrito.set(producto.id, _createProduct(producto));
};

const eliminarProducto = (producto) => {
  const productoEnElCarrito = carrito.get(producto.id);

  if (!productoEnElCarrito) return;

  productoEnElCarrito.quantity === 1
    ? carrito.delete(producto.id)
    : productoEnElCarrito.quantity--;
};

agregarProducto({
  id: "PAN",
  price: 200,
});

const arrFromMap = (m) => Array.from(m.values());

const totalProductos = arrFromMap(carrito).reduce((a, e) => a + e.quantity, 0);

console.log(totalProductos);
console.log(carrito);

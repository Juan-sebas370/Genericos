class Producto {
    nombre: string;
    precio: number;
  
    constructor(nombre: string, precio: number) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }

  class CajaRegistradora {
    products: Producto[];
    total: number;
  
    constructor() {
      this.products = [];
      this.total = 0;
    }

    cobrar(producto: Producto): void {
      agregarProducto(this.products, producto);
      this.total += producto.precio;
    }

    imprimir_ticket(): void {
      console.log("Ticket de compra:");
      this.products.forEach((producto) =>
        console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio.toFixed(2)}`)
      );
      console.log(`Total: $${this.total.toFixed(2)}`);
    }
  }

  function agregarProducto<T>(lista: T[], elemento: T): void {
    lista.push(elemento);
  }

  const producto1 = new Producto("Manzana", 1500);
  const producto2 = new Producto("Pan", 2500);
  const producto3 = new Producto("Leche", 3800);

  const caja = new CajaRegistradora();

  caja.cobrar(producto1);
  caja.cobrar(producto2);
  caja.cobrar(producto3);
  
  caja.imprimir_ticket();
  
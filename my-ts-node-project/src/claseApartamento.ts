class Apartamento {
    habitaciones: string;
    numero: number;
    metros: string;
    propietarios: Propietario[];
  
    constructor(habitaciones: string, numero: number, metros: string) {
        this.habitaciones = habitaciones;
        this.numero = numero;
        this.metros = metros;
        this.propietarios = [];
    }
}

class Propietario {
    nombre: string;
    email: string;
  
    constructor(nombre: string, email: string) {
      this.nombre = nombre;
      this.email = email;
    }
}

class Edificio {
    direccion: string;
    apartamentos: Apartamento[];
  
    constructor(direccion: string) {
        this.direccion = direccion;
        this.apartamentos = [];
    }

    agregar_apartamento(apartamento: Apartamento): void {
        this.apartamentos.push(apartamento);
    }

    eliminar_apartamento(numero: number): void {
        this.apartamentos = this.apartamentos.filter((apt) => apt.numero !== numero);
    }

    buscar_apartamento(numero: number): Apartamento | undefined {
        return this.apartamentos.find((apt) => apt.numero === numero);
    }

    agregar_propietario(numero: number, propietario: Propietario): void {
        const apartamento = this.buscar_apartamento(numero);
        if (apartamento) {
            apartamento.propietarios.push(propietario);
        } else {
            console.log(`Apartamento con número ${numero} no encontrado.`);
        }
    }

    cobrar_renta(): void {
        this.apartamentos.forEach((apartamento) => {
            apartamento.propietarios.forEach((propietario) => {
            console.log(`Cobrando renta a ${propietario.nombre} (${propietario.email}) para el apartamento número ${apartamento.numero}.`);
            });
        });
    }
}

const edificio = new Edificio("123 Calle Principal");

const apto1 = new Apartamento("3 habitaciones", 101, "80m²");
const apto2 = new Apartamento("2 habitaciones", 102, "60m²");

edificio.agregar_apartamento(apto1);
edificio.agregar_apartamento(apto2);

const propietario1 = new Propietario("Juan Pérez", "juan@example.com");
const propietario2 = new Propietario("Ana López", "ana@example.com");

edificio.agregar_propietario(101, propietario1);
edificio.agregar_propietario(102, propietario2);

edificio.cobrar_renta();
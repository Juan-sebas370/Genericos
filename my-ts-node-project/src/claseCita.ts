class Cita {
    paciente: string;
    doctor: string;
    fecha: Date;
    hora: string;
    motivo: string;
  
    constructor(paciente: string, doctor: string, fecha: Date, hora: string, motivo: string) {
      this.paciente = paciente;
      this.doctor = doctor;
      this.fecha = fecha;
      this.hora = hora;
      this.motivo = motivo;
    }
  }
  
  let citas: Cita[] = [
    new Cita("Juan Pérez", "Dr. García", new Date("2023-10-01"), "10:00", "Consulta general"),
    new Cita("Ana López", "Dra. Sánchez", new Date("2023-10-01"), "11:00", "Chequeo anual"),
    new Cita("Carlos Gómez", "Dr. García", new Date("2023-10-02"), "09:30", "Revisión cardiológica"),
  ];
  
  function agregarElemento<T>(lista: T[], elemento: T): void {
    lista.push(elemento);
  }

  function eliminarElemento<T>(lista: T[], elemento: T): void {
    const index = lista.indexOf(elemento);
    if (index > -1) {
      lista.splice(index, 1);
    }
  }
  
  function buscarElementos<T>(lista: T[], criterio: (elemento: T) => boolean): T[] {
    return lista.filter(criterio);
  }

  function citas_hoy(): Cita[] {
    const hoy = new Date();
    return buscarElementos(citas, (c) =>
      c.fecha.getDate() === hoy.getDate() &&
      c.fecha.getMonth() === hoy.getMonth() &&
      c.fecha.getFullYear() === hoy.getFullYear()
    );
  }
 
  function citas_fecha(fecha: Date): Cita[] {
    return buscarElementos(citas, (c) =>
      c.fecha.getDate() === fecha.getDate() &&
      c.fecha.getMonth() === fecha.getMonth() &&
      c.fecha.getFullYear() === fecha.getFullYear()
    );
  }
  
  const nuevaCita = new Cita("María Ruiz", "Dra. Sánchez", new Date("2023-10-01"), "12:00", "Dolor de cabeza");
  agregarElemento(citas, nuevaCita);
  
  eliminarElemento(citas, citas[0]);

  const citasDoctorGarcia = buscarElementos(citas, (c) => c.doctor === "Dr. García");
  console.log("Citas del Dr. García:", citasDoctorGarcia);

  console.log("Citas de hoy:", citas_hoy());

  console.log("Citas del 2023-10-01:", citas_fecha(new Date("2023-10-01")));
  
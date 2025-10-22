import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Especie } from '../especie/entities/especie.entity';
import { Refugio } from '../refugio/entities/refugio.entity';
import { Animal } from '../animal/entities/animal.entity';
import { Publicacion } from '../publicacion/entities/publicacion.entity';
import { Adopcion } from '../adopcion/entities/adopcion.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    @InjectRepository(Especie)
    private especieRepository: Repository<Especie>,
    @InjectRepository(Refugio)
    private refugioRepository: Repository<Refugio>,
    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
    @InjectRepository(Publicacion)
    private publicacionRepository: Repository<Publicacion>,
    @InjectRepository(Adopcion)
    private adopcionRepository: Repository<Adopcion>,
  ) {}

  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private getRandomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  async seedDatabase() {
    console.log('🌱 Iniciando seed de la base de datos...');

    // 1. Limpiar datos existentes
    await this.clearDatabase();

    // 2. Crear datos base
    const especies = await this.createEspecies();
    const refugios = await this.createRefugios();
    const usuarios = await this.createUsuarios();

    // 3. Crear animales
    const animales = await this.createAnimales(especies, refugios);

    // 4. Crear publicaciones
    const publicaciones = await this.createPublicaciones(usuarios, animales);

    // 5. Crear adopciones
    await this.createAdopciones(usuarios, publicaciones);

    console.log('✅ Seed completado exitosamente!');
    console.log(`📊 Datos creados:
    - ${especies.length} especies
    - ${refugios.length} refugios
    - ${usuarios.length} usuarios
    - ${animales.length} animales
    - ${publicaciones.length} publicaciones
    - Adopciones distribuidas en los últimos 12 meses`);
  }

  private async clearDatabase() {
    console.log('🧹 Limpiando base de datos...');
    
    try {
      // Usar clear() que es más seguro que delete con criterios vacíos
      await this.adopcionRepository.clear();
      await this.publicacionRepository.clear();
      await this.animalRepository.clear();
      await this.usuarioRepository.clear();
      await this.refugioRepository.clear();
      await this.especieRepository.clear();
      
      console.log('✅ Base de datos limpiada');
    } catch (error) {
      console.log('ℹ️ Base de datos ya está vacía o es nueva');
    }
  }

  private async createEspecies(): Promise<Especie[]> {
    const especiesData = [
      { nombre: 'Perro' },
      { nombre: 'Gato' },
      { nombre: 'Conejo' },
      { nombre: 'Hamster' },
      { nombre: 'Ave' },
      { nombre: 'Reptil' },
    ];

    const especies = this.especieRepository.create(especiesData);
    return await this.especieRepository.save(especies);
  }

  private async createRefugios(): Promise<Refugio[]> {
    const refugiosData = [
      {
        nombre: 'Refugio Esperanza Animal',
        direccion: 'Av. Principal 123, Ciudad',
        telefono: '555-0101',
        descripcion: 'Refugio especializado en perros y gatos abandonados con más de 10 años de experiencia.',
      },
      {
        nombre: 'Casa de Amor Animal',
        direccion: 'Calle Verde 456, Zona Norte',
        telefono: '555-0202',
        descripcion: 'Hogar temporal para animales de todas las especies, enfocado en rehabilitación.',
      },
      {
        nombre: 'Refugio San Francisco',
        direccion: 'Av. Libertad 789, Centro',
        telefono: '555-0303',
        descripcion: 'Refugio municipal con capacidad para 200 animales, servicios veterinarios incluidos.',
      },
      {
        nombre: 'Protectora Vida Animal',
        direccion: 'Barrio Los Álamos 321, Sur',
        telefono: '555-0404',
        descripcion: 'Organización sin fines de lucro dedicada al rescate y rehabilitación de animales.',
      },
    ];

    const refugios = this.refugioRepository.create(refugiosData);
    return await this.refugioRepository.save(refugios);
  }

  private async createUsuarios(): Promise<Usuario[]> {
    const nombresUsuarios = [
      { nombre: 'Ana García', email: 'ana.garcia@email.com' },
      { nombre: 'Carlos López', email: 'carlos.lopez@email.com' },
      { nombre: 'María Rodriguez', email: 'maria.rodriguez@email.com' },
      { nombre: 'Juan Pérez', email: 'juan.perez@email.com' },
      { nombre: 'Laura Martínez', email: 'laura.martinez@email.com' },
      { nombre: 'Diego Torres', email: 'diego.torres@email.com' },
      { nombre: 'Sofia Hernández', email: 'sofia.hernandez@email.com' },
      { nombre: 'Roberto Silva', email: 'roberto.silva@email.com' },
      { nombre: 'Carmen Vega', email: 'carmen.vega@email.com' },
      { nombre: 'Fernando Castro', email: 'fernando.castro@email.com' },
    ];

    const direcciones = [
      'Calle 1, Casa 123',
      'Avenida Central 456',
      'Barrio Norte, Mz A, Casa 7',
      'Zona Sur, Calle 8 #45',
      'Centro, Edificio Torre, Apt 302',
    ];

    const usuariosData = nombresUsuarios.map((user, index) => ({
      nombre: user.nombre,
      email: user.email,
      contrasenia: 'password123',
      telefono: `555-${(1000 + index).toString()}`,
      direccion: this.getRandomItem(direcciones),
    }));

    const usuarios = this.usuarioRepository.create(usuariosData);
    return await this.usuarioRepository.save(usuarios);
  }

  private async createAnimales(especies: Especie[], refugios: Refugio[]): Promise<Animal[]> {
    const nombresPerros = ['Max', 'Luna', 'Rocky', 'Bella', 'Zeus', 'Lola', 'Bruno', 'Mia', 'Thor', 'Chloe'];
    const nombresGatos = ['Whiskers', 'Mittens', 'Shadow', 'Ginger', 'Felix', 'Nala', 'Smokey', 'Princess', 'Tiger', 'Coco'];
    const nombresOtros = ['Fluffy', 'Peanut', 'Oreo', 'Cookie', 'Buddy', 'Charlie', 'Lucky', 'Angel', 'Star', 'Hope'];

    const edades = ['2 meses', '6 meses', '1 año', '2 años', '3 años', '4 años', '5 años', '6 años', '7 años'];
    const estados = ['Saludable', 'En tratamiento', 'Recuperándose', 'Excelente'];
    const estadosAdopcion = ['Disponible', 'En proceso', 'Adoptado'];

    const animalesData: any[] = [];

    // Crear 50 animales distribuidos entre especies
    for (let i = 0; i < 50; i++) {
      const especie = this.getRandomItem(especies);
      let nombre: string;
      
      if (especie.nombre === 'Perro') {
        nombre = this.getRandomItem(nombresPerros);
      } else if (especie.nombre === 'Gato') {
        nombre = this.getRandomItem(nombresGatos);
      } else {
        nombre = this.getRandomItem(nombresOtros);
      }

      const animal = {
        nombre: `${nombre} ${i + 1}`,
        id_especie: especie.id_especie,
        edad: this.getRandomItem(edades),
        estado: this.getRandomItem(estados),
        descripcion: `${especie.nombre} ${this.getRandomItem(['adorable', 'juguetón', 'cariñoso', 'tranquilo', 'energético'])} que busca un hogar lleno de amor. ${this.getRandomItem(['Le gusta jugar', 'Es muy social', 'Necesita atención especial', 'Es perfecto para familias', 'Se lleva bien con otros animales'])}.`,
        fotos: JSON.stringify([`${nombre.toLowerCase()}_1.jpg`, `${nombre.toLowerCase()}_2.jpg`]),
        estado_adopcion: this.getRandomItem(estadosAdopcion),
        id_refugio: this.getRandomItem(refugios).id_refugio,
      };

      animalesData.push(animal);
    }

    const animales = this.animalRepository.create(animalesData);
    return await this.animalRepository.save(animales);
  }

  private async createPublicaciones(usuarios: Usuario[], animales: Animal[]): Promise<Publicacion[]> {
    const titulos = [
      'Busca hogar',
      'En adopción',
      'Necesita familia',
      'Listo para adoptar',
      'Busca amor',
      'Adopción responsable',
      'Nuevo hogar',
      'Compañero ideal',
    ];

    const publicacionesData: any[] = [];

    // Crear publicaciones para 80% de los animales
    const animalesConPublicacion = animales.slice(0, Math.floor(animales.length * 0.8));

    for (const animal of animalesConPublicacion) {
      const usuario = this.getRandomItem(usuarios);
      const fechaSubida = this.getRandomDate(
        new Date(2024, 0, 1), // Enero 2024
        new Date() // Ahora
      );

      const publicacion = {
        titulo: `${animal.nombre} ${this.getRandomItem(titulos)}`,
        descripcion: `${animal.descripcion} ${this.getRandomItem(['¡Contáctanos para conocerlo!', 'Esperando por ti.', 'Dale una oportunidad.', 'Será tu mejor amigo.'])}`,
        fecha_subida: fechaSubida,
        estado: this.getRandomItem(['Activa', 'Pausada', 'Cerrada']),
        id_usuario: usuario.id_usuario,
        id_animal: animal.id_animal,
      };

      publicacionesData.push(publicacion);
    }

    const publicaciones = this.publicacionRepository.create(publicacionesData);
    return await this.publicacionRepository.save(publicaciones);
  }

  private async createAdopciones(usuarios: Usuario[], publicaciones: Publicacion[]): Promise<void> {
    const estados = ['Aprobada', 'En proceso', 'Rechazada', 'Completada'];
    const adopcionesData: any[] = [];

    // Crear adopciones distribuidas en los últimos 12 meses
    const ahora = new Date();
    const hace12Meses = new Date();
    hace12Meses.setFullYear(ahora.getFullYear() - 1);

    // Generar más adopciones en algunos meses para testing de analytics
    const mesesConMasAdopciones = [3, 5, 8, 10]; // Abril, Junio, Septiembre, Noviembre

    for (let i = 0; i < 80; i++) {
      const usuario = this.getRandomItem(usuarios);
      const publicacion = this.getRandomItem(publicaciones);
      
      // Generar fecha con más probabilidad en ciertos meses
      let fechaAdopcion: Date;
      const mesRandom = Math.floor(Math.random() * 12) + 1;
      
      if (mesesConMasAdopciones.includes(mesRandom)) {
        // Más adopciones en estos meses
        fechaAdopcion = new Date(2025, mesRandom - 1, Math.floor(Math.random() * 28) + 1);
      } else {
        // Distribución normal en otros meses
        fechaAdopcion = this.getRandomDate(hace12Meses, ahora);
      }

      const adopcion = {
        fecha_adopcion: fechaAdopcion,
        estado: this.getRandomItem(estados),
        id_publicacion: publicacion.id_publicacion,
        id_usuario: usuario.id_usuario,
      };

      adopcionesData.push(adopcion);
    }

    const adopciones = this.adopcionRepository.create(adopcionesData);
    await this.adopcionRepository.save(adopciones);
  }
}
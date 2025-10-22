import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateAnimaleInput } from './dto/create-animale.input';
import { UpdateAnimaleInput } from './dto/update-animale.input';
import { FiltrosAnimalesInput } from './dto/filtros-animales.input';
import { ResultadoBusquedaAnimalesType, MetadataPaginacion } from './dto/resultado-busqueda-animales.type';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AnimalesService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    const respuesta= await firstValueFrom(
      this.httpService.get('/animal')
    )
    return respuesta.data
  }
 async findOne(id: string) {
    const respuesta = await firstValueFrom(
      this.httpService.get(`/animal/${id}`));
  return respuesta.data;
  }

  async findEspecie(especieId: string) {
    const respuesta = await firstValueFrom(
      this.httpService.get(`/especie/${especieId}`)
    );
    return respuesta.data;
  }

  // Helper para extraer edad numérica desde string (ej: "3 años" -> 3, "6 meses" -> 0.5)
  private extractEdadNumerica(edadString: string): number {
    if (!edadString) return 0;
    
    const match = edadString.match(/(\d+)/);
    if (!match) return 0;
    
    const numero = parseInt(match[1]);
    
    // Si dice "meses", convertir a años (fracción)
    if (edadString.toLowerCase().includes('mes')) {
      return numero / 12;
    }
    
    return numero; // Por defecto asumir años
  }

  async buscarAnimalesAvanzado(filtros: FiltrosAnimalesInput): Promise<ResultadoBusquedaAnimalesType> {
    // Obtener todos los animales del REST API
    const respuesta = await firstValueFrom(
      this.httpService.get('/animal')
    );
    let animales = respuesta.data;

    // Aplicar filtros
    if (filtros.especieId) {
      animales = animales.filter(animal => animal.id_especie === filtros.especieId);
    }

    if (filtros.refugioId) {
      animales = animales.filter(animal => animal.id_refugio === filtros.refugioId);
    }

    if (filtros.estadoAdopcion) {
      animales = animales.filter(animal => 
        animal.estado_adopcion?.toLowerCase() === filtros.estadoAdopcion?.toLowerCase()
      );
    }

    if (filtros.edadMin !== undefined) {
      const edadMin = filtros.edadMin;
      animales = animales.filter(animal => {
        const edadNumerica = this.extractEdadNumerica(animal.edad);
        return edadNumerica >= edadMin;
      });
    }

    if (filtros.edadMax !== undefined) {
      const edadMax = filtros.edadMax;
      animales = animales.filter(animal => {
        const edadNumerica = this.extractEdadNumerica(animal.edad);
        return edadNumerica <= edadMax;
      });
    }

    if (filtros.busqueda) {
      const busquedaLower = filtros.busqueda.toLowerCase();
      animales = animales.filter(animal => 
        animal.nombre?.toLowerCase().includes(busquedaLower) ||
        animal.descripcion?.toLowerCase().includes(busquedaLower)
      );
    }

    // Aplicar ordenamiento
    const ordenarPor = filtros.ordenarPor || 'nombre';
    const orden = filtros.orden || 'ASC';
    
    animales.sort((a, b) => {
      let valorA = a[ordenarPor];
      let valorB = b[ordenarPor];

      // Si ordenamos por edad, convertir a número
      if (ordenarPor === 'edad') {
        valorA = this.extractEdadNumerica(a.edad);
        valorB = this.extractEdadNumerica(b.edad);
      } else if (typeof valorA === 'string' && typeof valorB === 'string') {
        // Para strings, convertir a minúsculas
        valorA = valorA.toLowerCase();
        valorB = valorB.toLowerCase();
      }

      if (valorA < valorB) return orden === 'ASC' ? -1 : 1;
      if (valorA > valorB) return orden === 'ASC' ? 1 : -1;
      return 0;
    });

    // Calcular paginación
    const limite = filtros.limite || 10;
    const pagina = filtros.pagina || 1;
    const totalResultados = animales.length;
    const totalPaginas = Math.ceil(totalResultados / limite);
    const inicio = (pagina - 1) * limite;
    const fin = inicio + limite;

    const animalesPaginados = animales.slice(inicio, fin);

    // Construir metadata de paginación
    const metadata: MetadataPaginacion = {
      totalResultados,
      paginaActual: pagina,
      totalPaginas,
      resultadosPorPagina: limite,
      hayPaginaAnterior: pagina > 1,
      hayPaginaSiguiente: pagina < totalPaginas,
    };

    return {
      animales: animalesPaginados,
      metadata,
    };
  }
}

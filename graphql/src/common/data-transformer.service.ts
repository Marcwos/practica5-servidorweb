import { Injectable } from '@nestjs/common';

@Injectable()
export class DataTransformerService {
 
  transformDate(dateString: string | null | undefined): Date | null {
    if (!dateString) {
      return null;
    }

    try {
      const date = new Date(dateString);
      return isNaN(date.getTime()) ? null : date;
    } catch (error) {
      console.warn(`Error parsing date: ${dateString}`, error);
      return null;
    }
  }

  
  transformUsuario(usuario: any): any {
    if (!usuario) return usuario;

    return {
      ...usuario,
      fecha_registro: this.transformDate(usuario.fecha_registro),
    };
  }


  transformUsuarios(usuarios: any[]): any[] {
    if (!usuarios || !Array.isArray(usuarios)) return usuarios;
    return usuarios.map(usuario => this.transformUsuario(usuario));
  }

  transformPublicacion(publicacion: any): any {
    if (!publicacion) return publicacion;

    return {
      ...publicacion,
      fecha_subida: this.transformDate(publicacion.fecha_subida),
    };
  }

 
  transformPublicaciones(publicaciones: any[]): any[] {
    if (!publicaciones || !Array.isArray(publicaciones)) return publicaciones;
    return publicaciones.map(publicacion => this.transformPublicacion(publicacion));
  }

  transformAdopcion(adopcion: any): any {
    if (!adopcion) return adopcion;

    return {
      ...adopcion,
      fecha_adopcion: this.transformDate(adopcion.fecha_adopcion),
    };
  }


  transformAdopciones(adopciones: any[]): any[] {
    if (!adopciones || !Array.isArray(adopciones)) return adopciones;
    return adopciones.map(adopcion => this.transformAdopcion(adopcion));
  }

 
  transformRefugio(refugio: any): any {
    if (!refugio) return refugio;

    return {
      ...refugio,
      // Los refugios no tienen campos de fecha problemáticos actualmente
    };
  }


  transformRefugios(refugios: any[]): any[] {
    if (!refugios || !Array.isArray(refugios)) return refugios;
    return refugios.map(refugio => this.transformRefugio(refugio));
  }
}
import { TipoDireccionInterface } from './tipo-direccion-interface';

export interface DireccionesInterface {
  _id: string;
  direccion: string;
  ciudad: string;
  provincia: string;
  codigoPostal: string;
  tipoDireccion: TipoDireccionInterface;
  observaciones: string;
}
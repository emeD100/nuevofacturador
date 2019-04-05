import { TipoContactoInterface } from './tipo-Contacto-Interface'

export interface ContactosInterface {
  _id: string;
  nombre: string;
  cargo: string;
  tipoContacto: TipoContactoInterface;
  observaciones: string;
}
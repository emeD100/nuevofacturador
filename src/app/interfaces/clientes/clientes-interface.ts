import { TipoClientesInterface } from './tipo-clientes-interface';
import { DireccionesInterface } from './direcciones-Interface';
import { ContactosInterface } from './contactos-interface';
import { TelefonosInterface } from './telefonos-interface';

export interface ClientesInterface {
  _id: string;
  nombre: string;
  tipoCliente: TipoClientesInterface;
  direcciones: DireccionesInterface[];
  contactos: ContactosInterface[];
  telefonos: TelefonosInterface[];
  facturador: string;
  observaciones: string;

}
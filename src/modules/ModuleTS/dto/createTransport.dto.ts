import { Transport } from '../entities/tranport.entity';

export class CreateTransportDto {
  transportNumber: string;

  documentNumber: string;

  date: Date;

  weightFirst: string;

  arrivalDate: Date;

  shipmentDate: Date;

  public convert(): Transport {
    const transport = new Transport();
    Object.assign(transport, { ...this });
  }
}

import {Manufacturer} from './manufacturer.model';

export class Vehicle {
  id: number;
  manufacturer_id: number;
  model: string;
  year: number;
  price: string;
  link: string;
  image: string;
  rented: number;
  thumbnail: string;
  created_at: string;
  updated_at: string;
  manufacturer: Manufacturer;
}

import {
  randFloat,
  randImg,
  randNumber,
  randSentence,
  randVehicleManufacturer,
  randVehicleModel,
  randVerb,
} from '@ngneat/falso';
import { VehicleEntity } from 'src/database/entities/vehicles.entity';
import { FuelType } from 'src/vehicles/core/@types/fuel-type';
import { VehicleType } from 'src/vehicles/core/@types/vehicle-type';

export class VehicleGenerator {
  public static generate(): Omit<
    VehicleEntity,
    'id' | 'createdAt' | 'updatedAt'
  > {
    return {
      manufacturer: randVehicleManufacturer(),
      model: randVehicleModel(),
      year: randNumber({ min: 1980, max: 2024 }),
      type: randomEnumValue(VehicleType),
      price: randNumber({ min: 10_000, max: 100_000 }),
      fuelType: randomEnumValue(FuelType),
      transmission: randVerb(),
      mileage: randNumber(),
      features: randVerb(),
      images: randImg(),
      description: randSentence(),
    };
  }
}

function randomEnumValue(enumeration) {
  const values = Object.keys(enumeration);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
}

import { FuelType } from 'src/vehicles/core/@types/fuel-type';
import { VehicleType } from 'src/vehicles/core/@types/vehicle-type';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('vehicles')
export class VehicleEntity {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public manufacturer: string; // e.g., "BMW", "Tesla", "Toyota"

  @Column()
  public model: string; // e.g., "X5", "Model 3", "Camry"

  @Column()
  public year: number;

  @Column({ type: 'enum', enum: Object.values(VehicleType) })
  public type: VehicleType;

  @Column()
  public price: number;

  @Column({ type: 'enum', enum: Object.values(FuelType) })
  public fuelType: FuelType;

  @Column()
  public transmission: string;

  @Column({ nullable: true })
  public mileage?: number;

  @Column()
  public features: string;

  @Column()
  public images: string;

  @Column()
  public description: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  public constructor(
    id: string,
    manufacturer: string, // e.g., "BMW", "Tesla", "Toyota
    model: string, // e.g., "X5", "Model 3", "Camry"
    year: number,
    type: VehicleType,
    price: number,
    fuelType: FuelType,
    transmission: string,
    features: string,
    images: string,
    description: string,
    mileage?: number,
  ) {
    this.id = id;
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.type = type;
    this.price = price;
    this.fuelType = fuelType;
    this.transmission = transmission; // e.g., "automatic", "manual", "semi-automatic"
    this.mileage = mileage;
    this.features = features;
    this.images = images;
    this.description = description;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

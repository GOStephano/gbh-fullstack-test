import { VehicleGenerator } from 'src/vehicles/infra/utils/vehicle-generator';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedsVehicles1733867778420 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (let i = 0; i < 50; i++) {
      const vehicle = VehicleGenerator.generate();
      await queryRunner.query(
        `INSERT INTO vehicles (manufacturer, model, year, type, price, "fuelType", transmission, mileage, features, images, description) VALUES ('${vehicle.manufacturer}', '${vehicle.model}',  '${vehicle.year}', '${vehicle.type}', '${vehicle.price}', '${vehicle.fuelType}', '${vehicle.transmission}', '${vehicle.mileage}', '${vehicle.features}', '${vehicle.images}', '${vehicle.description}')`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE vehicles');
  }
}

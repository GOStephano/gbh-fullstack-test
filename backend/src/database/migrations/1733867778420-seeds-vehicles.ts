import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedsVehicles1733867778420 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {}

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

function generateVehiclesSeeds() {
  for (let i = 0; i < 50; i++) {}
}

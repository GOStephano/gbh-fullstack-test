import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateVehiclesTable1733867762364 implements MigrationInterface {
  name = 'CreateVehiclesTable1733867762364';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."vehicles_type_enum" AS ENUM('SUV', 'SEDAN', 'TRUCK', 'SPORTS', 'LUXURY', 'ELECTRIC')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."vehicles_fueltype_enum" AS ENUM('GASOLINE', 'DIESEL', 'ELECTRIC', 'HYBRID', 'PLUGIN_HYBRID')`,
    );
    await queryRunner.query(
      `CREATE TABLE "vehicles" ("id" SERIAL NOT NULL, "manufacturer" character varying NOT NULL, "model" character varying NOT NULL, "year" integer NOT NULL, "type" "public"."vehicles_type_enum" NOT NULL, "price" integer NOT NULL, "fuelType" "public"."vehicles_fueltype_enum" NOT NULL, "transmission" character varying NOT NULL, "mileage" integer, "features" character varying NOT NULL, "images" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "vehicles"`);
    await queryRunner.query(`DROP TYPE "public"."vehicles_fueltype_enum"`);
    await queryRunner.query(`DROP TYPE "public"."vehicles_type_enum"`);
  }
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleEntity } from './database/entities/vehicles.entity';
import { dataSourceOptions } from './database/options';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([VehicleEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

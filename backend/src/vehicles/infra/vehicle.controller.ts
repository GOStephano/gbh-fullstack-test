import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleEntity } from 'src/database/entities/vehicles.entity';
import { Repository } from 'typeorm';

@Controller('vehicles')
export class VehicleController {
  public constructor(
    @InjectRepository(VehicleEntity)
    private vehicleRepository: Repository<VehicleEntity>,
  ) {}
}

import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  name: 'default',
  type: 'postgres',
  url: 'postgres://postgres:postgres@localhost:5435/gbh',
  entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/schema/'],
};

import { DataSource } from 'typeorm';
import { dataSourceOptions } from './options';

export const dataSource = new DataSource(dataSourceOptions);

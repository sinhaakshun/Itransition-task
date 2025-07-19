import { IsOptional, IsString } from 'class-validator';

export class DrugFilterDTO {
  @IsOptional()
  @IsString()
  company?: string;
}

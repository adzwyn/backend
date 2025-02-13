import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateStockDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  size_id: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  stok: number;
}

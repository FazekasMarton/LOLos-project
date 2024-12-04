import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';

export class FindAllCharactersDto {
  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number;

  @IsOptional()
  @IsString()
  orderBy?: string;
}
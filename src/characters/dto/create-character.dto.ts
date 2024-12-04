import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateCharacterDto {
  @IsString()
  name: string;

  @IsString()
  role: string;

  @IsInt()
  @Min(1)
  @Max(1000)
  health: number;

  @IsInt()
  @Min(1)
  @Max(500)
  attack: number;

  @IsInt()
  regionId: number;
}
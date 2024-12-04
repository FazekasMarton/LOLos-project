import { IsString, Length } from 'class-validator';

export class CreateRegionDto {
  @IsString()
  @Length(2, 50)
  name: string;

  @IsString()
  description: string;
}
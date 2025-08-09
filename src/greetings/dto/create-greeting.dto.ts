import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateGreetingDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(0)
  @Max(150)
  age: number;
}

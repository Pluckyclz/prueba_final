import { ApiProperty } from '@nestjs/swagger';

export class CreatePlazoDto {
    
    @ApiProperty()
    readonly plazo: number;
  
    @ApiProperty()
    readonly normal: number;

    @ApiProperty()
    readonly puntual: number;
}

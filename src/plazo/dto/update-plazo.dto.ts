import { PartialType } from '@nestjs/swagger';
import { CreatePlazoDto } from './create-plazo.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePlazoDto extends PartialType(CreatePlazoDto) {
    
    @ApiProperty()
    normal: number;

    @ApiProperty()
    puntual: number;
}

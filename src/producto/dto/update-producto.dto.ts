import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
    
    @ApiProperty()
    descripcion: string;
    
    @ApiProperty()
    precio: number;
}

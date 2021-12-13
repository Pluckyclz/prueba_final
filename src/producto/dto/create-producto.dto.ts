import { ApiProperty } from '@nestjs/swagger';

export class CreateProductoDto {
    
    @ApiProperty()
    readonly sku: number;

    @ApiProperty()
    readonly descripcion: string;
    
    @ApiProperty()
    readonly precio: number;
}

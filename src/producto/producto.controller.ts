import { Controller, Get, Post, Body, Param, Delete, Header, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('producto')
@ApiTags('Producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  @Header('content-type', 'aplication/json')
  async create(@Body() createProductoDto: CreateProductoDto) {
    return this.productoService.create(createProductoDto);
  }

  @Get()
  async findAll() {
    return await this.productoService.findAll();
  }

  @Get(':skuOrdesc')
  findOne(@Param('skuOrdesc') skuOrdesc: string) {
    console.log(skuOrdesc);
    return this.productoService.findOne(skuOrdesc);
  }

  @Put(':sku')
  @Header('content-type', 'aplication/json')
  update(@Param('sku') sku: number, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productoService.update(sku, updateProductoDto);
  }

  @Delete(':sku')
  remove(@Param('sku') sku: number) {
    return this.productoService.remove(sku);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, Header, Put } from '@nestjs/common';
import { PlazoService } from './plazo.service';
import { CreatePlazoDto } from './dto/create-plazo.dto';
import { UpdatePlazoDto } from './dto/update-plazo.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('plazo')
@ApiTags('Plazo')
export class PlazoController {
  constructor(private readonly plazoService: PlazoService) { }

  @Post()
  @Header('content-type', 'aplication/json')
  async create(@Body() createPlazoDto: CreatePlazoDto) {
    return this.plazoService.create(createPlazoDto);
  }

  @Get()
  async findAll() {
    return this.plazoService.findAll();
  }

  @Get(':plazo')
  async findOne(@Param('plazo') plazo: number) {
    return this.plazoService.findOne(plazo);
  }

  @Put(':plazo')
  async update(@Param('plazo') plazo: number, @Body() updatePlazoDto: UpdatePlazoDto) {
    return this.plazoService.update(plazo, updatePlazoDto);
  }

  @Delete(':plazo')
  async remove(@Param('plazo') plazo: number) {
    return this.plazoService.remove(plazo);
  }
}

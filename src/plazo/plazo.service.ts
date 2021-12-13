import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlazoDto } from './dto/create-plazo.dto';
import { UpdatePlazoDto } from './dto/update-plazo.dto';
import { Plazo, PlazoDocument} from './schemas/plazo.schema'

@Injectable()
export class PlazoService {

  constructor(@InjectModel(Plazo.name) private plazoModel: Model <PlazoDocument>){}

  async create(createPlazoDto: CreatePlazoDto) {
    const plazoCreado = new this.plazoModel(createPlazoDto);
    return await plazoCreado.save();
  }

  async findAll() {
    return await this.plazoModel.find().exec();
  }

  async findOne(plazo: number) {
    return await this.plazoModel.find({"plazo": plazo});
  }

  async update(plazo: number, updatePlazoDto: UpdatePlazoDto) {
    
    return await this.plazoModel.findOneAndUpdate({ "plazo": plazo }, { "normal": updatePlazoDto.normal, "puntual": updatePlazoDto.puntual });
  }

  async remove(plazo: number) {
    return await this.plazoModel.deleteOne({ "plazo": plazo });
  }

}

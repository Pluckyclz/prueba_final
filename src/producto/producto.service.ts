import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto, ProductoDocument } from './schemas/producto.schema'

@Injectable()
export class ProductoService {

  constructor(@InjectModel(Producto.name) private productoModel: Model<ProductoDocument>){}

  async create(createProductoDto: CreateProductoDto) {
    const productoCreado = new this.productoModel(createProductoDto);
    return await productoCreado.save();
  }

  async findAll() {
    return await this.productoModel.find().exec();
  }

  async findOne(skuOrdesc: string) {

    if(+skuOrdesc){

      return await this.productoModel.find({"sku": +skuOrdesc });

    } else {

      return await this.productoModel.find({"descripcion": { $regex: '.*' + skuOrdesc + '.*'} });
    }
    
  }

  async update(sku: number, updateProductoDto: UpdateProductoDto) {

    return await this.productoModel.findOneAndUpdate({ "sku": sku }, { "precio": updateProductoDto.precio, "descripcion": updateProductoDto.descripcion });
  }

  async remove(sku: number) {
    return await this.productoModel.deleteOne({ "sku": sku });
  }
}

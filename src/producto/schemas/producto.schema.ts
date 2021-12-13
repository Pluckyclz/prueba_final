import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {

  @Prop({ required: true })
  sku: number;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  precio: number;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
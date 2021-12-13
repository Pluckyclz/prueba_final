import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlazoDocument = Plazo & Document;

@Schema()
export class Plazo {
    
    @Prop({ required: true })
    plazo: number;
  
    @Prop({ required: true })
    normal: number;

    @Prop({ required: true })
    puntual: number;
}

export const PlazoSchema = SchemaFactory.createForClass(Plazo);
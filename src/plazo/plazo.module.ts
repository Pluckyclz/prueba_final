import { Module } from '@nestjs/common';
import { PlazoService } from './plazo.service';
import { PlazoController } from './plazo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Plazo, PlazoSchema } from './schemas/plazo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Plazo.name, schema: PlazoSchema }])],
  controllers: [PlazoController],
  providers: [PlazoService]
})
export class PlazoModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PlazoModule } from './plazo/plazo.module';

@Module({
  imports: [ProductoModule, MongooseModule.forRoot('mongodb+srv://sa:123@cluster0.qoykc.mongodb.net/db_cdt?retryWrites=true&w=majority'), PlazoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

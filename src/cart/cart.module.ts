import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './cart.entity';
import { ProductsService } from '../product/products.service';
import { ProductEntity } from '../product/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, ProductEntity])],
  providers: [CartService, ProductsService],
  controllers: [CartController],
})
export class CartModule {}

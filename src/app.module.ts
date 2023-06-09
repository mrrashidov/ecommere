import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    AuthModule,
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'shoppingDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CartModule,
    OrderModule,
  ],
})
export class AppModule {}

console.log([__dirname + '/**/*.entity{.ts,.js}']);

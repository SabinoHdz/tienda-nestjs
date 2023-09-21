import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //rutas estaticas
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('nuevo')
  newEnpoint() {
    return 'yo soy nuevo';
  }
  @Get('/ruta/')
  hello() {
    return 'cons /sas/';
  }
  // @Get('/products/filter')
  // getProductFilter() {
  //   return `product filter  directory`;
  // }
  // //Rutas dimaicas van  despues de las estaticas
  // //parametros query
  // @Get('/products')
  // getProducts(
  //   @Query('limit') limit = 100,
  //   @Query('offset') offset = 0,
  //   @Query('brand') brand: string,
  // ) {
  //   // const { limit, offset } = params;
  //   return `product limit=${limit} , offset= ${offset} brand=${brand}`;
  // }
  // //una sola ruta y un solo parametro
  // @Get('/products/:id')
  // getProduct(@Param('id') id: string) {
  //   return `product ${id}`;
  // }

  //varios parametros recibidos
  // @Get('categories/:id/products/:productId')
  // getCategory(@Param('id') id: string, @Param('productId') productId: string) {
  //   return `category ${id}  and product ${productId}`;
  // }
}

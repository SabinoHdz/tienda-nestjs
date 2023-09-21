import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';
import { ParseIntPipe } from './../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dto';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('filter')
  getProductFilter() {
    return `product filter  directory`;
  }
  //Rutas dimaicas van  despues de las estaticas
  //parametros query
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // const { limit, offset } = params;
    // return {
    //   message: `product limit=${limit} , offset= ${offset} brand=${brand}`,
    // };
    return this.productsService.findAll();
  }
  //una sola ruta y un solo parametro
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    //response.status(200).json();
    // return {
    //   message: `product ${id}`,
    // };
    return this.productsService.findByKey(+id);
  }
  @Post()
  createProduct(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'acción de crear',
    //   data: payload,
    // };
    return this.productsService.create(payload);
  }
  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }
  @Delete(':id')
  deleteUpdate(@Param('id') id: string) {
    return this.productsService.delete(+id);
  }
}

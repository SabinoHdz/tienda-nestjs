import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrdes() {
    return 'todas las ordenes';
  }
  @Get(':idOrder')
  getOrder(@Param() params: any) {
    const { idOrder } = params;
    return `la order con la dir ${idOrder}`;
  }
  @Post()
  createOrder(@Body() payload: any) {
    return 'create order';
  }
  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() payload: any) {
    return 'update order';
  }
  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return 'order delete';
  }
}

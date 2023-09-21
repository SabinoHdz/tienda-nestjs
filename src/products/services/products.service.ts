import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'descript',
      price: 2333,
      stock: 12,
      image: '232',
    },
  ];
  findAll() {
    return this.products;
  }
  findByKey(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }
  create(payload: CreateProductDto) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: UpdateProductDto) {
    const product = this.findByKey(id);
    if (product) {
      const index = this.products.findIndex((prod) => prod.id === id);
      this.products[index] = { ...product, ...payload };
      return this.products[index];
    }
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException('Product not found');
    }

    this.products.slice(index, 1);
    return true;
  }
}

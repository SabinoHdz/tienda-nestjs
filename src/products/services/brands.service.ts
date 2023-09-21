import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  private countID = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'brand 1',
      image: 'htttpo:',
    },
  ];

  findAll() {
    return this.brands;
  }
  findByPk(id: number) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException('brand not found');
    }
    return brand;
  }
  create(payload: CreateBrandDto) {
    this.countID += 1;
    const createBrand = {
      id: this.countID,
      ...payload,
    };
    this.brands.push(createBrand);
    return createBrand;
  }

  update(id: number, payload: UpdateBrandDto) {
    const brand = this.findByPk(id);
    if (brand) {
      const index = this.brands.findIndex((brand) => brand.id === id);
      this.brands[index] = { ...brand, ...payload };
      return this.brands[index];
    }
  }
  remove(id: number) {
    const index = this.brands.findIndex((brand) => brand.id == id);
    if (index == -1) {
      throw new NotFoundException('brand not found');
    }
    this.brands.splice(index, 1);
    return true;
  }
}

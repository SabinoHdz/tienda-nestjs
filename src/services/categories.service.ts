import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/categories.dto';
import { Category } from 'src/entities/category.entiy';

@Injectable()
export class CategoriesService {
  private counterID = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'category 1',
    },
  ];
  findAll() {
    return this.categories;
  }
  findByPk(id: number) {
    const category = this.categories.find((category) => category.id === id);
    if (!category) {
      throw new NotFoundException('no se encontro la categoria');
    }
    return category;
  }
  create(body: CreateCategoryDto) {
    this.counterID += 1;
    const createCategory = {
      id: this.counterID,
      ...body,
    };
    this.categories.push(createCategory);
    return createCategory;
  }
  update(id: number, body: UpdateCategoryDto) {
    const category = this.findByPk(id);
    if (category) {
      const idxCat = this.categories.findIndex((cat) => cat.id === id);
      this.categories[idxCat] = {
        ...category,
        ...body,
      };
      return this.categories[idxCat];
    }
  }
  remove(id: number) {
    const index = this.categories.findIndex((cat) => cat.id === id);
    if (index == -1) {
      throw new NotFoundException('No se encontro la categoria');
    }

    this.categories.splice(index, 1);
    return true;
  }
}

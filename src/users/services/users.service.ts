import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';
import { ProductsService } from 'src/products/services/products.service';

@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    private configService: ConfigService,
  ) {}
  private counterID = 1;
  private users: User[] = [
    {
      id: 1,
      email: 'example@gmail.com',
      password: 'test 1223',
      role: 'admin',
    },
  ];

  findAll() {
    const apiKEY = this.configService.get('API_KEY');
    const dataBase = this.configService.get('DATABASE_NAME');
    console.log(apiKEY,dataBase);


    return this.users;
  }
  findByPK(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }
  create(payload: CreateUserDto) {
    this.counterID += 1;
    const newUser = {
      id: this.counterID,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }
  update(id: number, payload: UpdateUserDto) {
    const user = this.findByPK(id);
    if (user) {
      const index = this.users.findIndex((prod) => prod.id === id);
      this.users[index] = { ...user, ...payload };
      return this.users[index];
    }
  }
  remove(id: number) {
    const index = this.users.findIndex((user) => user.id == id);
    if (index === -1) {
      throw new NotFoundException('user not found');
    }
    this.users.splice(index, 1);
    return true;
  }
  getOrdersByUser(id: number): Order {
    const user = this.findByPK(id);
    return {
      date: new Date(),
      user,
      products: this.productsService.findAll(),
    };
  }
}

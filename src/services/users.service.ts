import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/user.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
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
}

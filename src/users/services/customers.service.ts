import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomersService {
  private counterID = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'test',
      lastName: 'test2',
      phone: '66373747475',
    },
  ];

  findAll() {
    return this.customers;
  }
  findByPK(id: number) {
    const customer = this.customers.find((cust) => cust.id === id);
    if (!customer) {
      throw new NotFoundException('customer not found');
    }
    return customer;
  }
  create(payload: CreateCustomerDto) {
    this.counterID += 1;
    const createCustomer = {
      id: this.counterID,
      ...payload,
    };
    this.customers.push(createCustomer);
    return createCustomer;
  }
  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.findByPK(id);
    if (customer) {
      const index = this.customers.findIndex((customer) => customer.id === id);
      this.customers[index] = { ...customer, ...payload };
      return this.customers[index];
    }
  }
  remove(id: number) {
    const index = this.customers.findIndex((cust) => cust.id == id);

    if (index === -1) {
      throw new NotFoundException('customer not found');
    }
    this.customers.splice(index, 1);
    return true;
  }
}

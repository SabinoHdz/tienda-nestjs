import { Injectable, Inject } from '@nestjs/common';
//Injectar el provider
@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private task: any,
  ) {}
  getHello(): string {
    console.log(this.task);
    return `Hello World! ${this.apiKey}`;
  }
}

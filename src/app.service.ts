import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
//Injectar el provider
@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private task: any,
    private config: ConfigService,
  ) {}
  getHello(): string {
    console.log(this.task);
    const apiKey = this.config.get<string>('API_KEY');
    const name = this.config.get('DATABASE_NAME');
    return `Hello World! ${apiKey} :${name} `;
  }
}

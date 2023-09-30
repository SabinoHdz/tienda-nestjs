import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';
//Injectar el provider
@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private task: any,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    console.log(this.task);
    const apiKey = this.configService.apikey;
    const name = this.configService.database.name;
    return `Hello World! ${apiKey} :${name} `;
  }
}

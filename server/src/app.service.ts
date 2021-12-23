import { Logger, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger('AppService');
  getHello(): string[] {
    this.logger.log('Req received at root');
    return [
      'Welcome to RandomCats! To get started, visit /cats/random to get a random cat image.',
    ];
  }
  getStinky(): string[] {
    this.logger.log('Req received at /stinky');
    return ['Uh oh, stinky!'];
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to RandomCats! To get started, visit /cats/random to get a random cat image.';
  }
  getStinky(): string {
    return 'Uh oh, stinky!';
  }
}

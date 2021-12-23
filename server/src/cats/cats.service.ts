import { Logger, Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly logger = new Logger('CatsService');
  defaultRes(): string[] {
    this.logger.log('Req received at /cats');
    return ['What da cat doin? 🐈'];
  }
  randomRes(): string[] {
    this.logger.log('Req received at /cats/random');
    return ['Random cat! 😺'];
  }
  queryCat(query: string): string[] {
    this.logger.log(`Req received at /cats/{${query}}`);
    return [`Looking for cat with query '${query}' 😼`];
  }
}

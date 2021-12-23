import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  defaultRes(): string {
    return 'What da cat doin? 🐈';
  }
  @Get('random')
  randomRes(): string {
    return 'Random cat! 😺';
  }
  @Get(':query')
  findCat(@Param() params): string {
    return `Looking for cat with query '${params.query}' 😼`;
  }
}

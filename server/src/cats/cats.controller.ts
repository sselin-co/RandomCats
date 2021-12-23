import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CatsService } from './cats.service';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  defaultRes(): string[] {
    return this.catsService.defaultRes();
  }
  @Get('random')
  randomRes(): string[] {
    return this.catsService.randomRes();
  }
  @ApiParam({ name: 'query', type: String })
  @Get(':query')
  findCat(@Param() params): string[] {
    return this.catsService.queryCat(params.query);
  }
}

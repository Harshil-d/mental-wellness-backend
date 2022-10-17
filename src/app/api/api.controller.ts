import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('/api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  @ApiTags('Api')
  getHello(): string {
    return this.apiService.getHello();
  }
}
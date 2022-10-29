import { Controller, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('/api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post()
  @ApiTags('Api')
  getHello(): string {
    return this.apiService.getHello();
  }
}
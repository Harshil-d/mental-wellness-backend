import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@Controller('/api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  @ApiTags('Api')
  getHello(): string {
    return this.apiService.getHello();
  }

  @Post('event')
  @HttpCode(200)
  async event(@Req() req: Request) {
    return await this.apiService.stripeEvent(req);
  }
}
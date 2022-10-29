import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppStatusService } from './app_status.service';

@Controller('/api/app-status')
export class AppStatusController {
  constructor(private readonly appStatusService: AppStatusService) {}

  @Post()
  @ApiTags('AppStatus')
  get() {
    return this.appStatusService.get();
  }
}

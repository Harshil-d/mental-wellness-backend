import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppStatusService } from './app_status.service';

@Controller('/api/app-status')
export class AppStatusController {
  constructor(private readonly appStatusService: AppStatusService) {}

  @Get()
  @ApiTags('AppStatus')
  get() {
    return this.appStatusService.get();
  }
}

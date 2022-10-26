import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppStatusController } from './app_status.controller';
import { AppStatusService } from './app_status.service';
import { AppStatusSchema } from './entity/app_status.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'AppStatus', schema: AppStatusSchema }])],
  controllers: [AppStatusController],
  providers: [AppStatusService],
})
export class AppStatusModule {}

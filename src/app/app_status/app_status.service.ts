import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppStatus, AppStatusDocument } from './entity/app_status.entity';

@Injectable()
export class AppStatusService {

  constructor(
    @InjectModel(AppStatus.name)
    private appStatusModel: Model<AppStatusDocument>,
  ) {}

  get() {
    return this.appStatusModel.findOne();
  }
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import mongoose from 'mongoose';

export type AppStatusDocument = AppStatus & mongoose.Document;

@Schema({ timestamps: true, versionKey: false })
export class AppStatus {
  @Prop({ required: true })
  @ApiProperty()
  statuscode: number;

  @Prop({ required: true })
  @ApiProperty()
  message: string;

  @Prop({ required: true, type: Object })
  @ApiProperty()
  meta_values: Object;

  @Prop({ default: 1, type: Number })
  @ApiProperty()
  show_ad?: number;

  @Prop({ default: 0, type: Number })
  @ApiProperty()
  disabled_ad?: number;
}

export const AppStatusSchema = SchemaFactory.createForClass(AppStatus);

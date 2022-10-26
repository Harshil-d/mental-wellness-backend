import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiModule } from './app/api/api.module';
import { IEnvironmentVariables } from './app/common/@types/IEnvironmentVariables';
import { mongoConfiguration } from './app/common/configuration';
import { AppStatusModule } from './app/app_status/app_status.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [mongoConfiguration],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService<IEnvironmentVariables>) => {
        return {
          uri: configService.get('MONGO_URL'),
          useNewUrlParser: true,
          useUnifiedTopology: true,
        };
      },
    }),
    ApiModule,
    AppStatusModule,
  ],
})
export class AppModule {}

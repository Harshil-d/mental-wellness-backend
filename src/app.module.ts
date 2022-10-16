import { Module } from '@nestjs/common';
import { ApiModule } from './app/api/api.module';

@Module({
  imports: [ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

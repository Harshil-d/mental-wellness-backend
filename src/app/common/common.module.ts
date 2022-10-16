import { Logger, Module } from '@nestjs/common';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { CustomValidationPipe } from './pipes/custom-validation.pipe';

@Module({
  imports: [],
  providers: [CustomValidationPipe, Logger, LoggingInterceptor],
  exports: [CustomValidationPipe, Logger, LoggingInterceptor],
})
export class CommonModule {}

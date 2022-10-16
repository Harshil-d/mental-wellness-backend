import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import logger from './app/common/logger';
import { CustomValidationPipe } from './app/common/pipes/custom-validation.pipe';
import { environment } from './environments';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger });

  app.enableVersioning({
    type: VersioningType.URI,
  });
  // app.useGlobalPipes(new CustomValidationPipe());
  app.enableCors({ origin: environment.allowedOrigins });

  const swaggerConfig = new DocumentBuilder().setTitle('OFFSIDE-States-Grabber').setVersion('0.1').build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const document = SwaggerModule.createDocument(app, swaggerConfig, options);
  SwaggerModule.setup('/api/docs', app, document);
  await app.listen(process.env.SERVER_PORT);
  if (process.env.NODE_ENV === 'test') {
    setTimeout(() => {
      app.close();
    }, 5000);
  }
}
bootstrap();

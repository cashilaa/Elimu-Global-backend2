import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3000;

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'https://elimu-global-testing.onrender.com', // Specify the allowed origin
    credentials: true, // Allow credentials
  });

  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}
bootstrap();
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { RequestMethod } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true });

  const swagConfig = new DocumentBuilder()
    .setTitle('Book service Api')
    .setDescription('API Documentation for Book service')
    .setVersion('1.0')
    .build();

  app.setGlobalPrefix('api', {
    exclude: [
      { path: '', method: RequestMethod.ALL },
      { path: 'health', method: RequestMethod.ALL },
    ],
  });

  SwaggerModule.setup(
    '/docs',
    app,
    SwaggerModule.createDocument(app, swagConfig),
  );

  await app.listen(3000);
}
bootstrap();

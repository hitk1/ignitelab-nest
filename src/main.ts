import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Necessário para fazer validação dos parametros dos endpoints via 'class-validator'
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000);
}
bootstrap();

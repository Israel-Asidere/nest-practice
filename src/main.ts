import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

//entry point
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //global settings
  //env
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true, // strips properties that domt have decorators
  //     forbidNonWhitelisted: true,
  //     transform: true, //automatically transoforms payloads to be objects typed according to their dto classes
  //     disableErrorMessages: false, // self descrptive . disabl error messages in postman
  //   }),
  // );
  //start a http server
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

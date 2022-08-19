import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { setupSwagger } from '@util/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('StartApplication');
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');

  const whitelist = configService
    .get('corsDomains')
    .split(',')
    .map((item) => item.trim());
  const corsOptions = {
    origin: whitelist,
    credentials: true,
  };
  app.enableCors(corsOptions);

  setupSwagger(app);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  await app.listen(port, () => {
    logger.log(`Listen application in port: ${port}`);
  });
}
bootstrap();

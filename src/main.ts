import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './modules/users/logger/logger.service';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  await app.listen(3000);

  const configService: ConfigService = app.get(ConfigService);
  const logger: LoggerService = new LoggerService();

  app.enableCors();
  logger.verbose(`Database URI => ${configService.get('database.uri')}`);
  logger.verbose(`Application listening on port => ${configService.get('port')}`);
  await app.listen(configService.get('port'));
}
bootstrap();

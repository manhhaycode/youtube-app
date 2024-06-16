import { NestFastifyApplication } from '@nestjs/platform-fastify';
import helmet from '@fastify/helmet';
export function middleware(app: NestFastifyApplication) {
  app.register(helmet, {
    crossOriginEmbedderPolicy: false,
  });
}

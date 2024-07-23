import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Set global prefix for API routes
  app.setGlobalPrefix('api'); // Ensure this matches the prefix used in your curl requests

  // Use global validation pipes
  app.useGlobalPipes(new ValidationPipe());

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Todo REST API')
    .setDescription("A REST API to list user's todos/tasks, authorization implemented using JWT token. The API is made using NestJS.")
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document, {
    customCssUrl:
       'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js'
    ]
  });

  // Start the application
  await app.listen(3000);
}

bootstrap();

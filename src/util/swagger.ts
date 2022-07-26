import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Admin Tool API docs')
    .setDescription(
      "Admin Tool API docs<br />Arquivo Json: <a href='./admintool-docs-json' target='_blank'>doc-json</a>",
    )
    .setVersion('2.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('admintool-docs', app, document);
}

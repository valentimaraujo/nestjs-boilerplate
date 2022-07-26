import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { DataMapper } from '@aws/dynamodb-data-mapper';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DynamoDBDataMapper {
  public mapper: DataMapper;

  constructor(private readonly configService: ConfigService) {
    const config = configService.get('database.dynamodb');
    this.mapper = new DataMapper({
      client: new DynamoDB({
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
        region: config.region,
        endpoint: config.endpoint,
      }),
      tableNamePrefix: config.tableNamePrefix,
    });
  }
}

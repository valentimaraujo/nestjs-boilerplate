export const config = () => ({
  port: Number(process.env.APP_PORT),
  corsDomains: process.env.CORS_DOMAINS,
  database: {
    dynamodb: {
      accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID,
      secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY,
      region: process.env.DYNAMODB_REGION,
      tableNamePrefix: process.env.DYNAMODB_TABLE_NAME_PREFIX,
      endpoint: process.env.DYNAMODB_ENDPOINT,
    },
  },
  cognito: {
    userPoolId: process.env.COGNITO_USER_POOL_ID,
    clientId: process.env.COGNITO_CLIENT_ID,
    clientSecret: process.env.COGNITO_CLIENT_SECRET,
    region: process.env.COGNITO_REGION,
    authority: `https://cognito-idp.${process.env.COGNITO_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`,
  },
});

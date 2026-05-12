import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import appConfig from './config/app.config';

import { UserAuth } from './entities/user-auth.entity';
import { Partners } from './entities/partners.entity';
import { ClaMaster } from './entities/cla-master.entity';
import { PartnerOnboardingMaster } from './entities/partner-onboarding-master.entity';
import { ProductConfigMaster } from './entities/product-config-master.entity';

import { AuthModule } from './auth/auth.module';
// import { ClaMasterModule } from './cla-master/cla-master.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, jwtConfig, appConfig],
      envFilePath: '.env',
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        database: configService.get<string>('database.database'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        schema: configService.get<string>('database.schema'),
        entities: [
          UserAuth,
          Partners,
          ClaMaster,
          PartnerOnboardingMaster,
          ProductConfigMaster,
        ],
        synchronize: false,
        logging: false,
      }),
    }),

    AuthModule,
    // ClaMasterModule,
  ],
})
export class AppModule {}
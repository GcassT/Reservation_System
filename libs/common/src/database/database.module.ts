import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        MongooseModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configservice: ConfigService) => ({
            uri: configservice.get('MONGODB_URI')
        }),
        inject: [ConfigService]
    })],
})
export class DatabaseModule {}

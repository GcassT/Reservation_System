import { Module } from '@nestjs/common';
import { 
    ConfigService, 
    ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
    imports: [
        NestConfigModule.forRoot({
            validationSchema: Joi.object({ //Joi validation es para validar que los parametro necesitados de el .env estén listos y luzcan como esperamos
                MONGODB_URI: Joi.string().required()
            })
        })],
    providers: [ConfigService],
    exports: [ConfigService]
})
export class ConfigModule {}

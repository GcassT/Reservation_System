import { Module } from '@nestjs/common';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { DatabaseModule } from '@app/common';
import { ReservationionsRepository } from './reservations.repository';
import { ReservationSchema, ReservationsDocument } from './models/reservation.schema';

@Module({
  imports: [DatabaseModule,
    DatabaseModule.forFeature([{
      name: ReservationsDocument.name ,
      schema: ReservationSchema
    }]),

  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationionsRepository],
})
export class ReservationsModule {}

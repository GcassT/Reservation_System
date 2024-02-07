import { AbstracRepository } from "@app/common/database/abstract.repository";
import { Injectable, Logger } from "@nestjs/common";
import { ReservationsDocument } from "./models/reservation.schema";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReservationionsRepository extends AbstracRepository<ReservationsDocument>{

     protected readonly logger = new Logger(ReservationionsRepository.name);

     constructor(
        @InjectModel(ReservationsDocument.name)
        reservationModel: Model<ReservationsDocument>
     ) {
        super(reservationModel)
     }

}
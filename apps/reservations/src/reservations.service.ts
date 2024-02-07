import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationionsRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {

  constructor(private readonly reservationsRepository: ReservationionsRepository,
  ){}  

  create(createReservationDto: CreateReservationDto) {
    return this.reservationsRepository.create({
      ...CreateReservationDto,
      fechaCreacion: new Date(),
      userID: '123'
    });
  }

  findAll() {
    return `This action returns all reservations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}

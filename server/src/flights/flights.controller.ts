import { Controller, Get, Param } from '@nestjs/common';
import { FlightsService } from './flights.service';

@Controller('TimeTable')
export class FlightsController {
  constructor(private readonly appService: FlightsService) {}

  @Get('/:from/:to/:date')
  getFlights(@Param('from') from: string, @Param('to') to: string, @Param('date') date: string) {
    return this.appService.findAll(from, to, date);
  }
}
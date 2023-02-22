import axios from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FlightsService {
  async findAll(from: string, to: string, date: string) {
    try {
      const flights = await axios.get(
        `https://timetable-lookup.p.rapidapi.com/TimeTable/${from}/${to}/${date}/`
      );
      console.log(flights);
      
    } catch (error) {
      return new Error('Failed to load')
    }
  }
}
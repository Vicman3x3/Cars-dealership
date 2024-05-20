import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

  private cars = ['Toyota', 'Nissan', 'Volswagen', 'Jeep', 'KIA']

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarByID(@Param('id') id){
    console.log({id});
    return this.cars[id]
    
  }
}

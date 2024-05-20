import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {

  constructor(
    private readonly carsService : CarsService
  ){}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarByID(@Param('id', ParseUUIDPipe) id: string){
    console.log({id});
    return this.carsService.findOneByID(id)
  }

  @Post()
  createCar(@Body() createCarDTO: CreateCarDto){
    return this.carsService.createCar(createCarDTO)
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDTO: UpdateCarDto
  ){
    return this.carsService.update(id, updateCarDTO);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number){
    return {
      method: 'DELETE', id: id
    }
  }


}

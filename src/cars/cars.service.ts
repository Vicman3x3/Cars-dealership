import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'

import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'CR7'
        },
        {
            id: uuid(),
            brand: 'Nissan',
            model: 'Tiida'
        }
    ]

    findAll(){
        return this.cars
    }

    findOneByID(id: string){
        const car = this.cars.find(car => car.id === id);
        if (!car){
            throw new NotFoundException(`Auto con id ${id} no ha sido encontrado`);
        }
        return car;
    }

    createCar(createCarDTO: CreateCarDto){

        const car: Car = {
            id      : uuid(),
            ...createCarDTO
        }
        this.cars.push(car)
        return car;
    }

    update(id: string, updateCarDTO: UpdateCarDto){

        let carDB = this.findOneByID(id)
        // if(updateCarDTO.id && updateCarDTO.id !== id){
        //     throw  new BadRequestException(`el carro con id ${id} no ha sido encontrado o es inválido`)
        // }
        this.cars.map(
             car => {
                if(car.id === id){
                    carDB = {
                        ...carDB,
                        ...updateCarDTO,
                        id,
                    }
                    return carDB;
                }
                return car;
            }
        )

        return carDB;
    }
}

import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'CR7'
        },
        {
            id: 3,
            brand: 'Nissan',
            model: 'Tiida'
        }
    ]

    findAll(){
        return this.cars
    }

    findOneByID(id: number){
        const car = this.cars.find(car => car.id === id);

        if (!car){
            throw new NotFoundException(`Auto con id ${id} no ha sido encontrado`);
        }
        return car;
    }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid'

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id : uuid(),
      name : 'Totoya',
      createAt : new Date().getTime()
    }
  ]

  create(createBrandDto: CreateBrandDto) {
    const {name} = createBrandDto;
    const brand : Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createAt: new Date().getTime()
    }
    return this.brands.push(brand);
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) throw new NotFoundException(`No se encontró el brand con el di ${id}`)
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandBD = this.findOne(id);
    this.brands = this.brands.map(brand => {
      if(brand.id === id){
        brandBD.updateAt = new Date().getTime();
        brand = {...brandBD, ...updateBrandDto}
        return brandBD;
      }
      return brand;
    });
    return brandBD;
  }

  remove(id: string) {
    this.brands.filter(brand => brand.id !== id);
    return
  }
}

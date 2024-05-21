import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: "Volvo",
        createAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: "Honda",
        createAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: "Nissan",
        createAt: new Date().getTime()
    },
];
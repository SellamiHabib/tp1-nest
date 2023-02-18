import { Module } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';
@Module({})
export class CommonModule {
    public generateUUID(): string {
        return uuidv4();
    }
}

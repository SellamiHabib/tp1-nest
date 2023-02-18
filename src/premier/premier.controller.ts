import {Controller, Delete, Get, Patch, Post, Put} from '@nestjs/common';

@Controller('premier')
export class PremierController {
    @Get()
    get(): string {
        return 'GET';
    }

    @Post()
    post(): string {
        return 'POST';
    }

    @Delete()
    delete(): string {
        return 'DELETE';
    }

    @Put()
    put(): string {
        return 'PUT';
    }

    @Patch()
    patch(): string {
        return 'PATCH';
    }
    
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CvService } from './cv.service';
import { AddCVDTO } from './DTOs/AddCVDTO';
import { UpdateCvDto } from './DTOs/UpdateCVDTO';

@Controller('cv')
export class CvController {
    constructor(private readonly cvService: CvService) {}

    @Post()
    create(@Body() createCvDto: AddCVDTO) {
        return this.cvService.create(createCvDto);
    }

    @Get()
    findAll() {
        return this.cvService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cvService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCvDto: UpdateCvDto) {
        return this.cvService.update(+id, updateCvDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cvService.remove(+id);
    }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkillService } from './skill.service';
import { AddSkillDTO } from './DTOs/AddSkillDTO';
import { UpdateSkillDto } from './DTOs/UpdateSkillDTO';

@Controller('skill')
export class SkillController {
    constructor(private readonly skillService: SkillService) {}

    @Post()
    create(@Body() createSkillDto: AddSkillDTO) {
        return this.skillService.create(createSkillDto);
    }

    @Get()
    findAll() {
        return this.skillService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.skillService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
        return this.skillService.update(+id, updateSkillDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.skillService.remove(+id);
    }
    @Patch('restore/:id')
    restore(@Param('id') id: string) {
        return this.skillService.restore(+id);
    }
}

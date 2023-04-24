import { PartialType } from '@nestjs/mapped-types';
import { AddCVDTO } from './AddCVDTO';
export class UpdateCvDto extends PartialType(AddCVDTO) {



}

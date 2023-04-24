import { PartialType } from '@nestjs/mapped-types';
import { AddUserDTO } from './AddUserDTO';


export class UpdateUserDto extends PartialType(AddUserDTO) {

}

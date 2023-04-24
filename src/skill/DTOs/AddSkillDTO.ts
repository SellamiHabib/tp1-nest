import { IsNotEmpty, IsString } from "class-validator";

export class AddSkillDTO {

    @IsString()
    @IsNotEmpty()
    designation: string;

}

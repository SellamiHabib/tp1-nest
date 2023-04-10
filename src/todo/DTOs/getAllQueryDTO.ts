import { IntersectionType } from "@nestjs/mapped-types";
import { Pagination } from '../../common/DTOs/paginationDTO';
import { SearchTodoDTO } from './searchTodoDTO';

export class GetAllQueryDTO extends IntersectionType(
    Pagination,
    SearchTodoDTO,
) {}

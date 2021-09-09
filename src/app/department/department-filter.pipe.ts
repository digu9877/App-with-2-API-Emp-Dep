
import { PipeTransform, Pipe } from '@angular/core';
import { Department } from './department.model';

@Pipe({
    name: 'Filter'
})
export class DepatmentFilterPipe implements PipeTransform {
    transform(department: Department[], filterTerm: string): Department[] {
        if (!department || !filterTerm) {
            return department;
        }

        return department.filter(department =>
          department.departmentname.toLowerCase().indexOf(filterTerm.toLowerCase()) !== -1);
    }
}

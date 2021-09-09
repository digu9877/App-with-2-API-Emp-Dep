import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee.model';

@Pipe({
  name: 'EFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employee: Employee[], filterTerm: string): Employee[] {
    if (!employee || !filterTerm) {
        return employee;
    }

    return employee.filter(employee =>
      employee.employeename.toLowerCase().indexOf(filterTerm.toLowerCase()) !== -1);
}

}

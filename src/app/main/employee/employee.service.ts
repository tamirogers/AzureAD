import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Employee, IEmployee } from './models';
import { Adal5HTTPService } from 'adal-angular5';

@Injectable()
export class EmployeeService {
  constructor(
    private http: Adal5HTTPService
  ) {}
  public getEmployees(): Observable<Array<IEmployee>> {
    return this.http.get('${environment.apiUrl}Employee', undefined)
    .map(response => {
      const tmp = <IEmployee[]>response.json();
        return tmp.map(e => new Employee(e));
    });
  }
}

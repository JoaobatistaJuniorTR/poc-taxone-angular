import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  generateData = (size: number = 5): any[] => {
    const a = [];
    const product = [
      { id: '01', label: 'Antitrust' },
      { id: '02', label: 'Bankruptcy and restructuring' },
      { id: '03', label: 'Capital markets and corporate governance' },
      { id: '04', label: 'Commercial transactions' },
      { id: '05', label: 'Corporate and M&A' },
      { id: '06', label: 'Employee benefits and executive compensation' },
      { id: '07', label: 'Finance' },
      { id: '08', label: 'Intellectual property and technology' },
      { id: '09', label: 'Labor and employment' },
      { id: '10', label: 'Litigation' },
      { id: '11', label: 'Real estate' },
      { id: '12', label: 'Trusts and estates' },
    ];
    for (let i = 0; i < size; i += 1) {
      a.push(product[i]);
    }
    return a;
  };
}

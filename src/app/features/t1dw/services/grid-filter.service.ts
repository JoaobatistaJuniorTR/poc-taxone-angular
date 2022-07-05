import { Injectable } from '@angular/core';
import { QueryOperator } from '../enum/query-operator.enum';
import GridFilterConditional from '../model/grid-filter-conditional.model';
import GridFilter from '../model/grid-filter.model';

@Injectable({
  providedIn: 'root',
})
export class GridFilterService {
  public parseFilter = (filterWrapper: string): GridFilter[] => {
    const gridFilterList: GridFilter[] = [];

    const filterDefinition: any = JSON.parse(filterWrapper);

    filterDefinition.filters.forEach((filter: any) => {
      const gridFilter: GridFilter = new GridFilter();
      gridFilter.column = filter.binding;
      gridFilter.operatorBetweenConditions = filter.and ? QueryOperator.AND : QueryOperator.OR;

      if (filter.condition1.value) {
        gridFilter.firstCondition = new GridFilterConditional(filter.condition1.operator, filter.condition1.value);

        if (filter.condition2.value) {
          gridFilter.secondCondition = new GridFilterConditional(filter.condition2.operator, filter.condition2.value);
        }
      }

      if (gridFilter.firstCondition !== undefined || gridFilter.secondCondition !== undefined) {
        gridFilterList.push(gridFilter);
      }
    });

    return gridFilterList;
  };
}

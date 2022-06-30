import { QueryOperator } from '../enum/query-operator.enum';
import GridFilterConditional from './grid-filter-conditional.model';

export default class GridFilter {
  public column?: string;

  public operatorBetweenConditions?: QueryOperator;

  public firstCondition?: GridFilterConditional;

  public secondCondition?: GridFilterConditional;

  constructor(
    column?: string,
    operatorBetweenConditions?: QueryOperator,
    firstCondition?: GridFilterConditional,
    secondCondition?: GridFilterConditional
  ) {
    this.column = column;
    this.operatorBetweenConditions = operatorBetweenConditions;
    this.firstCondition = firstCondition;
    this.secondCondition = secondCondition;
  }
}

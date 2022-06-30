import { OperatorType } from '../enum/operator-type.enum';

export default class GridFilterConditional {
  public operator?: OperatorType;

  public value?: string;

  constructor(operator?: OperatorType, value?: string) {
    this.operator = operator;
    this.value = value;
  }
}

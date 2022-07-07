export default class GridData {
  public column: string;
  public headerLabel: string;
  public columnType: string;
  public columnWidth: string;

  constructor(column: string, headerLabel: string, columnType?: string, columnWidth?: string) {
    this.column = column;
    this.headerLabel = headerLabel;
    this.columnType = columnType || '';
    this.columnWidth = columnWidth || '120px';
  }
}

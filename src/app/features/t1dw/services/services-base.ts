export abstract class ServiceBase {
  protected httpHeaders: any;

  constructor() {
    this.httpHeaders = {
      headers: {
        ContentType: 'application/json',
      },
    };
  }

  protected buildJsonDate = (date: any): string => {
    if (date instanceof Date) {
      return date.toJSON();
    }
    return date;
  };
}

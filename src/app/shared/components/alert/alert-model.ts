export enum EnumAlert {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

export class Alert {
  id: string;

  type: EnumAlert;

  message: string;

  timeout: number = 2500;

  closeable: boolean = true;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}

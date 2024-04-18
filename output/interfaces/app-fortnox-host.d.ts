export namespace AppFortnoxHost {
  export { Context };
}

export class Context {
  getStorage(key: string): string;
  setStorage(key: string, value: string): void;
  getInput(): string;
  getConnection(): string;
}

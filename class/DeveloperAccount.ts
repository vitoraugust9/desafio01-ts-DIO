import { DioAccount } from "./DioAccount";
export class DeveloperAccount extends DioAccount {
  private doc_id: number;
  constructor(doc_id: number, username: string) {
    super(username);
    this.doc_id = doc_id;
  }

  deposit(value: number): string | boolean {
    if (this.validateStatus()) {
      value += 10;
      super.deposit(value);

      return `Valor de R$${value.toFixed(2)} adicionado a conta corretamente`;
    } else {
      return false;
    }
  }
}

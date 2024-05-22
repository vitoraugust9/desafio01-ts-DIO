import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  private debtWithBank: number;
  constructor(name: string) {
    super(name);
    this.debtWithBank = 0;
  }

  getLoan(value: number): string | boolean {
    if (this.validateStatus()) {
      this.debtWithBank += value * 1.1;
      this.deposit(value);
      return `Empréstimo no valor de R$ ${value.toFixed(
        2
      )} realizado corretamente`;
    } else {
      return false;
    }
  }
}

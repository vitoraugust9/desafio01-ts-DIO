export abstract class DioAccount implements DioAccount {
  private readonly accountNumber: number;
  private username: string;
  private status: boolean;
  private balance: number;

  constructor(username: string) {
    this.accountNumber = Math.floor(Math.random() * 1000);
    this.username = username;
    this.status = true;
    this.balance = 0;
  }

  validateStatus(): boolean {
    if (this.status) {
      return this.status;
    }
    throw new Error("Conta inválida");
  }

  deposit(value: number): string | boolean {
    if (this.validateStatus()) {
      this.balance += value;

      return `Valor de R$${value.toFixed(2)} adicionado a conta corretamente`;
    }
    return false;
  }
  getBalance(): number | boolean {
    if (this.validateStatus()) {
      return this.balance;
    }
    return false;
  }

  withdraw(value: number): string | boolean {
    if (this.validateStatus() && this.balance >= value) {
      this.balance -= value;

      return `Valor de R$${value.toFixed(2)} sacado corretamente`;
    }
    throw new Error(
      `${this.username}, esse valor é maior que o saldo da sua conta`
    );
  }
}

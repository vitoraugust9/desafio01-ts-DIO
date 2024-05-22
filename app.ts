import { DeveloperAccount } from "./class/DeveloperAccount";
import { CompanyAccount } from "./class/CompanyAccount";

const developerAccount: DeveloperAccount = new DeveloperAccount(
  12345678900,
  "Vitor Augusto"
);

developerAccount.deposit(1000);

console.log(developerAccount.getBalance());

console.log(developerAccount.withdraw(1000));

console.log(developerAccount.getBalance());

const companyAccount: CompanyAccount = new CompanyAccount("CodingHouse");

companyAccount.deposit(1000);

console.log(companyAccount.getBalance());

console.log(companyAccount.withdraw(1000));

console.log(companyAccount.getBalance());

console.log(companyAccount.getLoan(2000));

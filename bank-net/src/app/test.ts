import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace test{
   export class Account extends Asset {
      accountId: string;
      owner: Customer;
      balance: number;
   }
   export class Customer extends Participant {
      customerId: string;
      firstName: string;
      lastName: string;
   }
   export class AccountTransfer extends Transaction {
      from: Account;
      to: Account;
      amount: number;
   }
// }

import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private detail: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes ${this.amount} for ${this.detail}`;
  }
}

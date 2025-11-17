import { EntryHall } from "./entry_hall.ts";

export class Bathroom {
  readonly visitorName: string;

  constructor(visitorName: string) {
    this.visitorName = visitorName;
    console.log(`Návštěvník ${visitorName} vstoupil na toalety.`);
  }

  washHands(): this {
    console.log(`Návštěvník ${this.visitorName} si umyl/a ruce.`);
    return this;
  }

  returnToEntryHall() {
    console.log(`Návštěvník ${this.visitorName} se vrací do vstupní haly.`);
    return new EntryHall(this.visitorName);
  }
}

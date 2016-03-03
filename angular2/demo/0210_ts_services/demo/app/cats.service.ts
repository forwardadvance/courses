export class CatsService {
  cats
  constructor() {
    this.cats = [
      { name: "Danger Moog" },
      { name: "Pippa T. Floof" },
      { name: "Sniff Weasel" }
    ]
  }
  get() {
      return this.cats;
  }
}

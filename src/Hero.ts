const Rank = require("./Rank");

class Hero extends Rank {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

}

module.exports = Hero;
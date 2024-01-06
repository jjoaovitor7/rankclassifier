class Hero {
  private name: string;
  private winBalance: number;

  constructor(name: string, winBalance = 0) {
    this.name = name;
    this.winBalance = winBalance;
  }

  setName(name: string): void {
    this.name = name;
  }

  setWinBalance(winBalance: number) {
    this.winBalance = winBalance;
  }

  getName(): string {
    return this.name;
  }

  getWinBalance() {
    return this.winBalance;
  }
}

module.exports = Hero;
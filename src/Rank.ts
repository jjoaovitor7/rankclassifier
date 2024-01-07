const RankTypes = require("./RankTypes");

class Rank {
  public rank: InstanceType<typeof RankTypes>;
  private levelRank: string = "";
  private winBalance: number;

  constructor(name: string, winBalance = 0) {
    this.rank = {
      "Ferro": [0, 10],
      "Bronze": [11, 20],
      "Prata": [21, 50],
      "Ouro": [51, 80],
      "Diamante": [81, 90],
      "Lendário": [91, 100],
      "Imortal": [101, Number.MAX_SAFE_INTEGER],
    };
    this.winBalance = winBalance;
  }

  checkRange(toCheck: number, start: number, end: number): boolean {
    return toCheck >= start && toCheck <= end;
  }

  setWinBalance(winBalance: number) {
    this.winBalance = winBalance;
  }

  setRank(winAmount: number, lostAmount: number): void {
    this.setWinBalance(winAmount);
    const _diff = winAmount - lostAmount;

    Object.keys(this.rank).forEach((i) => {
      if (this.checkRange(_diff, this.rank[i as keyof InstanceType<typeof RankTypes>][0], this.rank[i as keyof InstanceType<typeof RankTypes>][1])) {
        this.levelRank = i;
      }
    });
  }

  getWinBalance() {
    return this.winBalance;
  }

  getRank(): string {
    return this.levelRank;
  }
}

module.exports = Rank;
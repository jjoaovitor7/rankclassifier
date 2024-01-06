const Hero = require("./src/Hero");
const Rank = require("./src/Rank");

let TheRank: InstanceType<typeof Rank>;

(async () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const name = await new Promise(resolve => {
    readline.question("Favor, inserir o nome do Aventureiro:\n", resolve);
  });

  TheRank = new Rank(name);
  readline.close();

  const r1 = Math.floor(Math.random() * 128);
  const r2 = Math.floor(Math.random() * 128);

  if (r1 > r2) {
    TheRank.setRank(r1, r2);
  } else {
    TheRank.setRank(r2, r1);
  }

  // ANSI Escape Codes
  console.log(`O Herói tem de saldo de\x1b[1;32m **${TheRank.getWinBalance()}**\x1b[1;37m está no nível de \x1b[1;32m**${TheRank.getRank()}**\x1b[1;37m`);
})();

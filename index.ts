const Hero = require("./src/Hero");

let TheHero: InstanceType<typeof Hero>;

(async () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const name = await new Promise(resolve => {
    readline.question("Favor, inserir o nome do Aventureiro:\n", resolve);
  });

  TheHero = new Hero(name);
  readline.close();

  const r1 = Math.floor(Math.random() * 128);
  const r2 = Math.floor(Math.random() * 128);

  if (r1 > r2) {
    TheHero.setRank(r1, r2);
  } else {
    TheHero.setRank(r2, r1);
  }

  // ANSI Escape Codes
  console.log(`O Herói tem de saldo de\x1b[1;32m **${TheHero.getWinBalance()}**\x1b[1;37m está no nível de \x1b[1;32m**${TheHero.getRank()}**\x1b[1;37m`);
})();

let rockStar = new Map([
  ["artist", "Rolling Stones"],
  ["song", "Angie"],
  ["album", "Goats Head Soup"],
  ["singer", "Mick Jagger"],
]);

let newRock = new Map([...rockStar].filter(([key, value]) => key[0] > "a"));
console.log(newRock);
module.exports = { rockStar, newRock };

function domainGenerator() {
  let pronoum = ["The", "Ours", "My", "Yours", "Her", "His"];

  let adj = [
    "Big",
    "Small",
    "Large",
    "Medium",
    "Inteligent",
    "Cute",
    "Great",
    "Amazing"
  ];

  let noun = [
    "Duck",
    "Dog",
    "Cat",
    "Lion",
    "Mouse",
    "Driver",
    "Killer",
    "Dolphin",
    "Elephant",
    "Fly",
    "Racoon"
  ];

  let generator = [];

  for (let i = 0; i < pronoum.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        generator.push(pronoum[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  return generator;
}

// eslint-disable-next-line no-console
console.log(domainGenerator());

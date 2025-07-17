function minYearsToSurpass(aliceInitial, bobBonus, aliceRate, bobRate) {
  if (bobBonus > aliceInitial) {
    return 0;
  }

  if (bobRate <= aliceRate) {
    return -1;
  }

  const numerator = Math.log(aliceInitial / bobBonus);
  const denominator = Math.log((1 + bobRate) / (1 + aliceRate));

  const years = numerator / denominator;

  return years > 0 ? Math.ceil(years) : -1;
}

console.log(minYearsToSurpass(1000, 800, 0.05, 0.08));

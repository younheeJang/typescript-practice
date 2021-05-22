interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `${this.name}`;
  }
};

const drink1 = {
  color: 'brown',
  carbonated: true,
  sugar: 0,
  summary(): string {
    return `${this.sugar}`;
  }
};
const printSummary = (item: Reportable): void => {
  console.log(`${item.summary()}`);
};

printSummary(oldCivic);
printSummary(drink1);

export class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}

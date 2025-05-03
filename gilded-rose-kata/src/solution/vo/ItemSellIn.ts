export class ItemSellIn {
    private readonly value: number;

    constructor(value: number) {
        this.value = value;
    }

    decrease(): ItemSellIn {
        return new ItemSellIn(this.value - 1);
    }

    getValue(): number {
        return this.value;
    }

    isLessThan(days: number): boolean {
        return this.value < days;
    }

    toString(): string {
        return `${this.value}`;
    }
}
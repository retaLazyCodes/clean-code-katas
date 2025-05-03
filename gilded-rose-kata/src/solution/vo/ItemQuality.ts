export class ItemQuality {
    private readonly value: number;

    private readonly MAX_QUALITY: number = 50;
    private readonly MIN_QUALITY: number = 0;

    constructor(value: number) {
        this.value = value;
    }

    increase(): ItemQuality {
        return new ItemQuality(Math.min(this.value + 1, this.MAX_QUALITY));
    }

    decrease(): ItemQuality {
        return new ItemQuality(Math.max(this.value - 1, this.MIN_QUALITY));
    }

    reset(): ItemQuality {
        return new ItemQuality(0);
    }

    getValue(): number {
        return this.value;
    }

    canDecrease(): boolean {
        return this.value > this.MIN_QUALITY;
    }

    toString(): string {
        return `${this.value}`;
    }
}

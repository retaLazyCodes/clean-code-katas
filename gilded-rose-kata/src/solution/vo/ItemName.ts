export class ItemName {
    private readonly value: string;

    static readonly AGED_BRIE: string = 'Aged Brie';
    static readonly BACKSTAGE_PASSES: string = 'Backstage passes to a TAFKAL80ETC concert';
    static readonly SULFURAS: string = 'Sulfuras, Hand of Ragnaros';
    static readonly CONJURED: string = 'Conjured Mana Cake';

    constructor(value: string) {
        this.value = value;
    }

    isAgedBrie(): boolean {
        return this.equals(ItemName.AGED_BRIE);
    }

    isBackstagePasses(): boolean {
        return this.equals(ItemName.BACKSTAGE_PASSES);
    }

    isSulfuras(): boolean {
        return this.equals(ItemName.SULFURAS);
    }

    isConjured(): boolean {
        return this.equals(ItemName.CONJURED);
    }

    equals(other: string): boolean {
        return this.value === other;
    }

    toString(): string {
        return `${this.value}`;
    }
}

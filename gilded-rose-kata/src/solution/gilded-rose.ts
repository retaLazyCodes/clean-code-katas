export class Item {
    public name: string;
    public sellIn: number;
    public quality: number;

    public constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export abstract class UpdatableItem extends Item {
    static readonly MAX_QUALITY: number = 50;
    static readonly MIN_QUALITY: number = 0;

    constructor(item: Item) {
        super(item.name, item.sellIn, item.quality);
    }

    abstract update(): void;

    protected decreaseSellIn(): void {
        this.sellIn -= 1;
    }

    protected increaseQuality(): void {
        if (this.quality < UpdatableItem.MAX_QUALITY) {
            this.quality +=1;
        }
    }

    protected decreaseQuality(): void {
        if (this.quality > UpdatableItem.MIN_QUALITY) {
            this.quality -= 1;
        }
    }

    protected resetQuality(): void {
        this.quality = 0;
    }
}

export class UpdatableItemFactory {
    static readonly AGED_BRIE: string = "Aged Brie";
    static readonly BACKSTAGE_PASSES: string = "Backstage passes to a TAFKAL80ETC concert";
    static readonly SULFURAS: string = "Sulfuras, Hand of Ragnaros";

    public static getItem( item: Item): UpdatableItem {
        switch (item.name) {
            case UpdatableItemFactory.AGED_BRIE:
                return new AgedBrie(item);
            case UpdatableItemFactory.BACKSTAGE_PASSES:
                return new BackstagePasses(item);
            case UpdatableItemFactory.SULFURAS:
                return new Sulfuras(item);
            default:
                return new NormalItem(item);
        }
    }
}


export class NormalItem extends UpdatableItem {
    private DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD: number = 0;

    constructor(item: Item) {
        super(item);
    }

    override update(): void {
        super.decreaseSellIn();
        super.decreaseQuality();

        if (this.sellIn < this.DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD) {
            super.decreaseQuality();
        }
    }
}

export class AgedBrie extends UpdatableItem {
    private DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD: number = 0;

    constructor(item: Item) {
        super(item);
    }

    update(): void {
        super.decreaseSellIn();
        super.increaseQuality();

        if (this.sellIn < this.DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD) {
            super.increaseQuality();
        }
    }
}

export class Sulfuras extends UpdatableItem {
    constructor(item: Item) {
        super(item);
    }

    update(): void {
        return;
    }
}

export class BackstagePasses extends UpdatableItem {
    private DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD: number = 10;
    private TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD: number = 5;
    private QUALITY_RESET_SELL_IN_THRESHOLD: number = 0;

    constructor(item: Item) {
        super(item);
    }

    update(): void {
        super.decreaseSellIn();
        super.increaseQuality();

        if (this.sellIn < this.DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD) {
            super.increaseQuality();
        }
        if (this.sellIn < this.TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD) {
            super.increaseQuality();
        }
        if (this.sellIn <= this.QUALITY_RESET_SELL_IN_THRESHOLD) {
            super.resetQuality();
        }
    }
}

export class GildedRose {

    updateQuality(items = [] as Array<UpdatableItem>) {
        items.forEach((item: UpdatableItem) => item.update());
    }
}

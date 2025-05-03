import {ItemName, ItemQuality, ItemSellIn} from "../vo";

export abstract class Item {
    public name: ItemName;
    public sellIn: ItemSellIn;
    public quality: ItemQuality;

    public constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
        this.name =  name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    abstract update(): void;

    protected decreaseSellIn(): void {
        this.sellIn = this.sellIn.decrease();
    }

    protected hasToBeSoldInLessThan(days: number): boolean {
        return this.sellIn.isLessThan(days);
    }

    protected increaseQuality(): void {
        this.quality = this.quality.increase();
    }

    protected decreaseQuality(): void {
        this.quality = this.quality.decrease();
    }

    protected resetQuality(): void {
        this.quality = this.quality.reset();
    }

    protected canDecreaseQuality() {
        return this.quality.canDecrease();
    }

    public toString() {
        return this.name + ", " + this.sellIn + ", " + this.quality;
    }
}
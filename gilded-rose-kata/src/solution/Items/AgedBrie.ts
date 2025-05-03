import {Item} from "./Item";
import {ItemName, ItemQuality, ItemSellIn} from "../vo";

export class AgedBrie extends Item {
    private DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD: number = 0;

    public constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
        super(name, sellIn, quality);
    }

    override update(): void {
        super.decreaseSellIn();
        super.increaseQuality();

        if (this.hasToBeSoldInLessThan(this.DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD)) {
            super.increaseQuality();
        }
    }
}


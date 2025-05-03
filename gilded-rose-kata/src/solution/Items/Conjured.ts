import { Item } from './Item';
import { ItemName, ItemQuality, ItemSellIn } from '../vo';

export class Conjured extends Item {
    private readonly DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD: number = 0;

    public constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
        super(name, sellIn, quality);
    }

    override update(): void {
        super.decreaseSellIn();
        this.decreaseQuality();

        if (this.hasToBeSoldInLessThan(this.DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD)) {
            this.decreaseQuality();
        }
    }

    override decreaseQuality(): void {
        if (super.canDecreaseQuality()) {
            super.decreaseQuality();
            super.decreaseQuality();
        }
    }
}

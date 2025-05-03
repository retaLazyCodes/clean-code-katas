import { Item } from './Item';
import { ItemName, ItemQuality, ItemSellIn } from '../vo';

export class BackstagePasses extends Item {
    private readonly DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD: number = 10;
    private readonly TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD: number = 5;
    private readonly QUALITY_RESET_SELL_IN_THRESHOLD: number = 0;

    public constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
        super(name, sellIn, quality);
    }

    override update(): void {
        super.decreaseSellIn();
        super.increaseQuality();

        if (this.hasToBeSoldInLessThan(this.DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD)) {
            super.increaseQuality();
        }
        if (this.hasToBeSoldInLessThan(this.TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD)) {
            super.increaseQuality();
        }
        if (this.hasToBeSoldInLessThan(this.QUALITY_RESET_SELL_IN_THRESHOLD)) {
            super.resetQuality();
        }
    }
}

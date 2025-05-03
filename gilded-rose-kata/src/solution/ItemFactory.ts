import {
    Item,
    StandardItem,
    AgedBrie,
    BackstagePasses,
    Sulfuras,
    Conjured
} from './Items';

import {
    ItemName,
    ItemSellIn,
    ItemQuality
} from './vo';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ItemFactory {
    public static basedOn(rawName: string, rawSellIn: number, rawQuality: number): Item {
        const name = new ItemName(rawName);
        const sellIn = new ItemSellIn(rawSellIn);
        const quality = new ItemQuality(rawQuality);

        if (name.isAgedBrie()) return new AgedBrie(name, sellIn, quality);
        if (name.isBackstagePasses()) return new BackstagePasses(name, sellIn, quality);
        if (name.isSulfuras()) return new Sulfuras(name, sellIn, quality);
        if (name.isConjured()) return new Conjured(name, sellIn, quality);

        return new StandardItem(name, sellIn, quality);
    }
}

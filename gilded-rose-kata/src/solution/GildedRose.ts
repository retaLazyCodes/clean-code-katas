import { Item } from './Items';

export class GildedRose {
    updateQuality(items = [] as Item[]): void {
        items.forEach((item: Item) => item.update());
    }
}

import {Item} from "./Items";

export class GildedRose {

    updateQuality(items = [] as Array<Item>) {
        items.forEach((item: Item) => item.update());
    }
}
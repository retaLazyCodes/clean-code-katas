import {Item} from "./Item";
import {ItemName, ItemQuality, ItemSellIn} from "../vo";

export class Sulfuras extends Item {
    public constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
        super(name, sellIn, quality);
    }

    override update(): void {
        return;
    }
}
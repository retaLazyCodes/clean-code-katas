import { Item } from './Items';
import { ItemFactory } from './ItemFactory';
import { GildedRose } from './GildedRose';

const items: Item[] = [
    ItemFactory.basedOn('+5 Dexterity Vest', 10, 20),
    ItemFactory.basedOn('Aged Brie', 2, 0),
    ItemFactory.basedOn('Elixir of the Mongoose', 5, 7),
    ItemFactory.basedOn('Sulfuras, Hand of Ragnaros', 0, 80),
    ItemFactory.basedOn('Sulfuras, Hand of Ragnaros', -1, 80),
    ItemFactory.basedOn('Backstage passes to a TAFKAL80ETC concert', 15, 20),
    ItemFactory.basedOn('Backstage passes to a TAFKAL80ETC concert', 10, 49),
    ItemFactory.basedOn('Backstage passes to a TAFKAL80ETC concert', 5, 49),
    ItemFactory.basedOn('Conjured Mana Cake', 3, 6),
];

const app = new GildedRose();

let days = 2;
if (process.argv.length > 2) {
    days = parseInt(process.argv[2]) + 1;
}

for (let i = 0; i < days; i++) {
    console.log(`-------- day ${i} --------`);
    console.log('name, sellIn, quality');
    for (const item of items) {
        console.log(item.toString());
    }
    console.log();
    app.updateQuality(items);
}

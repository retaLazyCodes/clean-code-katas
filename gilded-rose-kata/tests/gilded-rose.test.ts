import { Item, GildedRose } from '../src/before/gilded-rose';

describe('Gilded Rose', () => {
    describe('Normal Items', () => {
        it('should degrade sellIn and quality', () => {
            const item = new Item('Normal Item', 10, 20);
            const gildedRose = new GildedRose([item]);

            gildedRose.updateQuality();

            expect(item.sellIn).toBe(9);
            expect(item.quality).toBe(19);
        });

        it('should not allow quality to go below 0', () => {
            const item = new Item('Normal Item', 10, 0);
            const gildedRose = new GildedRose([item]);

            gildedRose.updateQuality();

            expect(item.quality).toBe(0);
        });

        it('should degrade quality twice as fast after sellIn passes', () => {
            const item = new Item('Normal Item', 0, 10);
            const gildedRose = new GildedRose([item]);

            gildedRose.updateQuality();

            expect(item.quality).toBe(8);
        });
    });

    describe('Aged Brie', () => {
        it('should increase quality over time', () => {
            const item = new Item('Aged Brie', 2, 0);
            const gildedRose = new GildedRose([item]);

            gildedRose.updateQuality();

            expect(item.sellIn).toBe(1);
            expect(item.quality).toBe(1);
        });

        it('should not allow quality to exceed 50', () => {
            const item = new Item('Aged Brie', 2, 50);
            const gildedRose = new GildedRose([item]);

            gildedRose.updateQuality();

            expect(item.quality).toBe(50);
        });

        it('should increase quality twice as fast after sellIn passes', () => {
            const item = new Item('Aged Brie', -1, 10);
            const gildedRose = new GildedRose([item]);

            gildedRose.updateQuality();

            expect(item.quality).toBe(12);
        });
    });

    describe('Sulfuras', () => {
        it('should not decrease sellIn or quality', () => {
            const item = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
            const gildedRose = new GildedRose([item]);

            gildedRose.updateQuality();

            expect(item.sellIn).toBe(0);
            expect(item.quality).toBe(80);
        });
    });

    describe('Backstage Passes', () => {
        it('increases quality by 1 when sellIn is greater than 10', () => {
            const item = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20);
            const gildedRose = new GildedRose([item]);

            gildedRose.updateQuality();

            expect(item.quality).toBe(21);
        });

        it('increases quality by 2 when sellIn is between 6 and 10 (inclusive)', () => {
            const item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
            const gildedRose = new GildedRose([item]);

            gildedRose.updateQuality();

            expect(item.quality).toBe(22);
        });

        it('increases quality by 3 when sellIn is between 1 and 5 (inclusive)', () => {
            const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
            const gildedRose = new GildedRose([item]);

            gildedRose.updateQuality();

            expect(item.quality).toBe(23);
        });

        it('drops quality to 0 when sellIn is 0 or less', () => {
            const item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);
            const gildedRose = new GildedRose([item]);

            gildedRose.updateQuality();

            expect(item.quality).toBe(0);
        });

        it('never increases quality above 50', () => {
            const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49);
            const gildedRose = new GildedRose([item]);

            gildedRose.updateQuality();

            expect(item.quality).toBeLessThanOrEqual(50);
        });
    });
});

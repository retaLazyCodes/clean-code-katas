import {GildedRose} from "../src/solution/GildedRose";
import {ItemFactory} from "../src/solution/ItemFactory";

describe('Gilded Rose', () => {

  describe('Normal Items', () => {
    it('should degrade sellIn and quality', () => {
      const normalItem = ItemFactory.basedOn('Normal Item', 10, 20);
      const gildedRose = new GildedRose()

      gildedRose.updateQuality([normalItem])

      expect(normalItem.sellIn.getValue()).toBe(9)
      expect(normalItem.quality.getValue()).toBe(19)
    })

    it('should not allow quality to go below 0', () => {
      const normalItem = ItemFactory.basedOn('Normal Item', 10, 0);
      const gildedRose = new GildedRose()

      gildedRose.updateQuality([normalItem])

      expect(normalItem.quality.getValue()).toBe(0)
    })

    it('should degrade quality twice as fast after sellIn passes', () => {
      const normalItem = ItemFactory.basedOn('Normal Item', 0, 10);
      const gildedRose = new GildedRose()

      gildedRose.updateQuality([normalItem])

      expect(normalItem.quality.getValue()).toBe(8)
    })
  })

  describe('Aged Brie', () => {
    it('should increase quality over time', () => {
      const agedBrie = ItemFactory.basedOn('Aged Brie', 2, 0);
      const gildedRose = new GildedRose()

      gildedRose.updateQuality([agedBrie])

      expect(agedBrie.sellIn.getValue()).toBe(1)
      expect(agedBrie.quality.getValue()).toBe(1)
    })

    it('should not allow quality to exceed 50', () => {
      const agedBrie = ItemFactory.basedOn('Aged Brie', 2, 50);
      const gildedRose = new GildedRose();

      gildedRose.updateQuality([agedBrie]);

      expect(agedBrie.quality.getValue()).toBe(50)
    })

    it('should increase quality twice as fast after sellIn passes', () => {
      const agedBrie = ItemFactory.basedOn('Aged Brie', -1, 10);
      const gildedRose = new GildedRose();

      gildedRose.updateQuality([agedBrie]);

      expect(agedBrie.quality.getValue()).toBe(12)
    })
  })

  describe('Sulfuras', () => {
    it('should not decrease sellIn or quality', () => {
      const sulfuras = ItemFactory.basedOn('Sulfuras, Hand of Ragnaros', 0, 80);
      const gildedRose = new GildedRose()

      gildedRose.updateQuality([sulfuras])

      expect(sulfuras.sellIn.getValue()).toBe(0)
      expect(sulfuras.quality.getValue()).toBe(80)
    })
  })

  describe('Backstage Passes', () => {
    it('increases quality by 1 when sellIn is greater than 10', () => {
        const backstagePasses = ItemFactory.basedOn('Backstage passes to a TAFKAL80ETC concert', 15, 20);
        const gildedRose = new GildedRose()

        gildedRose.updateQuality([backstagePasses])

        expect(backstagePasses.quality.getValue()).toBe(21)
    })

    it('increases quality by 2 when sellIn is between 6 and 10 (inclusive)', () => {
        const backstagePasses = ItemFactory.basedOn('Backstage passes to a TAFKAL80ETC concert', 10, 20)
        const gildedRose = new GildedRose()

        gildedRose.updateQuality([backstagePasses])

        expect(backstagePasses.quality.getValue()).toBe(22)
    })

    it('increases quality by 3 when sellIn is between 1 and 5 (inclusive)', () => {
        const backstagePasses = ItemFactory.basedOn('Backstage passes to a TAFKAL80ETC concert', 5, 20)
        const gildedRose = new GildedRose()

        gildedRose.updateQuality([backstagePasses])

        expect(backstagePasses.quality.getValue()).toBe(23)
    })

    it('drops quality to 0 when sellIn is 0 or less', () => {
        const backstagePasses = ItemFactory.basedOn('Backstage passes to a TAFKAL80ETC concert', 0, 20)
        const gildedRose = new GildedRose()

        gildedRose.updateQuality([backstagePasses])

        expect(backstagePasses.quality.getValue()).toBe(0)
    })

    it('never increases quality above 50', () => {
        const backstagePasses = ItemFactory.basedOn('Backstage passes to a TAFKAL80ETC concert', 5, 49)
        const gildedRose = new GildedRose()

        gildedRose.updateQuality([backstagePasses])

        expect(backstagePasses.quality.getValue()).toBeLessThanOrEqual(50)
    })
  })

  describe('Conjured Items', () => {
    it('should degrade quality by 2 before sellIn date', () => {
      const conjuredItem = ItemFactory.basedOn('Conjured Mana Cake', 5, 10);
      const gildedRose = new GildedRose();

      gildedRose.updateQuality([conjuredItem]);

      expect(conjuredItem.quality.getValue()).toBe(8);
      expect(conjuredItem.sellIn.getValue()).toBe(4);
    });

    it('should degrade quality by 4 after sellIn date', () => {
      const conjuredItem = ItemFactory.basedOn('Conjured Mana Cake', 0, 10);
      const gildedRose = new GildedRose();

      gildedRose.updateQuality([conjuredItem]);

      expect(conjuredItem.quality.getValue()).toBe(6);
      expect(conjuredItem.sellIn.getValue()).toBe(-1);
    });

    it('should not reduce quality below 0', () => {
      const conjuredItem = ItemFactory.basedOn('Conjured Mana Cake', 0, 3);
      const gildedRose = new GildedRose();

      gildedRose.updateQuality([conjuredItem]);

      expect(conjuredItem.quality.getValue()).toBe(0);
      expect(conjuredItem.sellIn.getValue()).toBe(-1);
    });
  });

})

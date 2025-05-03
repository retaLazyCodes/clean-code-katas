import {
    Coffee,
    Tea,
    CoffeeWithMilk,
    TeaWithMilk,
    CoffeeWithMilkAndCream,
    HotChocolateWithCream,
    HotChocolate
} from '../src/before/beverage-prices';

describe('Beverages Pricing', () => {
    test('computes coffee price', () => {
        const coffee = new Coffee();
        expect(coffee.price()).toBeCloseTo(1.20, 3);
    });

    test('computes tea price', () => {
        const tea = new Tea();
        expect(tea.price()).toBeCloseTo(1.50, 3);
    });

    test('computes hot chocolate price', () => {
        const hotChocolate = new HotChocolate();
        expect(hotChocolate.price()).toBeCloseTo(1.45, 3);
    });

    test('computes tea with milk price', () => {
        const teaWithMilk = new TeaWithMilk();
        expect(teaWithMilk.price()).toBeCloseTo(1.60, 3);
    });

    test('computes coffee with milk price', () => {
        const coffeeWithMilk = new CoffeeWithMilk();
        expect(coffeeWithMilk.price()).toBeCloseTo(1.30, 3);
    });

    test('computes coffee with milk and cream price', () => {
        const coffeeWithMilkAndCream = new CoffeeWithMilkAndCream();
        expect(coffeeWithMilkAndCream.price()).toBeCloseTo(1.45, 3);
    });

    test('computes hot chocolate with cream price', () => {
        const hotChocolateWithCream = new HotChocolateWithCream();
        expect(hotChocolateWithCream.price()).toBeCloseTo(1.60, 3);
    });
});

export interface Beverage {
    price: () => number
}

export class Coffee implements Beverage {
    price(): number {
        return 1.2;
    }
}

export class CoffeeWithMilk extends Coffee {
    price(): number {
        return super.price() + 0.10;
    }
}

export class CoffeeWithMilkAndCream extends Coffee {
    price(): number {
        return super.price() + 0.25;
    }
}

export class HotChocolate implements Beverage {
    price(): number {
        return 1.45;
    }
}

export class HotChocolateWithCream extends HotChocolate {
    price(): number {
        return super.price() + 0.15;
    }
}

export class Tea implements Beverage {
    price(): number {
        return 1.5;
    }
}

export class TeaWithMilk extends Tea {
    price(): number {
        return super.price() + 0.10;
    }
}

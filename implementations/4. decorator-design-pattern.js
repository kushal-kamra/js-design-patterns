class BasePizza {
    constructor(cost) {
        this.cost = cost;
    }

    getCost() {
        throw new Error('Implement cost for BasePizza!');
    }
}

class Margherita extends BasePizza {
    constructor() {
        super(200);
    }

    getCost() {
        console.log('Inside Margherita');
        return this.cost;
    }
}

class BaseToppings {
    constructor(pizza) {
        this.pizza = pizza;
    }

    getCost() {
        throw new Error('Implement cost for BaseToppings');
    }
}

class ExtraCheese extends BaseToppings {
    constructor(pizza) {
        super(pizza);
    }

    getCost() {
        console.log('Inside ExtraCheese');
        return this.pizza.getCost() + 100;
    }
}

class ExtraOlives extends BaseToppings {
    constructor(pizza) {
        super(pizza);
    }

    getCost() {
        console.log('Inside ExtraOlives');
        return this.pizza.getCost() + 50;
    }
}

let pizza_1 = new Margherita();
// console.log(pizza_1);
// console.log(pizza_1.getCost());
pizza_1 = new ExtraCheese(pizza_1);
// console.log(pizza_1);
// console.log(pizza_1.getCost());
pizza_1 = new ExtraOlives(pizza_1);
// console.log(pizza_1);
console.log(pizza_1.getCost());
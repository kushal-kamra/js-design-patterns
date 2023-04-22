class NotificationAlertObserver {
    update() {
        throw new Error('Implement notification alert for observer update');
    }
}

class EmailNotificationAlertObserver extends NotificationAlertObserver{
    constructor(emailId, observable) {
        super();
        this.emailId = emailId;
        this.observable = observable;
    }

    sendEmail(emailId, msg) {
        console.log("email sent to", emailId, " message :", msg);
    }

    update() {
        this.sendEmail(this.emailId, `product is in stock qty ${this.observable.stock_count}, hurry up`);
    }
}

class SmsNotificationAlertObserver extends NotificationAlertObserver{
    constructor(number, observable) {
        super();
        this.number = number;
        this.observable = observable;
    }

    sendSms(number, msg) {
        console.log("sms sent to", number, " message :", msg);
    }

    update() {
        this.sendSms(this.number, `product is in stock qty ${this.observable.stock_count}, hurry up`);
    }
}

class StockObservable {
    add(observer) {
        throw new Error('Implement add observer!');
    }

    remove(func) {
        throw new Error('Implement remove observer!');
    }

    notifySubscribers() {
        throw new Error('Implement notify subscribers!');
    }

    addStockCount(stock) {
        throw new Error('Implement add stock count');
    }

    getStockCount() {
        throw new Error('Implement get stock count');
    }
}

class PhoneObservable extends StockObservable {
    constructor() {
        super();
        this.stock_count = 0;
        this.observer_list = [];
    }

    add(observer) {
        this.observer_list.push(observer);
    }

    remove(func) {
        this.observer_list = this.observer_list.filter((observer) => observer !== func);
    }

    notifySubscribers() {
        for (const observer of this.observer_list) {
            observer.update();
        }
    }

    addStockCount(stock) {
        if (this.stock_count === 0) {
            this.stock_count += stock;
            this.notifySubscribers();
        } else this.stock_count += stock;
    }

    getStockCount = () => this.stock_count;
}

let phone_observable = new PhoneObservable();

let observer1 = new EmailNotificationAlertObserver("xyz1@gmail.com", phone_observable);
let observer2 = new EmailNotificationAlertObserver("xyz2@gmail.com", phone_observable);
let observer3 = new SmsNotificationAlertObserver("9012345678", phone_observable);

phone_observable.add(observer1);
phone_observable.add(observer2);
phone_observable.add(observer3);

phone_observable.addStockCount(10);
phone_observable.addStockCount(1);
phone_observable.addStockCount(-11);
phone_observable.addStockCount(5);
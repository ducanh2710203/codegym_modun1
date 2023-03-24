class mobile {
    name ;
    battery = 100;
    status = false;
    message = "";
    inbox = [];
    outbox = [];

    constructor(name) {
        this.name = name
    }

    chechstatus() {
        return this.status
    }

    writeMessage(text) {
        this.decreaseBattery()
        this.message = text
    }

    turnOn() {
        this.status = true
    }

    turnoff() {
        this.status = false
    }

    changeBattery() {
        this.battery += 2
    }

    sendMessage(message,phone) {
        console.log(phone)
        this.decreaseBattery();
        this.outbox.push(message);
        phone.inbox.push(this.name + " : " + message)
    }

    getInbox() {
        this.decreaseBattery()
        return this.inbox
    }

    getoutbox() {
        this.decreaseBattery()
        return this.output
    }
    decreaseBattery(){
        if (this.battery>0){
            this.battery--
        }else {
            this.turnoff();
        }
    }


}



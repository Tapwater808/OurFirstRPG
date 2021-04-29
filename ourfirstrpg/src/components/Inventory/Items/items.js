class Item {
    constructor(nam, desc) {
        this.name = nam;
        this.description = desc;
    }
};

class Food extends Item {
    constructor(nme, stt) {
        super(nme);
        this.stats = stt;
    }
};

class Weapon extends Item {
    constructor(nme, dmg, stt) {
        super(nme, stt);
        this.damage = dmg;
    }
};
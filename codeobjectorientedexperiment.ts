
class Road implements RoadI {
    public type: "road" = "road";
    public val: roadOrCar = ".";
    public car: boolean = false;
    constructor(
        car?: boolean,
        wasJustCar?: boolean,
        val_arg?: roadOrCar,
    ) { }
    hasCar() {
        this.car = true;
        this.val = "C";
    }
    carJustleft() {
        this.car = false;
        this.val = ".";
    }
}

class Light implements LightI {
    public type: "light" = "light";
    public val: lightOrCar;
    public car: boolean = false;
    public count: number = 0;
    constructor(val: lightOrCar) {
        this.val = val;
    }
    hasCar() {
        this.car = true;
        this.val = "C";
    }

    updateLight() {
        if (this.count == 1 && this.val == "O") {
            this.count = 0;
            this.val = lightLookup["O"];
        }
        else if (this.count == 5 && this.val != "C") {
            this.count = 0;
            this.val = lightLookup[this.val];
        }
        this.count++;
        return {
            count: this.count,
            val: this.val
        }
    }
}

let lightchangetest = new Light("G"); //?

function lightsandcars(str: string, times: number) {
    const output = [];
    let arrayedFromString = str.split("") as inputStringPossibilities[];
    arrayedFromString.length; //?
    let outer = arrayedFromString.map((val) => {
        if (val === "C") {
            let r = new Road(true, false, "C");
            r.hasCar();
            return r;
        }
        if (val === ".") {
            return new Road();
        }
        if (val === "R") {
            return new Light("R");
        }
        if (val === "G") {
            return new Light("G");
        }
        if (val === "O") {
            return new Light("O");
        }
    });
    outer//?
    return outer;
}

let cartest = new Road(true, false, "C"); //?

console.log(lightsandcars("C.R.G", 5));

//tasks
// Car adinda class yaradin daxilinde brand(markasi : Toyata ornek) i olsun modeli year price color percent(faizi) olsun
// getDetail adinda func olsun masin haqqinda melumatlari logda gostersin
// faizi hesablayacaq function olsun yeni pricenin qiymetini goturub
//  verilen faize gore yeni qiymetini tapib menimsetsin priceye 
// 1 den cox Car dan istifade ederek masinlar yaradin
// SportsCar  adindan class yaradin ve car dan extend etsin
// sportCara da cardaki deyisenler elave olunsun elave olaraqda topSpeed elave olunsun
// toSpeed(masinin sureti)
// daxilinde getDetail adinda func olsun superden isdifade edib extend olunan detail melumatini
// goturun elave olaraq maksimum suretinide qeyd edin
// daxilinde incrementSpeed adinda metod olsun ve sureti 10% artirsin 
// butun functionlari cagirib logda gosterin masinin qiymeti sonra endirimli qiymeti
// masinin sureti artiriliqdan sonra sureti ve.s 
// Sual olduqda pls qrupa yazin , ugurlar :)

class Car {
    constructor(brand, model, year, price, color, percent) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.color = color;
        this.percent = percent;
    }
    getCarInfo() {
        return `Brand: ${this.brand} , Model: ${this.model} , Year: ${this.year} , Price: ${this.price} , Color: ${this.color} , Percent: ${this.percent}`;
    }
    calculatePerecent() {
        console.log("endirim tetbiq olundu!");
        this.price *= (100 - this.percent) / 100;

    }
}

class SportsCar extends Car {

    constructor(brand, model, year, price, color, percent, toSpeed, speedPercent) {
        super(brand, model, year, price, color, percent)
        this.toSpeed = toSpeed;
        this.speedPercent = speedPercent
    }
    getCarInfo() {
        console.log(super.getCarInfo(), "sureti" + this.tuSpeed);
    }
    incrementSpeed() {
        // let newSpeed = this.toSpeed * (100 - this.speedPercent) / 100;
        // this.toSpeed += this.toSpeed - newSpeed;
        // console.log(this.toSpeed);
        this.toSpeed = this.toSpeed + (this.toSpeed * this.speedPercent / 100)

    }
}

const sport1 = new SportsCar("Ferrari", "M123", 2020, 200000, "black", 10, 300, 15);
sport1.getCarInfo()
sport1.incrementSpeed()
sport1.getCarInfo()



// tworzymy klase

function Phone(brand, price, color, releaseDate) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.releaseDate = releaseDate;
}

Phone.prototype.printInfo = function() {
	console.log(this.brand + " " + this.price + "zł" + " " + this.color + " " + this.releaseDate)
}

var SamsungGalaxyS8 = new Phone("Samsung", 3199, "silver", 2017);
var iPhone6S = new Phone("Apple", 2899, "white", 2016);
var OnePlusOne = new Phone("HTC", 2799, "black", 2016);
var XperiaZ3 = new Phone("Sony", 2759, "space-gray", 2015);
var Nokia3310 = new Phone("Nokia", 100, "gray", 1999);
var g5 = new Phone("LG", 2399, "white", 2015);
var p10 = new Phone("Huawei", 2799, "gold", 2017);

SamsungGalaxyS8.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();
XperiaZ3.printInfo();
Nokia3310.printInfo();
g5.printInfo();
p10.printInfo();
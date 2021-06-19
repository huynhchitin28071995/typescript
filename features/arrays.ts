const carMaker = ["ford", "toyota", "chevy"];

const carMaker2: string[] = [];
const dates = [new Date(), new Date()];
const carByMake = [["f150"], ["corolla"], ["camaro"]];
const carByMake2: string[][] = [];

// help with inference when extracting values
const car3 = carMaker[2];
const myCar = carMaker.pop();

// prevent incompatible values
// carMaker.push(100); // does not work

//Help with map
carMaker.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates = [new Date(), "2020-10-19"];
importantDates.push("asdasd");
importantDates.push(new Date());

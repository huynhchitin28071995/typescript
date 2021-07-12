class Vehicle {
  //   public drive(): void {
  //     console.log("chugga chugga");
  //   }
  constructor(public color: string) {}
  protected honk(): void {
    console.log("Beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    //overiden
    console.log("VroomVroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("Blue");

// vehicle.drive();
// vehicle.honk();
const car = new Car(3, "Green");
car.startDrivingProcess();
// car.honk();
console.log(vehicle.color);
console.log(car.color);

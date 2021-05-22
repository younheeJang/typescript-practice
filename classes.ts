class Vehicle {
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}
  protected honk(): void {
    console.log('beeeep');
  }
}

class Car1 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('bureung-bureung');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car1 = new Car1(3, 'orange');
car1.startDrivingProcess();

const vehicle = new Vehicle('blue');
console.log(vehicle.color);

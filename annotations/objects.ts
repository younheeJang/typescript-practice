const profile = {
  name: 'curious',
  age: 999,
  coords: {
    lat: 0,
    lng: 6
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;

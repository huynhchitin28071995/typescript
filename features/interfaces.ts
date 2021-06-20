interface Vehicle {
  model: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  model: "civic",
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(
    `Name: ${vehicle.model}, year: ${vehicle.year}, broken: ${vehicle.broken}`
  );
};

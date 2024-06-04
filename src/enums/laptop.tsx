enum MakeOptions {
  Assembled = 'Assembled',
  Dell = 'Dell',
  HP = 'HP',
  Lenovo = 'Lenovo',
  Others = 'Others',
}

enum CityOptions {
  Hyderabad = 'Hyderabad',
  Bangalore = 'Bangalore',
  Chennai = 'Chennai',
  Mumbai = 'Mumbai',
  Others = 'Others',
}

enum OperatingSystem {
  Windows = 'Windows',
  Ubuntu = 'Ubuntu',
  Mac = 'Mac',
  Others = 'Others',
}

enum ProcessorOptions {
  Corei3 = 'Core i3',
  Corei5 = 'Core i5',
  Corei7 = 'Core i7',
  Corei9 = 'Core i9',
  M1 = 'M1',
  M2 = 'M2',
  DualCore = 'Dual Core',
  QuadCore = 'Quad Core',
  AMD_RYZEN = 'AMD RYZEN',
  Others = 'Others',
}

// Enum for RAM options
enum RAMOptions {
  GB4 = '4GB',
  GB8 = '8GB',
  GB16 = '16GB',
  GB32 = '32GB',
  GB64 = '64GB',
}

// Enum for Storage options
enum StorageOptions {
  GB64 = '64GB',
  GB128 = '128GB',
  GB256 = '256GB',
  GB500 = '500GB',
  TB1 = '1TB',
}

// Enum for Graphics options
enum GraphicsOptions {
  GB2 = '2GB',
  GB4 = '4GB',
  GB8 = '8GB',
  GB16 = '16GB',
  NA = 'NA',
}

// Enum for Status options
enum StatusOptions {
  Working = 'Working',
  NotWorking = 'Not Working',
}

export {
  MakeOptions,
  CityOptions,
  OperatingSystem,
  ProcessorOptions,
  RAMOptions,
  StorageOptions,
  GraphicsOptions,
  StatusOptions,
}

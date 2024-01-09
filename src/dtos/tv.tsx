import {
  MakeOptions,
  CityOptions,
  ProcessorOptions,
  RAMOptions,
  StorageOptions,
  GraphicsOptions,
  StatusOptions,
  OperatingSystem,
} from '../enums'
export interface tvFormData {
  make: MakeOptions
  city: CityOptions
  model: string
  tagID: string
  hodTag: string
  location: string
  serialNumber: string
  lan: string
  wifi: string
  processor: ProcessorOptions
  generation: string
  os: OperatingSystem
  osKey: string
  ScreenSize: string
  ram: RAMOptions
  storage: StorageOptions
  graphics: GraphicsOptions
  user: string
  status: StatusOptions
  remarks: string
  updatedBy: string
}

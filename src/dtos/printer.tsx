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
export interface printerFormData {
  make: MakeOptions
  city: CityOptions
  model: string
  tagid: string
  hodtag: string
  location: string
  serialnumber: string
  lan: string
  wifi: string
  processor: ProcessorOptions
  generation: string
  os: OperatingSystem
  osKey: string
  desktopinkjet: string
  ram: RAMOptions
  storage: StorageOptions
  graphics: GraphicsOptions
  user: string
  status: StatusOptions
  remarks: string
  updatedbyname: string
}

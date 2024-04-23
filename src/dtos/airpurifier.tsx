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
export interface airpurifierFormData {
  make: MakeOptions
  city: CityOptions
  model: string
  tagid: string
  hodtag: string
  location: string
  serialnumber: string
  macid_lan: string
  macid_wifi: string
  processor: ProcessorOptions
  generation: string
  os: OperatingSystem
  oskey: string
  hostname: string
  ram: RAMOptions
  storage: StorageOptions
  graphics: GraphicsOptions
  user: string
  status: StatusOptions
  remarks: string
}

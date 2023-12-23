#!/bin/bash

# Specify the path where you want to create the files
path="/Users/ch.sarun/Documents/MyCodes/Code/Projects/Inventory/client/src/dtos"

files=(
  "desktop.tsx" "laptop.tsx" "printer.tsx"
  "monitor.tsx" "tab.tsx" "keyboard.tsx"
  "mouse.tsx" "router.tsx" "airpurifier.tsx"
  "biometrix.tsx" "projector.tsx" "ups.tsx" "ac.tsx"
)

for file in "${files[@]}"
do
  echo "import {
  MakeOptions,
  CityOptions,
  ProcessorOptions,
  RAMOptions,
  StorageOptions,
  GraphicsOptions,
  StatusOptions,
  OperatingSystem,
} from '$path/enums';
export interface ${file%.tsx}FormData {
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
  hostname: string
  ram: RAMOptions
  storage: StorageOptions
  graphics: GraphicsOptions
  user: string
  status: StatusOptions
  remarks: string
  updatedBy: string
}" > "$path/$file"
done

# Create index.tsx file
index_content=""
for file in "${files[@]}"
do
  base_name=$(basename -- "$file")
  base_name_no_ext="${base_name%.tsx}"
  index_content+="export * from './$base_name_no_ext'\n"
done

echo "$index_content" > "$path/index.tsx"

#!/bin/bash

# Specify the path where you want to create the files
path="/Users/ch.sarun/Documents/MyCodes/Code/Projects/Inventory/client/src/enums"

files=(
  "desktop.tsx" "laptop.tsx" "printer.tsx"
  "monitor.tsx" "tab.tsx" "keyboard.tsx"
  "mouse.tsx" "router.tsx" "airpurifier.tsx"
  "biometrix.tsx" "projector.tsx" "ups.tsx" "ac.tsx"
)

content="
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
"

# Create enum files
for file in "${files[@]}"
do
  echo "$content" > "$path/$file"
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

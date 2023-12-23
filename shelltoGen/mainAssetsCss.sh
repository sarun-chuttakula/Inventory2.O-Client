#!/bin/bash

# Specify the path where you want to create the pages
path="/Users/ch.sarun/Documents/MyCodes/Code/Projects/Inventory/client/src/pages"

# Specify the list of files
files=(
  "desktop.tsx" "laptop.tsx" "printer.tsx"
  "monitor.tsx" "tab.tsx" "keyboard.tsx"
  "mouse.tsx" "router.tsx" "airpurifier.tsx"
  "biometrix.tsx" "projector.tsx" "ups.tsx" "ac.tsx"
)

# Loop through each file
for file in "${files[@]}"
do
  # Extract the file name without extension
  base_name_no_ext="${file%.tsx}"

  # Create the directory if it doesn't exist
  mkdir -p "$path/$base_name_no_ext"

  # Create the CSS file
  echo ".center-heading {
  text-align: center;
}

.custom-table {
  border: 1px solid white; /* White border color */
  width: 50%;
  height: 600px;
  margin: 0 auto; /* Center the table horizontally */
  background-color: DodgerBlue; /* Blue background color */
  color: white; /* White text color */
}

.custom-table td {
  background-color: DodgerBlue;
  border: 1px solid white;
  color: black;
}
" > "$path/$base_name_no_ext/$base_name_no_ext.css"
done

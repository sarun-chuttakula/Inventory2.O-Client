#!/bin/bash

# Check if directory path argument is provided
if [ $# -ne 1 ]; then
  echo "Usage: $0 <directory_path>"
  exit 1
fi

# Base API URL
BASE_API_URL='./api-resource'

# List of asset files
asset_files=(
  "desktop"
  "laptop"
  "printer"
  "monitor"
  "tab"
  "keyboard"
  "mouse"
  "router"
  "airpurifier"
  "biometrix"
  "projector"
  "ups"
  "ac"
)

# Directory path where files will be generated
directory_path="$1"

# Function to create asset files
create_asset_file() {
  local asset_name="$1"
  local capitalized_asset_name="$(tr '[:lower:]' '[:upper:]' <<< ${asset_name:0:1})${asset_name:1}"
  local file_name="${directory_path}/${asset_name}.ts"

  cat > "$file_name" <<EOF
import { BASE_API_URL } from './api-resource';

export const create${capitalized_asset_name} = async (token: string, data: any) => {
  try {
    const response = await fetch(\`\${BASE_API_URL}/${asset_name}\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: \`Bearer \${token}\`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export const get${capitalized_asset_name}s = async (token: string) => {
  try {
    const response = await fetch(\`\${BASE_API_URL}/${asset_name}\`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: \`Bearer \${token}\`,
      },
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export const get${capitalized_asset_name} = async (token: string, id: string) => {
  try {
    const response = await fetch(\`\${BASE_API_URL}/${asset_name}/\${id}\`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: \`Bearer \${token}\`,
      },
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export const update${capitalized_asset_name} = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(\`\${BASE_API_URL}/${asset_name}/\${id}\`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: \`Bearer \${token}\`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export const delete${capitalized_asset_name} = async (token: string, id: string) => {
  try {
    const response = await fetch(\`\${BASE_API_URL}/${asset_name}/\${id}\`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: \`Bearer \${token}\`,
      },
    });
    return response.json();
  } catch (error) {
    return error;
  }
};
EOF
}

# Create asset files
for asset in "${asset_files[@]}"; do
  create_asset_file "$asset"
done

echo "Asset files generated successfully in directory: $directory_path"

# shelltoGen % sh genapicalls.sh /Users/ch.sarun/Documents/MyCodes/Code/Projects/Inventory/client/src/api command to run
#!/usr/bin/env bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FRONTEND_DIR="${1:-${SCRIPT_DIR}/../frontend}"

set -ex

# Set color variables
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

pushd "${FRONTEND_DIR}"
echo "正在進入前端目錄: ${FRONTEND_DIR}"

# Check if Node.js is installed
echo -e "正在檢查 Node.js 是否已安裝..."
if ! command -v node &> /dev/null; then
    echo -e "${RED}錯誤: 未檢測到 Node.js${NC}"
    echo -e "${YELLOW}請安裝 Node.js 後再繼續。推薦使用 nvm 進行安裝：${NC}"
    echo -e "  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash"
    echo -e "  nvm install --lts"
    exit 1
else
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}Node.js 已安裝: ${NODE_VERSION}${NC}"
fi


# Check if Rush is installed
echo -e "正在檢查 Rush 是否已安裝..."
if ! command -v rush &> /dev/null; then
    echo -e "${YELLOW}未檢測到 Rush，正在爲您安裝...${NC}"
    npm i -g @microsoft/rush
else
    RUSH_VERSION=$(rush version)
    echo -e "${GREEN}Rush 已安裝: ${RUSH_VERSION}${NC}"
fi

echo -e "${GREEN}環境檢查完成！${NC}"

echo -e "${YELLOW}開始安裝依賴...${NC}"
rush update

echo -e "${GREEN}依賴安裝完成！${NC}"



# echo -e "${NC}"
# Echo -e "${GREEN} build complete! ${NC}"

popd
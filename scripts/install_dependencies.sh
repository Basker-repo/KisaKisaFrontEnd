#!/bin/bash 
cp * /opt/Kisa-kisa
cd /opt/Kisa-kisa
nvm install node
npm install yarn -g
npm install
yarn build

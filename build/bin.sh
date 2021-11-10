#!/bin/bash

## 一键打包所有 package

# 获取 yarn dev/build 类型
buildType=build
if [ -n "$1" ]; then  
  buildType=$1
fi

# 进入 package 目录
cd ./packages

# core 要第一个打包
cd ./core
yarn "$buildType"

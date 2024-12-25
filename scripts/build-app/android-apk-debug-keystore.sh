#!/bin/sh

echo "Building Android APK - debug keystore with version name $1 and version code $2"
cd ../../android
fastlane android build_apk_with_debug_keystore version_name:$1 version_code:$2

echo "Output: {root_folder}/android/app/build/outputs/apk/release/app-release.apk"

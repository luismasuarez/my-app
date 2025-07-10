#!/usr/bin/env bash
set -euo pipefail

# Variables pasadas al script o por defecto
KEYSTORE_FILE="${1:-android/app/keystore.jks}"
KEY_ALIAS="${2:-my-key-alias}"
STORE_PASS="${3:-}"
KEY_PASS="${4:-}"
BUILD_TYPE="${5:-release}"  # release o debug
BUILD_KIND="${6:-apk}"       # apk o aab

echo "🔑 Signing config:"
echo " keystore = $KEYSTORE_FILE"
echo " alias    = $KEY_ALIAS"
echo " build    = $BUILD_TYPE"
echo " output   = $BUILD_KIND"

cd android

# Limpiar y asegurar uso de ABI filters y signing configs
./gradlew clean

if [ "$BUILD_KIND" = "apk" ]; then
  ./gradlew assemble${BUILD_TYPE^} \
    -Pandroid.injected.signing.store.file="$KEYSTORE_FILE" \
    -Pandroid.injected.signing.store.password="$STORE_PASS" \
    -Pandroid.injected.signing.key.alias="$KEY_ALIAS" \
    -Pandroid.injected.signing.key.password="$KEY_PASS"
elif [ "$BUILD_KIND" = "aab" ]; then
  ./gradlew bundle${BUILD_TYPE^} \
    -Pandroid.injected.signing.store.file="$KEYSTORE_FILE" \
    -Pandroid.injected.signing.store.password="$STORE_PASS" \
    -Pandroid.injected.signing.key.alias="$KEY_ALIAS" \
    -Pandroid.injected.signing.key.password="$KEY_PASS"
else
  echo "❌ Tipo de build desconocido: $BUILD_KIND"
  exit 1
fi

echo "✅ Build completado. Resultado en android/app/build/outputs/..."

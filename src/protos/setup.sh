PROTOC_GEN_TS_PATH="/usr/bin/protoc-gen-ts"
OUT_DIR="./ssl"
protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=true:${OUT_DIR}" \
    *.proto

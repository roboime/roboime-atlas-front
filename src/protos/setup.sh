PROTOC_GEN_TS_PATH="/home/luciano/.npm-global/bin/protoc-gen-ts"
OUT_DIR="./ssl"
protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-web:${OUT_DIR}" \
    *.proto

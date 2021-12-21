#!/bin/bash

set -e

SERVICE=$(echo $1 | awk '{print tolower($0)}')
APPDIR=$1/

cp .dockerignore $APPDIR/
buildah bud -f Dockerfile -t $SERVICE $APPDIR
buildah push $SERVICE oci-archive:$1.tar

rm $APPDIR/.dockerignore

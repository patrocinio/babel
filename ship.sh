# Push the images
echo -- Shipping images version ${BUILD_NUMBER} --

docker login -u patrocinio -p Boch3ch4
docker push patrocinio/babel-speech-${BUILD_NUMBER}

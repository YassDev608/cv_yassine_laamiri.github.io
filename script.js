const video = document.getElementById("video");

Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
faceapi.nets.faceExpressionNet.loadFromUri("/models")
]).then(startVideo);

function startVideo() {
    navigator.getUserMedia({video:{}},strem=>video.srcObject = strem,err => console.log(err));
}


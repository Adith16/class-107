function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/pzUNzQbFR/model.json,modelReady');
}
function modelReady(){
    clasifier.classify(gotResult);
}
prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}


console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MAhnr3QEI/model.json', modelLoaded);

function modelLoaded() {
    console.log("YAY!!!! MODEL IS LOADED!!!")
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function speak() {
    var synth = windows.speechSynthesis;
    speak_data_1 = "The first prediction is - "+ prediction_1;
    speak_data_2 = "The second prediction is - "+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if(results[0].label == "Amazing")
        {
            document.getElementById("update_gesture").innerHTML = "&#128076";
        }
        if(results[0].label == "Good Job")
        {
            document.getElementById("update_gesture").innerHTML = "&#129304;";
        }
        if(results[0].label == "Bad Job")
        {
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if(result[0].label == "Peace")
        {
            document.getElementById("update_gesture").innerHTML = "&#128078;";
        }
        if(result[1].label == "Amazing")
        {
            document.getElementById("update_gesture2").innerHTML = "&#128076";
        }
        if(result[1].label == "Good Job")
        {
            document.getElementById("update_gesture2").innerHTML = "&#129304;";
        }
        if(result[1].label == "Bad Job")
        {
            document.getElementById("update_gesture2").innerHTML = "&#128077;";
        }
        if(result[1].label == "Peace")
        {
            document.getElementById("update_gesture2").innerHTML = "&#128078;";
        }
    }
}

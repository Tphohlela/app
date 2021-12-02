// more documentation available at
    // https://github.com/tensorflow/tfjs-models/tree/master/speech-commands

    // the link to your model provided by Teachable Machine export panel
    const URL = "https://teachablemachine.withgoogle.com/models/BCrg7hVkl/";
// display 
var word = document.getElementById("word-container");

    async function createModel() {
        const checkpointURL = URL + "model.json"; // model topology
        const metadataURL = URL + "metadata.json"; // model metadata

        const recognizer = speechCommands.create(
            "BROWSER_FFT", // fourier transform type, not useful to change
            undefined, // speech commands vocabulary feature, not useful for your models
            checkpointURL,
            metadataURL);

        // check that model and metadata are loaded via HTTPS requests.
        await recognizer.ensureModelLoaded();

        return recognizer;
    }

var counter = 1;
var words = ['Background Noise', 'Amasi', "Isonka", "Ubisi"];
var level = 'Amasi';

// var instruct = document.querySelector('.instruction');

// setTimeout(function () {
//     instruct.innerHTML = " "

// },5000)

var localStorageCounter = localStorage.getItem('counter');


localStorage.removeItem('counter');
console.log(localStorage);

if (localStorageCounter) {

var success = document.querySelector('.message');
var image = document.createElement('img')
var p = document.createElement('p')
var pOne = document.createElement('p')

p.innerHTML = 'Congrats!';
pOne.innerHTML = 'You move to the next word'
success.appendChild(p)
success.appendChild(pOne)
success.appendChild(image)
image.src = './success.png'

setTimeout(function () {
    success.innerHTML = " "

},5000)

    if (localStorageCounter !== counter) {

        counter = Number(localStorageCounter) 

        level = words[localStorageCounter]

    }

}

    async function init() {
        const recognizer = await createModel();
        const classLabels = recognizer.wordLabels(); // get class labels
        const labelContainer = document.getElementById("label-container");
        for (let i = 0; i < classLabels.length; i++) {
            labelContainer.appendChild(document.createElement("div"));
        }

        // listen() takes two arguments:
        // 1. A callback function that is invoked anytime a word is recognized.
        // 2. A configuration object with adjustable fields
        recognizer.listen(result => {
            const scores = result.scores; // probability of prediction for each class
            // render the probability scores per class
            function getHighest(classLabels, result) {
                console.log(classLabels);
                // Amasi
                if (result[0] > result[1] && result[0] > result[2] && result[0] > result[3]) {
                    word.innerHTML = level
    
                      if (level == 'Amasi') {
                        localStorage.setItem('counter', counter + 1);
                        document.location.reload()
                    }

                    labelContainer.childNodes[1].innerHTML = " "
                    labelContainer.childNodes[2].innerHTML = " "
                    labelContainer.childNodes[3].innerHTML = " "
    
                    // labelContainer.childNodes[0].innerHTML = "Please say the word on the screen";
                    labelContainer.childNodes[0].innerHTML = "Sounds like " + " " + classLabels[0] + " ";

                }  
                // background
                else if (result[1] > result[0] && result[1] > result[2] && result[1] > result[3]) {
                    word.innerHTML = level
    
                    // if (level == result[0]) {
                    //     localStorage.setItem('counter', counter + 1);
                    //     document.location.reload()
                    // }
                    labelContainer.childNodes[0].innerHTML = " "
                    labelContainer.childNodes[2].innerHTML = " "
                    labelContainer.childNodes[3].innerHTML = " "
    
                    labelContainer.childNodes[1].innerHTML = "Please say the word on the screen";
    
                }
                
                
                else if (result[2] > result[1] && result[2] > result[0] && result[2] > result[3]) {
                    word.innerHTML = level;
    
                    if (level == 'Isonka') {
                        localStorage.setItem('counter', counter + 1);
                        document.location.reload()
                    }
                    labelContainer.childNodes[0].innerHTML = " "
                    labelContainer.childNodes[1].innerHTML = " "
                    labelContainer.childNodes[3].innerHTML = " "
    
                    labelContainer.childNodes[2].innerHTML = "Sounds like " + " " + classLabels[2] + " ";
    
                } else {
                    word.innerHTML = level;
    
                    if (level == 'Ubisi') {
                        localStorage.setItem('counter', counter + 1);
                        document.location.reload()
                        // replace with second model
                        document.location.replace("/public/level2.html")
    
                    }
                    labelContainer.childNodes[1].innerHTML = " "
                    labelContainer.childNodes[2].innerHTML = " "
                    labelContainer.childNodes[0].innerHTML = " "
    
                    labelContainer.childNodes[3].innerHTML = "Sounds like " + " " + classLabels[3] + " "
                }
    
    
            }
    
            getHighest(classLabels, result.scores)


            // for (let i = 0; i < classLabels.length; i++) {
            //     console.log(classLabels)
            //     const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);
            //     labelContainer.childNodes[i].innerHTML = classPrediction;
            // }
        }, {
            includeSpectrogram: true, // in case listen should return result.spectrogram
            probabilityThreshold: 0.75,
            invokeCallbackOnNoiseAndUnknown: true,
            overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
        });

        // Stop the recognition in 5 seconds.
        // setTimeout(() => recognizer.stopListening(), 5000);
    }

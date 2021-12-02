
// // more documentation available at
// // https://github.com/tensorflow/tfjs-models/tree/master/speech-commands
    // the link to your model provided by Teachable Machine export panel
       

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/AftHexF4Y/";

// async function createModel() {
//     const checkpointURL = URL + "model.json"; // model topology
//     const metadataURL = URL + "metadata.json"; // model metadata

//     const recognizer = speechCommands.create(
//         "BROWSER_FFT", // fourier transform type, not useful to change
//         undefined, // speech commands vocabulary feature, not useful for your models
//         checkpointURL,
//         metadataURL);

//     // check that model and metadata are loaded via HTTPS requests.
//     await recognizer.ensureModelLoaded();

//     return recognizer;
// }

// async function init() {
//     const recognizer = await createModel();
//     const classLabels = recognizer.wordLabels(); // get class labels
//     console.log('sdfghjk,l' + classLabels)
//     const labelContainer = document.getElementById("label-container");
//     // for (let i = 0; i < classLabels.length; i++) {
//     //     labelContainer.appendChild(document.createElement("div"));
//     // }

//     // listen() takes two arguments:
//     // 1. A callback function that is invoked anytime a word is recognized.
//     // 2. A configuration object with adjustable fields
//     recognizer.listen(result => {
//         const scores = result.scores; // probability of prediction for each class
//         // render the probability scores per class
//         // for (let i = 0; i < classLabels.length; i++) {
//         //     const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);
//         //     labelContainer.childNodes[i].innerHTML = classPrediction;
//         // }

//         let obj = result.scores;
//         let arr = Object.values(obj);
//         let max = Math.max(...arr);
//         console.log('highest function:' + Object.keys(obj).reduce(function (a, b) { return obj[a] > obj[b] ? a : b }));
//         var highestValue = Object.keys(obj).reduce(function (a, b) { return obj[a] > obj[b] ? a : b })
//         const highVal = classLabels[highestValue] + ": " + max.toFixed(2);

//         if (highestValue == 1) {
//             message.innerHTML = 'Sorry, please try again.'

//             setTimeout(function () {
//                 message.innerHTML = null;
//             }
//                 , 3000);

//         }
//         else if (highestValue == 0) {
//             message.innerHTML = 'Please speak into the mic';
//             setTimeout(function () {
//                 message.innerHTML = null;
//             }
//                 , 3000);
//         }
//         else if (highestValue == 2) {
//             message.innerHTML = 'Yay, you said ingca correctly. High five 🖐'
//             setTimeout(function () {
//                 message.innerHTML = null;
//             }
//                 , 3000);
//         }
//         else if (highestValue == 4) {
//             message.innerHTML = 'Yay, you said umngqusho correctly. Great job 😀'
//             setTimeout(function () {
//                 message.innerHTML = null;
//             }
//                 , 3000);
//         }
//         else if (highestValue == 3) {
//             message.innerHTML = 'Wow, you said ukrakrayo correctly. Congrats 👏'
//             setTimeout(function () {
//                 message.innerHTML = null;
//             }
//                 , 3000);
//         }
//     }, {
//         includeSpectrogram: true, // in case listen should return result.spectrogram
//         probabilityThreshold: 0.75,
//         invokeCallbackOnNoiseAndUnknown: true,
//         overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
//     });

//     //Stop the recognition in 5 seconds.
//     // setTimeout(() => recognizer.stopListening(), 3000);
// }
    //Stop the recognition in 5 seconds.
    setTimeout(() => recognizer.stopListening(), 2000);
}

import { amzId, amzKey } from '../secrets';

AWS.config.accessKeyId = amzId;
AWS.config.secretAccessKey = amzKey;
AWS.config.region = 'us-east-2';

export const polly = new AWS.Polly();

export const params = {
  OutputFormat: 'mp3',
  Text: 'You did it Terence!',
  TextType: 'text',
  VoiceId: 'Joanna'
};

// polly.synthesizeSpeech(params, (err, data) => {
//   if (err) {
//     console.log(err, err.stack);
//   } else {
//     let uInt8Array = new Uint8Array(data.AudioStream);
//     let arrayBuffer = uInt8Array.buffer;
//     let blob = new Blob([arrayBuffer]);
//     console.log(blob);

//     let audio = $('audio');
//     let url = URL.createObjectURL(blob);
//     audio[0].src = url;
//     // audio[0].play();
//     let playPromise = audio[0].play();

//     if (playPromise !== undefined) {
//       playPromise
//         .then(_ => {
//           console.log('... should be playing!');
//         })
//         .catch(error => {
//           console.log(error, error.stack);
//         });
//     }
//   }
// });

import { amzId, amzKey } from '../secrets';
import { createDecipher } from 'crypto';

AWS.config.accessKeyId = amzId;
AWS.config.secretAccessKey = amzKey;
AWS.config.region = 'us-east-2';

export const polly = new AWS.Polly();

export const params = {
  OutputFormat: 'mp3',
  TextType: 'ssml',
  VoiceId: 'Joanna'
};

export const createAudioUrl = data => {
  let uInt8Array = new Uint8Array(data.AudioStream);
  let arrayBuffer = uInt8Array.buffer;
  let blob = new Blob([arrayBuffer]);
  let url = URL.createObjectURL(blob);
  return url;
};

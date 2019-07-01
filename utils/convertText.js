const haveNoStress = {
  a: true,
  as: true,
  at: true,
  but: true,
  of: true,
  on: true,
  per: true,
  than: true,
  to: true,
  an: true,
  the: true,
  and: true,
  her: true
};

//regex for detecting schwa, u, and i in stressed syllable:

const stressedSchwa = /([ˈˌ][^ˈˌiʌæɑeɪaʊɛɔouə]*)(ə)/;

const stressedU = /([ˈˌ][^ˈˌiʌæɑeɪaʊɛəɔou]*)(u)/;

const stressedI = /([ˈˌ][^ˈˌʌæɑeɪaʊɛəɔoui]*)(i)/;

//regex for detecting one-syllable words with schwa, u, or i

export const convertToIpa = (word, pron) => {
  if (haveNoStress[word]) return pron;
  let newPron = pron;
  newPron = newPron.replace(/(\(ə\))/, '');
  if (pron.includes('ˈ')) {
    newPron = newPron.replace(stressedSchwa, '$1ʌ');
    newPron = newPron.replace(stressedI, '$1iː');
    newPron = newPron.replace(stressedU, '$1uː');
    return newPron;
  } else {
    newPron = 'ˈ' + newPron;
    newPron = newPron.replace('ə', 'ʌ');
    return newPron;
  }
};

export const convertToAccent = (accent, ipaStr) => {
  const subChars = accent.subChars;
  const subs = accent.subs;
  let accented = ipaStr;
  for (let i = 0; i < subChars.length; i++) {
    const sub = new RegExp('(?<!-)' + subChars[i] + '(?!-)', 'g');
    accented = accented.replace(sub, `-${subs[subChars[i]]}-`);
  }
  accented = accented.replace(/-/g, '');
  return accented;
};

//  = /([ˈˌ][^ˈˌiʌæɑeɪaʊɛɔouC]*)(ə)/;

const nyc = {
  ɔ: 'ɔə',
  u: 'ʊu'
};

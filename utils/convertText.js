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
  and: true
};

const stressedVowels = {
  ə: 'ʌ',
  i: 'iː',
  u: 'uː'
};

//regex for detecting schwa, u, and i in stressed syllable:

const stressedSchwa = /[ˈˌ][^ˈˌiʌæɑeɪaʊɛrɔouə]*ə/;

const stressedU = /[ˈˌ][^ˈˌiʌæɑeɪaʊɛərɔou]*u/;

const stressedI = /[ˈˌ][^ˈˌʌæɑeɪaʊɛərɔoui]*i/;

//regex for detecting one-syllable words with schwa, u, or i

// /[^ˈˌ]*ə[^ˈˌ]*/

// /[^ˈˌ]*i[^ˈˌ]*/

// /[^ˈˌ]*u[^ˈˌ]*/

const convertText = (word, pron) => {
  if (haveNoStress[word]) return pron;
  let newPron = pron;
  if (pron.includes('ˈ')) {
    newPron = newPron.replace(stressedSchwa, '$1,ʌ');
    newPron = newPron.replace(stressedI, '$1,iː');
    newPron = newPron.replace(stressedU, '$1,uː');
    return newPron;
  } else {
    newPron = newPron.replace('ə', 'ʌ');
    newPron = newPron.replace('i', 'iː');
    newPron = newPron.replace('u', 'uː');
    return newPron;
  }
};

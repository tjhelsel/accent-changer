//regex for detecting schwa, u, and i in stressed syllable:
const haveNoStress = {a: true, as: true, at: true, but: true, of: true, on: true, per: true, than: true, to: true, an: true, the: true, and: true}


/[ˈˌ][^iʌæɑeɪaʊɛrɔou]*ə/

/[ˈˌ][^iʌæɑeɪaʊɛərɔo]*u/

/[ˈˌ][^ʌæɑeɪaʊɛərɔou]*i/


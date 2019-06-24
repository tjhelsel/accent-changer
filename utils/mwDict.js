const findInInflections = (word, inflections) => {
  for (let i = 0; i < inflections.length; i++) {
    const infl = inflections[i].if.replace(/\*/gi, '');
    if (infl === word && inflections[i].prs) {
      return inflections.prs[0].mw;
    }
  }
};

const findInVariants = (word, variants) => {
  for (let i = 0; i < variants.length; i++) {
    if (variants[i].ure === word && variants[i].prs) {
      return variants[i].prs[0].mw;
    }
  }
};

export const getPron = (word, rawData) => {
  for (let i = 0; i < rawData.length; i++) {
    const hwi = rawData[i].hwi;
    if (word === hwi.hw && hwi.prs) return hwi.prs[0].mw;
  }

  if (rawData.ins) {
    const infResult = findInInflections(word, rawData.ins);
    if (infResult) return infResult;
  }

  if (rawData.uros) {
    const varResult = findInVariants(word, rawData.uros);
    if (varResult) return varResult;
  }

  return false;
};

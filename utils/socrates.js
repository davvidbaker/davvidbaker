function socrates(text) {
  // purge the text of punctuation
  if (text) {
    let noPunc = text.replace(/[.,!?'";]/g, '');

    // get rid of line breaks
    noPunc = noPunc.replace(/[\n\r]+/g, ' ');

    const wordsArr = noPunc.split(' ');

    const wordsObj = {};
    wordsArr.forEach(word => {
      wordsObj[word] = wordsObj[word] ? ++wordsObj[word] : 1;
    });

    return wordsObj;
  }
}

export default socrates;

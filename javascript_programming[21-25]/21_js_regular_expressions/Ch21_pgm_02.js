function tenMostFrequentWords(paragraph, n = Infinity) {
    const words = paragraph.toLowerCase().split(/\s+/);
    const wordCounts = {};
    words.forEach(word => {
      word = word.replace(/[^\w]/g, ''); // remove punctuation
      if (word) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
      }
    });
  
    const sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]);
    return sortedWords.slice(0, n).map(word => ({ word, count: wordCounts[word] }));
  }
  
  const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
  
  console.log(tenMostFrequentWords(paragraph));
  console.log(tenMostFrequentWords(paragraph, 10));
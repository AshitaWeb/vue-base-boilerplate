// esse helper  ajuda no tratamento de respostas e erros na promisses sem a necessidade de usar try catch

// ex :
// const to = require('../../core/to');
// const [err, data] =  await to(Arquivos.find())

module.exports = promise => {
  return promise
    .then(data => {
      return [null, data];
    })
    .catch(err => [err, null]);
};

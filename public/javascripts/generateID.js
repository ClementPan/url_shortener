///// Generate Manual Id /////
const generateID = function () {
  ///// id parameters
  const parameters = {
    lowerCaseLetters: 'abcdefghijklmnopqrstuvwxyz',
    upperCaseLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '1234567890'
  }
  const parameterArray = parameters.lowerCaseLetters.concat(parameters.upperCaseLetters).concat(parameters.numbers)

  ///// create new id
  let newId = ''
  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * parameterArray.length)
    newId += parameterArray[index]
  }

  return newId
}

module.exports = generateID

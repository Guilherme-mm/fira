class MissingMethodOvewriteException extends Error {
  constructor (message) {
    super(message)
    this.name = 'MissingMethodOvewriteException'
  }
}

export default MissingMethodOvewriteException

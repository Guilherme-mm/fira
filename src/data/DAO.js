import MissingMethodOvewriteException from '../exception/MissingMethodOvewriteException'

class DAO {
  save () {
    throw new MissingMethodOvewriteException('Missing overwrite in child class for mehtod <save>')
  }
}

export default DAO

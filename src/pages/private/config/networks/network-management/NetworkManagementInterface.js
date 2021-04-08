import NetworkDAO from '../../../../../data/NetworkDAO'

function addNetwork () {
  const networkDao = new NetworkDAO()
  networkDao.save()
}

export default {
  addNetwork
}

const MediaElement = require('./media-element')

class PlayerEndpoint extends MediaElement {
  play () {
    return this.client.playPlayerEndpoint(this)
  }
}

module.exports = PlayerEndpoint

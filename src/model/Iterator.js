class Iterator {
  constructor () {
    this.items = []
  }

  [Symbol.iterator] () {
    let nextIndex = 0

    return {
      next: () => {
        return nextIndex < this.items.length ? { value: this.items[nextIndex++], done: false } : { done: true }
      }
    }
  }

  push (item) {
    this.items.push(item)
  }
}

export default Iterator

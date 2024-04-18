export class Context {
  #storage

  constructor() {
    this.#storage = {}
  }

  getStorage(key) {
    return this.#storage[key]
  }

  setStorage(key, value) {
    this.#storage[key] = value
  }

  getInput() {
    return JSON.stringify({
      "DocumentNumber": "1234567890",
      "CostCenter": "ABC",
    })
  }

  getConnection() {
    return JSON.stringify({
      "url": "https://api.com",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer token-1231213131",
      }
    })
  }
}

export const host = {
  Context
}

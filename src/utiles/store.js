exports.productStorage = {
  fetch: function (STORAGE_KEY) {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function (STORAGE_KEY, data) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }
}

import data from './html.json'

export default {
  getQuestion
}

function getQuestion() {
  return Promise.resolve(data)
}

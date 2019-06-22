let url = 'https://opentdb.com/api.php?amount=10'

const retrieveData = _ => {
  fetch(url)
    .then(result => {
      return result.json();
    })
    .then(data => {
      console.log(data)
      console.log('-------')
      console.log(data.results)
      data.results.forEach(elem => {
        console.log(elem)
      })
    })
}

export { retrieveData } 


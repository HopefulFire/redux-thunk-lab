export const fetchCats = () => {
  dispatch({ type: "LOADING_CATS" })
  fetch("https://learn-co-curriculum.github.io/cat-api/cats.json").then((response) => {
    return response.json()
  }).then((cats) => {
    dispatch({
      type: "ADD_CATS",
      cats: cats.images,
    })
  })
}
export const GET_IMDB_RATING_URL = (apiKey, id) => `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
export const IFRAME_YOUTUBE_URL = (id) => `https://www.youtube-nocookie.com/embed/${id}?rel=0&amp;amp;controls=0&amp;amp;showinfo=0`
import type { GetServerSideProps } from 'next'
import HomeTemplate, { HomeTemplateProps } from 'templates/HomeTemplate'

import { api } from 'services/api'

const Home = ({ movies, pages, genres }: HomeTemplateProps) => {
  return <HomeTemplate movies={movies} pages={pages} genres={genres} />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const genresresp = await api.get('/genre/movie/list')
  const moviesrest = await api.get(`/movie/popular`, {
    params: { page: Number(query.page || 1) }
  })

  const movies = await moviesrest.data.results
  const pages = await moviesrest.data.total_pages
  const genres = await genresresp.data.genres

  return {
    props: {
      pages,
      movies,
      genres
    }
  }
}

export default Home

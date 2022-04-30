import type { GetServerSideProps } from 'next'
import HomeTemplate, { HomeTemplateProps } from 'templates/HomeTemplate'

import { api } from 'services/api'

const Home = ({ movies, pages }: HomeTemplateProps) => {
  return <HomeTemplate movies={movies} pages={pages} />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await api.get(`/movie/popular`, {
    params: { page: Number(query.page || 1) }
  })

  const data = await response.data
  const pages = data.total_pages

  return {
    props: {
      pages,
      movies: data.results
    }
  }
}

export default Home

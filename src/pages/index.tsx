import type { GetStaticProps } from 'next'
import HomeTemplate, { HomeTemplateProps } from 'templates/HomeTemplate'

import moviesListMock from 'components/MoviesList/mock'

const Home = ({ movies, pages }: HomeTemplateProps) => {
  return <HomeTemplate movies={movies} pages={pages} />
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      pages: 5,
      movies: moviesListMock
    }
  }
}

export default Home

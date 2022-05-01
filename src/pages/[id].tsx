import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Header from 'components/Header'
import MovieTemplate, { MovieProps } from 'templates/Movie'

import { api } from 'services/api'

function Movie({ movie }: { movie: MovieProps }) {
  console.log(movie)
  const router = useRouter()

  return router.isFallback ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Header />
      <MovieTemplate {...movie} />
    </>
  )
}

export default Movie

export async function getStaticPaths() {
  const response = await api.get(`/movie/popular`)

  const data = await response.data

  const paths = data.results.map(({ id }: { id: number }) => {
    return { params: { id: String(id) } }
  })

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await api.get(`/movie/${params?.id}`)

  return {
    props: {
      movie: data
    }
  }
}

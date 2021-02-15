import React, { useEffect, lazy, Suspense } from 'react'

import useFecth from '../../../hooks/useFecth'

import { GET_STATS } from '../../../api/api'

import Loading from '../../../helpers/Loading/Loading'
import Error from '../../../helpers/Error'

const GraphStats = lazy(() => import('../GraphStats/GraphStats'))

const Statistics = () => {
  const { loading, error, data, request } = useFecth()

  useEffect(() => {
    const getData = async () => {
      const { url, options } = GET_STATS()
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) return <Loading />

  if (error) return <Error error={error} />

  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <h1>Estatísticas</h1>
        <GraphStats data={data} />
      </Suspense>
    )
  else return null
}

export default Statistics

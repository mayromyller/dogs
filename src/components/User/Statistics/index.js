import React, { useEffect } from 'react'

import * as S from './style.module.css'

import useFecth from '../../../hooks/useFecth'

import { GET_STATS } from '../../../api/api'

import Loading from '../../../helpers/Loading'
import Error from '../../../helpers/Error'

import GraphStats from '../GraphStats'

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
      <div className={S.statistics}>
        <h1>Estatísticas</h1>
        <GraphStats data={data} />
      </div>
    )
  else return null
}

export default Statistics

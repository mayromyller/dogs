import React, { useState, useEffect } from 'react'
import * as S from './GraphStats.module.css'

import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

const GraphStats = ({ data }) => {
  const [graphs, setGraphs] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const graphics = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos)
      }
    })
    setTotal(
      data
        .map(({ acessos }) => Number(acessos))
        .reduce((acc, next) => acc + next)
    )
    setGraphs(graphics)
  }, [data])

  return (
    <section className={`${S.graphs} animeLeft`}>
      <div className={`${S.totalAccess} ${S.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={S.graphItem}>
        <VictoryPie
          data={graphs}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
        />
      </div>
      <div className={S.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graphs}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  )
}

export default GraphStats

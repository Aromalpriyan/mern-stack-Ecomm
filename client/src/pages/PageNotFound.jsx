import React from 'react'
import { Helmet } from 'react-helmet'

const PageNotFound = () => {
  return (
    <div>
      <Helmet>
        <title>MyStore-PageNotFound</title>
      </Helmet>
      <h1 className="text-black mt-20 ">PageNotFound</h1>
    </div>
  )
}

export default PageNotFound
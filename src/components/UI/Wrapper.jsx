import React, { Fragment } from 'react'
import Form from '../form/Form'
import Table from '../table/Table'

const Wrapper = () => {
  return (
    <Fragment>
<div className="container d-flex gap-4 justify-content-center align-items-center">
    <Form/>
    <Table/>
</div>

    </Fragment>
  )
}

export default Wrapper
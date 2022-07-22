import React, { Fragment } from 'react'
import Form from '../form/Form'
import Table from '../table/Table'

const Wrapper = () => {
  return (
    <Fragment> 
<div className="container  wrapper">
    <div className='gap-4 d-flex flex-wrap flex-md-nowrap justify-content-center align-items-center  '>
      <Form/>
      <Table/>
    </div>
</div>

    </Fragment>
  )
}

export default Wrapper
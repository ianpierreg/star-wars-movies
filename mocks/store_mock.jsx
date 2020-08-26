import React, { useEffect } from 'react'
import { withStore, useSetStoreValue } from 'react-context-hook'
import PropTypes from 'prop-types'
import initialStore from '../src/helpers/initial_store'

const StoreMock = ({ children }) => (
  <React.Fragment>
    {children}
  </React.Fragment>
)

export default withStore(StoreMock, initialStore, { })

StoreMock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
}

import React from 'react'
const loadStyle = {
  container: {
    fontSize: '10rem',
    textAlign: 'center',
    color: 'aliceblue',
    background: '#212121',
    width: '100%',
    height: '800px'
  },
  icon: {
    paddingTop: '20rem'
  }
}
const Loading = () => {
  return (
    <div style={loadStyle.container}>
      <div style={loadStyle.icon}>
        <i className="fa fa-spinner fa-pulse fa-fw"/>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}  
export default Loading
import React from 'react'
import assets from '../../assets'
const Blog = ({BlogClose}) => {
  return (
    <div>
      <assets.Layer icone={assets.Certificate} image={assets.Exit} name={'Blog'} onClose={BlogClose}>
          <span>Developing is ongoing</span>
    </assets.Layer>
    </div>
  )
}

export default Blog
import React from 'react'







const ListPopOut = (props) => {

  return (props.trigger) ? (
    <div className='popout'>
      <div className='popout-inner'> 
        {props.children}
      </div>
    </div>
  ) : '';

}








export default ListPopOut
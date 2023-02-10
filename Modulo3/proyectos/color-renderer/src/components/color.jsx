
  const Color = ( {name, hex, id} ) => {
    return (
      <div className='color-square' style={ {backgroundColor: hex} }> 
        <h2>Id: {id} y Nombre: {name}</h2>
      </div>
    )
  }
  export default Color;
  
  
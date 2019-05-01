import React from 'react'

// Study me! What information do I require to work? How am I the same as InventoryTile? How am I different?

const ShopTile = (props) => {
  return (
    <div key={props.potion.id} className="card">
      <div onClick={() => props.addToInventory(props.potion.id)} className="image-wrapper">
        <img className="image" alt={props.potion.name} src={props.potion.image_url} />
      </div>
      {props.children}
    </div>
  )
}

export default ShopTile
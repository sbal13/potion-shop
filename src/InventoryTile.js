import React from 'react'

// Study me! What information do I require to work? How am I the same as ShopTile? How am I different?

const InventoryTile = (props) => {
  return (
    <div key={props.potion.id} className="inventory-card">
      <div onClick={() => props.sell(props.potion.id)} className="image-wrapper">
        <img className="image" alt={props.potion.name} src={props.potion.image_url} />
      </div>
      {props.children}
    </div>

  )
}

export default InventoryTile
import React from 'react'
import Purse from "./Purse"


const Inventory = (props) => {

  const renderInventory = () => {

    return props.inventory.map(item => {
      const potion = props.potions.find(potion => potion.id === item.id)

       return (
        <div key={potion.id} onClick={() => props.sell(potion.id)}className="inventory-card">
          <div className="image-wrapper">
            <img className="image" alt={potion.name} src={potion.image_url} />
          </div>
          <h4>{potion.name} x {item.amount}</h4>
        </div>
      )
    })  
  }

  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <Purse gold={props.gold}/>
      <div className="inventory-cards">
       {renderInventory()}
      </div>
    </div>
  )
}

export default Inventory
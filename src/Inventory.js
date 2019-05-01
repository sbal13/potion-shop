import React from 'react'
import Purse from "./Purse"
import InventoryTile from "./InventoryTile"


const Inventory = (props) => {

  const renderInventory = () => {

    return props.inventory.map(item => {
      const potion = props.potions.find(potion => potion.id === item.id)

       return (
        <InventoryTile potion={potion} sell={props.sell}>
          <h4>{potion.name} x {item.amount}</h4>
        </InventoryTile>
      )
    })  
  }

  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <Purse stopShake={props.stopShake} shake={props.shake} gold={props.gold}/>
      <div className="inventory-cards">
       {renderInventory()}
      </div>
    </div>
  )
}

export default Inventory
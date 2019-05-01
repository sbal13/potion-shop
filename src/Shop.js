import React from 'react'

const Shop = (props) => {

  const renderPotions = () => {
    return props.potions.map(potion => {
      return (
        <div onClick={() => props.addToInventory(potion.id)} key={potion.id} className="card">
          <h4 className="potion-header">{potion.name}</h4>
          <div className="image-wrapper">
            <img className="image" alt={potion.name} src={potion.image_url} />
          </div>
        </div>
      )
    })
  }

  return (
    <div className="shop">
      <div className="shop-header">
        <img className="torch" src="https://img.itch.zone/aW1nLzEzNDg2ODkuZ2lm/original/BEjCgg.gif" alt="torch"/>
        <h1>Ye Olde Apothecary</h1>
        <img className="torch flipped" src="https://img.itch.zone/aW1nLzEzNDg2ODkuZ2lm/original/BEjCgg.gif" alt="torch"/>
      </div>
      <div className="shop-cards">
        {renderPotions()}
      </div>
    </div>
  )
}

export default Shop


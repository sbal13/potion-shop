import React from 'react';
import './App.css';
import Inventory from "./Inventory"
import Shop from "./Shop"
import potions from "./data"

class App extends React.Component {

  state = {
    gold: 500,
    inventory: [],
    shake: false
  }

  stopShake = () => {
    this.setState({
      shake: false
    })
  }

  addToInventory = (potionID) => {

    const potion = potions.find(potion => potion.id === potionID)

    if(this.state.gold - potion.buyCost >= 0){
      this.setState({gold: this.state.gold - potion.buyCost})
      const foundItem = this.state.inventory.find(potion => {
        return potion.id === potionID
      })

      if(foundItem){
        const updatedPotion = {...foundItem, amount: foundItem.amount + 1}

        const newInventory = this.state.inventory.map(potion => {
          if (potion.id === potionID){
            return updatedPotion
          } else {
            return potion
          }
        })

        this.setState({
          inventory: newInventory
        })

      } else {
        let newInventory = [...this.state.inventory, {id: potionID, amount: 1}]

        this.setState({inventory: newInventory})
      }
      const audio = new Audio("./pickup.wav")
      audio.play()
    } else {
      this.setState({
        shake: true 
      }, () => {
        const audio = new Audio("./wrong.wav")
        audio.play()  
      })
    }
    
  }

  sell = (potionID) => {
    const potion = potions.find(potion => potion.id === potionID)

    this.setState({
      gold: this.state.gold + potion.sellPrice
    })

    const foundItem = this.state.inventory.find(potion => {
      return potion.id === potionID
    })
    const updatedPotion = {...foundItem, amount: foundItem.amount - 1}
    if(updatedPotion.amount === 0) {
      const newInventory =  this.state.inventory.filter(potion => potion.id !== potionID)

      this.setState({
        inventory: newInventory
      })

    } else {
      const newInventory = this.state.inventory.map(potion => {
        if (potion.id === potionID){
          return updatedPotion
        } else {
          return potion
        }
      })

      this.setState({
        inventory: newInventory
      })
    }

    const audio = new Audio("./coins.wav")
    audio.play()
  }

  render(){
    return (
      <div className="app">
        <div className="potion-shop">
          <Shop potions={potions}  addToInventory={this.addToInventory}/>
          <Inventory stopShake={this.stopShake} shake={this.state.shake} gold={this.state.gold} sell={this.sell} potions={potions} inventory={this.state.inventory}/>
        </div>
      </div>
    );
  }
}

export default App;

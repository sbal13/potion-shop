# Discussion Question: Props and Component Reusability

**Welcome to *Ye Olde Apothecary*!**

## Objectives

This discussion question is focused on using props to make our components more reusable. In order to do so, we have to adopt a mindset around *abstraction*, meaning that we should keep an eye out for similarities in our components and figure out clever ways to use props to abstract out the differences.

## Overview

This discussion question comes with a fully functioning application. To get going, simply

` npm install && npm start`

Feel free to play around with it and see how it works. As you do, notice that the tiles that render inside the shop and inside the inventory look *suspiciously* similar, but have different functionality and slightly different styling.

Your goal is to write a new component called `PotionTile` ( basic template provided for you) that will act as an abstracted version of `InventoryTile` and `ShopTile`. If done correctly, you should be able to replace these components wherever they are written with your new `PotionTile` and the application **should retain both its styling and its functionality**. 

Note: Don't worry too much about what the rest of the code is doing, especially `addToInventory` and `sell`. These functions take potion IDs as arguments, and so long as you do so, they should behave normally. All of your new code should be in `PotionTile` with **slight** modifcations to `Shop` , and `Inventory`. 

Hint: Don't be afraid to modify the props that are passed to the tiles in `Shop` and `Inventory`! 



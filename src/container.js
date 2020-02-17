import React,{Component} from "react";
import Object from "./object";
import "./container.css";


class Container extends React.Component{

    render(){

        return(
            <div className = "container">
                <h1 align = "center" > Fruit Clicker</h1>
                <table cellSpacing = "50">
                    <tr>
                        <td className = "apple">
                            <Object
                                name = "Apple"
                                price = {5}
                                purchase_increment = {1}
                                description = "Minecraft apple."
                                img = "https://cdn1.iconfinder.com/data/icons/vegetables-part-2-flat/33/green_apple-512.png"
                            />
                        </td>
                        
                        <td className = "strawberry">
                            <Object
                                name = "Strawberry"
                                price = {10}
                                purchase_increment = {2}
                                description = "descriptive description"
                                img = "https://image.flaticon.com/icons/png/512/590/590685.png"
                            />
                        </td>

                        <td className = "banana">
                            <Object
                                name = "Banana"
                                price = {15}
                                purchase_increment = {3}
                                description = "BANANANNANA"
                                img = "https://images.vexels.com/media/users/3/143061/isolated/preview/aaf71ed4e387a6838e1c521fbecde77a-banana-icon-fruit-by-vexels.png"
                            />
                        </td>

                        <td className = "orange">
                            <Object
                                name = "Orange"
                                price  = {20}
                                purchase_increment = {4}
                                description = "Orange is the new black"
                                img = "https://image.flaticon.com/icons/png/512/135/135620.png"
                            />
                        </td>

                        <td className = "watermelon">

                            <Object
                                name = "Watermelon"
                                price = {25}
                                purchase_increment = {5}
                                description = "Yummy! Nobody resists to this"
                                img = "https://cdn3.iconfinder.com/data/icons/food-3-11/128/food_Watermelon-Fruit-Slice-Summer-Melon-512.png"
                            />

                        </td>

                    </tr>
                </table>












            </div>
        )

    }
}

export default Container;
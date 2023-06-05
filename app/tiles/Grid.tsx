
import Tile from "./Tile"
import React from "react"


interface Props {
    onClick: any
}

export default function Grid(props:Props) {

    return (
        <div className="p-6 container h-screen max-w-full w-screen grid grid-rows-9 grid-cols-1 sm:grid-rows-3 sm:grid-cols-3 gap-6">
            <Tile 
            onClick = {() => props.onClick(1)}
            imgNum = {1}
            title = {"Interview One"}
            subtitle = {"Very Good FC"}
            />
            <Tile 
            onClick={() => props.onClick(2)}      
            imgNum={2}
            title={"Interview Two"}
            subtitle={"Goaaaaaal United FC"}   
            />
            <Tile 
            onClick={() => props.onClick(3)}      
            imgNum = {3} 
            title = {"Interview Three"}
            subtitle = {"Canberra United FC"}
            />
            <Tile 
            onClick={() => props.onClick(4)}      
            imgNum = {4} 
            title = {"Interview Four"}
            subtitle = {"Very Good FC"}
            />
            <Tile 
            onClick={() => props.onClick(5)}      
            imgNum = {5} 
            title = {"Interview Five"}
            subtitle = {"Goaaaaaal United FC"}
            />
            <Tile 
            onClick={() => props.onClick(6)}      
            imgNum = {6} 
            title = {"Interview Six"}
            subtitle = {"Canberra United FC"}
            />
            <Tile 
            onClick={() => props.onClick(7)}      
            imgNum = {7} 
            title = {"Interview Seven"}
            subtitle = {"Very Good FC"}
            />
            <Tile 
            onClick={() => props.onClick(8)}      
            imgNum = {8} 
            title = {"Interview Eight"}
            subtitle = {"Goaaaaaal United FC"}
            />
            <Tile 
            onClick={() => props.onClick(9)}      
            imgNum = {9} 
            title = {"Interview Nine"}
            subtitle = {"Canberra United FC"}
            />
        </div>

    )

}

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
            title = {"Jessika Nash"}
            subtitle = {"Future Stars - 2021"}
            />
            <Tile 
            onClick={() => props.onClick(2)}      
            imgNum={2}
            title={"Michelle Heyman"}
            subtitle = {"Canberra United FC"}
            />
            <Tile 
            onClick={() => props.onClick(3)}      
            imgNum = {3} 
            title={"Michelle Heyman"}
            subtitle = {"Retirement and Returning to Football"}
            />
            <Tile 
            onClick={() => props.onClick(4)}      
            imgNum = {4} 
            title={"Michelle Heyman"}
            subtitle = {"Goal Scoring Legend"}
            />
            <Tile 
            onClick={() => props.onClick(5)}      
            imgNum = {5} 
            title = {"2020/21 Season Finals Preview"}
            subtitle = {"Canberra United FC"}
            />
            <Tile 
            onClick={() => props.onClick(6)}      
            imgNum = {6} 
            title = {"Grace Maher and Nikoletta Flannery"}
            subtitle = {"Canberra United FC"}
            />
            <Tile 
            onClick={() => props.onClick(7)}      
            imgNum = {7} 
            title = {"Behind the Scenes"}
            subtitle = {"W-League TV Ad - 2012"}
            />
            <Tile 
            onClick={() => props.onClick(8)}      
            imgNum = {8} 
            title = {"Michelle Heyman"}
            subtitle = {"Breaking Down Barriers"}
            />
            <Tile 
            onClick={() => props.onClick(9)}      
            imgNum = {9} 
            title = {"Sam Kerr"}
            subtitle = {"Big Questions with Marnie the MiniRoo"}
            />
        </div>

    )

}
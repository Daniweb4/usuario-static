import React, { useState } from 'react'
import Data from './Person/Data'

const Person = () => {
    const [per,setPer]=useState([
        {
            id:1,
            name:"kevin",
            last:"Kiroz",
            email:"kev@hotmail.com",
            rol:"Ingeniero",
            image:"https://e7.pngegg.com/pngimages/450/780/png-clipart-cartoon-computer-icons-man-child-hand.png"
        },
        {
            id:2,
            name:"Dani",
            last:"Villegas",
            email:"dani@hotmail.com",
            rol:"Analista",
            image:"https://cdn.pixabay.com/photo/2017/08/27/21/42/man-2687628_960_720.png"
        },
        {
            id:3,
            name:"Pablo",
            last:"Moran",
            email:"pablo@gmail.com",
            rol:"Contador",
            image:"https://e7.pngegg.com/pngimages/324/398/png-clipart-cartoon-drawing-man-comics-face.png"
    
        },
        {
            id:4,
            name:"Melisa",
            last:"Martinez",
            email:"meli@gmail.com",
            rol:"Docente",
            image:"https://e7.pngegg.com/pngimages/869/415/png-clipart-businessperson-cartoon-woman-business-woman-microphone.png"
    
        },
        {
            id:5,
            name:"Joconda",
            last:"Perez",
            email:"joco@gmail.com",
            rol:"Doctor",
            image:"https://img2.freepnges.com/20180305/hre/kisspng-woman-businessperson-cartoon-illustration-professional-women-5a9e1db5019c26.5879143515203117330066.jpg"
    
        },
        {
            id:6,
            name:"Marcela",
            last:"Quiroga",
            email:"marc@gmail.com",
            rol:"Pediatra",
            image:"https://w7.pngwing.com/pngs/353/576/png-transparent-woman-businessperson-woman-photography-people-office.png"
    
        },
        {
            id:7,
            name:"Joselin",
            last:"Parraga",
            email:"jose@gmail.com",
            rol:"Nuticionistas",
            image:"https://img1.freepnges.com/20240301/jiw/transparent-business-woman-professional-businesswoman-at-desk-with-1710856275088.webp"
        },
        {
            id:8,
            name:"Margaret",
            last:"muñiz",
            email:"marg@gmail.com",
            rol:"rquitecta",
            image:"https://w7.pngwing.com/pngs/693/530/png-transparent-cartoon-female-cartoon-professional-women-cartoon-character-comics-child.png"
    
        },
        {
            id:9,
            name:"Yolanda",
            last:"Navas",
            email:"yoli@gmail.com",
            rol:"Ama de casa",
            image:"https://img1.freepnges.com/20240301/jiw/transparent-business-woman-professional-businesswoman-at-desk-with-1710856275088.webp"
        },
        

    ])
  return (
    <div className='content'>
        
      {
        per.map((pers)=>{
            return <Data name={pers.name} image={pers.image} last={pers.last} email={pers.email} rol={pers.rol}  />
        })
      }
    </div>
  )
}

export default Person

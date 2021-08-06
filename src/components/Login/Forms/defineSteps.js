import React from 'react';

const Data=[
    {
        heading:"Define Architecture",
        text:"hey  akks akjgks kjgkasdn hkaad kgkad kjgskdhla kjgkdqwh ",
        number:'1'
    },
    {
        heading:"Define Architecture",
        text:"hey  akks akjgks kjgkasdn hkaad kgkad kjgskdhla kjgkdqwh ",
        number:'2'
    },
    {
        heading:"Define Architecture",
        text:"hey  akks akjgks kjgkasdn hkaad kgkad kjgskdhla kjgkdqwh ",
        number:'3'
    },
    {
        heading:"Define Architecture",
        text:"hey  akks akjgks kjgkasdn hkaad kgkad kjgskdhla kjgkdqwh ",
        number:'4'
    },
    {
        heading:"Define Architecture",
        text:"hey  akks akjgks kjgkasdn hkaad kgkad kjgskdhla kjgkdqwh ",
        number:'5'
    }
]

const defineSteps=()=>{
    return(
        <div id="outerDiv">
        {
            Data.map((data)=>{
                return(
                    <div className='components'>
                <div id='number'>{data.number}</div>
                <div>
            <h3>{data.heading}</h3>
            <p>{data.text}</p>
            
            </div>
            <div id="arrow">
            <i class="fas fa-chevron-right" id="rightArw"></i>
            </div>
            </div>
            )}
            )
        }
        
        </div>
       
    
    )
}

export default defineSteps;
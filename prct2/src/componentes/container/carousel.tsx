import React, { FC , useState} from 'react';
import './style.css'

const planetas:string[]=[
    "url(https://upload.wikimedia.org/wikipedia/commons/1/1f/As08-16-2593.jpg)",
    "url(https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/article/5d9d91ef5bafe8ada105fa5c/nuevas-lunas1_0.jpg)",
    "url(https://media.nature.com/w700/magazine-assets/d41586-020-01792-w/d41586-020-01792-w_18083440.jpg)",
    "url(https://www.ecestaticos.com/image/clipping/0bae742d376dc184fff36e725aca3854/descubren-una-burbuja-masiva-alrededor-de-urano.jpg)",
    "url(https://cnet4.cbsistatic.com/img/Q-fuW3PmnkN2vipILlm9_zi4N40=/940x0/2019/03/22/227c8ce3-9f76-4ddb-b86d-12e1dafaf999/jupitermarble.jpg)",    
    
]

const Carousel=(): JSX.Element=>{
    const [img,setImage]=useState<string>("");
    const [ind,setInd]= useState(0);
   
    return( 
        <div className="head">
             <h1>PLANETAS</h1>
            <div className="screen">
                <div className="selected" style={{backgroundImage:img}}></div>
            </div>
        <div className="body">
            <div className="carousel">
            <div className="slide"style={{transform:`translate3d(${-ind*100}%,0px,0px)`}}>
                {planetas.map((image,index)=>{
                    return (<div 
                    className="imagen" 
                    key={index} 
                    style={{backgroundImage:image}}
                    onClick={()=>{
                        console.log(window.screen.height);
                        setImage(planetas[index]);
                    }}
                ></div>);
                })}
            </div>
            <div className="button">
                {planetas.map((_,index)=>{
                    return (<div 
                        key={index} 
                        className={`buttons${ind===index ? " on":""}`}
                        onClick={()=>{ setInd(index);}}
                        ></div>);
                })}
            </div>
          </div>
        </div>
       {
       }
        </div>
    );
}

export default Carousel;
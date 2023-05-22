import  {React,  useState } from 'react'
import '../styles/RealEstates.css'
import Categories from '../categories/Categories';







const RealEstates = () =>{
  const [data, setData]= useState(Categories);
  const filterResult=(catItem)=>{
    const result=Categories.filter((curData)=> {
      return curData.category ===catItem;
    });
        setData(result);
    };
    
     
  return(  
    <>
  <h2>Real Estates</h2>
  <div>
  <div className='container'>
    <div className='menu'>
  <h3>Categories</h3>
  <button className='button' onClick={()=>filterResult('Offices')}>Offices</button>
  <button className='button' onClick={()=>filterResult('Apartments')}>Apartments</button>
  <button className='button' onClick={()=>filterResult('Parkings')}>Parkings</button>
  <button className='button' onClick={()=>filterResult('Pantrys')}>Pantrys</button>
  <button className='button' onClick={()=>filterResult('Rent')}>Rent</button>
  <button className='button'onClick={()=>setData(Categories)}>All</button>
    </div>
    {data.map((values)=>{
      const{id,title,price,category,image}=values;
      return (
        <>
        <div className='card-container' key={id} > 
 <div className="card">
  <img src={image} className="card-img" alt=''/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p>{price}</p>
    <p>{category}</p>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary" ><a href='Lac' className='a'>Request form</a></button>
  </div>
  </div>
  </div>
      </>
      )
    })}
  </div>
  </div>
  </>
  )
}

export default RealEstates
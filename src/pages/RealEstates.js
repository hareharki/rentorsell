import  {React,  useState } from 'react'
import '../styles/RealEstates.css'
import Categories from '../categories/Categories';
import {useTranslation} from 'react-i18next';







const RealEstates = () =>{

  const {t}= useTranslation();
  const [data, setData]= useState(Categories);
  const filterResult=(catItem)=>{
    const result=Categories.filter((curData)=> {
      return curData.category ===catItem;
    });
        setData(result);
    };
    
     
  return(  
    <>
  <h2>{t('real_estates')}</h2>
  <div>
  <div className='container'>
    <div className='menu'>
  <h3>{t('categories')}</h3>
  <button className='button' onClick={()=>filterResult('Offices')}>{t('offices')}</button>
  <button className='button' onClick={()=>filterResult('Apartments')}>{t('apartments')}</button>
  <button className='button' onClick={()=>filterResult('Parkings')}>{t('parkings')}</button>
  <button className='button' onClick={()=>filterResult('Pantrys')}>{t('pantrys')}</button>
  <button className='button' onClick={()=>filterResult('Rent')}>{t('rent')}</button>
  <button className='button'onClick={()=>setData(Categories)}>{t('all')}</button>
    </div>
    {data.map((values)=>{
      const{id,title,price,category,image}=values;
      return (
        <>
        <div className='card-container' key={id} > 
 <div className="card">
  <img src={image} className="card-img" alt=''/>
  <div className="card-body">
    <h5 className="card-title">{t('title')}{title}</h5>
    <p> {t('price')}{price}</p>
    <p>{t('category')}{category}</p>
    <p className="card-text">{t('description')}{t('description_of_realestate')}</p>
    <button className="btn btn-primary" ><a href='Lac' className='a'>{t('request_form')}</a></button>
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
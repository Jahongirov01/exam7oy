import React, { useState } from 'react'
const img=[
    "../src/images/image-product-1.jpg",
    "../src/images/image-product-2.jpg",
    "../src/images/image-product-3.jpg",
    "../src/images/image-product-4.jpg",
]
const Home = () => {
    const [Open, setOpen]=useState(false)
   
  
  const handleMenu=()=>{
    setOpen(!Open)
  }
    const [imgI, setImg] = useState(0);
  
    const nextSlide = () => {
      setImg((Index)=>(Index===img.length-1?0:Index+1));
   };
  
    const prevSlide = () => {
      setImg((Index)=>(Index===0?img.length-1:Index-1));
    };
    const [value,setValue]= useState(0)
    
    const hadleplus = ()=>{
        setValue(value+1)
    }
    const hadleminus = ()=>{
        setValue(value-1)
    }
  return (
    <div className="container">
        <svg xmlns="http://www.w3.org/2000/svg" width="138" height="20" viewBox="0 0 138 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M82.2973 10.9554L88.8261 20H83.5998L79.2425 13.9633L76.2223 16.9386V19.9543H72.0351V0H76.2223V11.2226L83.0577 4.46748H88.8847L82.2973 10.9554ZM51.6033 14.5951C51.1726 17.9292 48.48 20 43.3858 20C38.0697 20 35.0497 17.3232 35.0497 12.1544C35.0497 7.0812 38.1465 4.30913 43.3858 4.30913C45.5806 4.30913 47.3254 4.85922 48.637 5.77393V5.76839C51.6343 7.79242 51.903 11.0789 51.6627 13.2081H51.5082L51.5082 13.2092H39.1364C39.4244 15.2853 40.6647 16.3143 43.3858 16.3143C45.8985 16.3143 47.1427 15.615 47.5294 14.5951H51.6033ZM8.21683 20C12.9782 20 15.7358 19.2467 15.7358 15.3935C15.7358 11.9945 12.3557 11.2222 9.07597 10.7123L8.51536 10.6271L8.23701 10.5855L7.88789 10.5332C5.18668 10.1276 4.70681 9.74502 4.70681 9.06204C4.70681 8.5842 5.19774 7.73096 7.54955 7.73096C10.0047 7.73096 11.043 8.37823 11.043 9.60134V9.73506H15.3245V9.60217C15.3245 7.21298 13.9744 4.36394 7.54955 4.36394C1.59817 4.36394 0.348734 6.94831 0.348734 9.11603C0.348734 12.2131 3.11186 13.2017 7.57249 13.7914C7.78257 13.8188 8.00481 13.8454 8.23065 13.872C9.89969 14.0688 11.4032 14.2911 11.4032 15.4575C11.4032 16.4672 9.78802 16.6787 8.10515 16.6787C5.30831 16.6787 4.32121 16.0865 4.32121 14.759V14.6253H0.00210059L0.000442123 14.9265L0 15.2433C0.00845421 16.0334 0.117991 17.1559 1.05693 18.105C2.30277 19.3619 4.71152 20 8.21683 20ZM21.4271 20V12.5096C21.4271 10.4061 21.9736 8.08726 25.6033 8.08726C29.4137 8.08726 29.3856 10.7183 29.3716 12.0247L29.3706 12.1287L29.3701 20H33.551V12.2322C33.5501 9.96844 33.3754 4.46555 26.819 4.46555C24.0412 4.46555 22.627 5.37748 21.6244 6.74594H21.4271V4.46748H17.2205V20H21.4271ZM47.4846 10.4261H39.2972C39.7826 8.85164 41.0605 7.99479 43.3858 7.99479C46.3803 7.99479 47.1407 9.26248 47.4846 10.4261ZM70.499 4.45724V20H66.2905V17.8312H66.1589C65.1088 19.1825 63.3391 20 60.4251 20C53.9161 20 53.1831 14.3213 53.1831 12.2286L53.1839 12.0917C53.2125 9.74991 54.0044 4.45724 60.4369 4.45724C63.3054 4.45724 65.0612 5.36281 66.1141 6.73957L66.2905 6.73957V4.45724H70.499ZM61.6455 16.3766C57.6492 16.3766 57.1984 13.3454 57.1984 12.2286C57.1984 11.0194 57.6235 8.08062 61.6527 8.08062C65.2843 8.08062 66.0273 10.1249 66.0273 12.2286C66.0273 14.5796 65.2851 16.3766 61.6455 16.3766ZM98.7256 20C103.82 20 106.512 17.9292 106.943 14.5951H102.869C102.482 15.615 101.238 16.3143 98.7256 16.3143C96.0045 16.3143 94.7642 15.2853 94.4762 13.2092H106.848V13.2081H107.003C107.243 11.0789 106.974 7.79242 103.977 5.76839V5.77393C102.665 4.85922 100.92 4.30913 98.7256 4.30913C93.4863 4.30913 90.3896 7.0812 90.3896 12.1544C90.3896 17.3232 93.4095 20 98.7256 20ZM94.6371 10.4261H102.824C102.481 9.26248 101.72 7.99479 98.7256 7.99479C96.4004 7.99479 95.1225 8.85164 94.6371 10.4261ZM112.76 20V13.0306C112.76 10.9269 113.691 8.48814 116.81 8.48814C118.14 8.48814 119.203 8.72429 119.595 8.8342L120.265 4.85839C120.188 4.84144 120.109 4.82367 120.028 4.80546L120.028 4.80542C119.345 4.65147 118.519 4.46555 117.508 4.46555C114.843 4.46555 113.886 5.2601 113.022 6.74788H112.76V4.46555H108.551V20H112.76ZM137.5 15.3935C137.5 19.2467 134.742 20 129.981 20C126.476 20 124.067 19.3619 122.821 18.105C121.882 17.1559 121.773 16.0334 121.764 15.2433L121.765 14.9265L121.766 14.6253H126.085V14.759C126.085 16.0865 127.073 16.6787 129.869 16.6787C131.552 16.6787 133.167 16.4672 133.167 15.4575C133.167 14.2911 131.664 14.0688 129.995 13.872C129.769 13.8454 129.547 13.8188 129.337 13.7914C124.876 13.2017 122.113 12.2131 122.113 9.11603C122.113 6.94831 123.362 4.36394 129.314 4.36394C135.739 4.36394 137.089 7.21298 137.089 9.60217V9.73506H132.807V9.60134C132.807 8.37823 131.769 7.73096 129.314 7.73096C126.962 7.73096 126.471 8.5842 126.471 9.06204C126.471 9.74502 126.951 10.1276 129.652 10.5332L130.001 10.5855L130.28 10.6271L130.84 10.7123C134.12 11.2222 137.5 11.9945 137.5 15.3935Z" fill="#1D2026"/>
</svg>
        <img src="./src/images/Oval.png" alt="image" className='images' />

    <span className='span'>{value}</span>     
        
        <div className="list">
<ul>
            <li className='li'>Collections</li>
    <li className='li'>Men</li>
    <li className='li'>Women</li>
    <li className='li'>About</li>
    <li className='li'>Contact</li>
    <img src="./src/images/Group 14.svg" alt="images" className='image' />
        </ul>
       
<div className="br"></div>
<img  onClick={prevSlide} src="./src/images/Group 18 Copy 2.png" alt="" className='Group'/>
<img  onClick={nextSlide} src="./src/images/Group 18 Copy 3.png" alt="" className='Group1'  />
        </div>
        <div className="main_section_images">
                        <img  src={img[imgI]} alt="image" className='main_images' />
            

                                                      <h1 className='main_section_titil'>Sneaker Company</h1>
            <h1 className='section_titil'>Fall Limited Edition <br /> Sneakers</h1>
            <p className='main_section_p'>These low-profile sneakers are your perfect casual wear <br /> companion. Featuring a durable rubber outer sole, they’ll <br /> withstand everything the weather can offer.</p>
            <h1 className='main_section_price'>$125.00</h1>
            <button className='main_section_button'>50%</button>
            <h1 className='main_button'>$250.00</h1>
            <div className="main_buttonn">
<button className='minus' onClick={hadleminus}>-</button>
<div className='zero'> {value}</div> 
<button className='plus' onClick={hadleplus}>+</button>
            </div>
            <div className="section">
                <img src="./src/images/Shape.png" alt="shape" className='section__images' />
                <h1 className='section__titil' onClick={hadleplus}>Add to cart</h1>
            </div>
        </div>
            <div className="Futter_main_images">
                <img src="./src/images/image-product-1-thumbnail.jpg" alt="png" className='img1' />
                <img src="./src/images/image-product-2-thumbnail.jpg" alt="png"  className='img2'/>
                <img src="./src/images/image-product-3-thumbnail.jpg" alt="png"  className='img3'/>
                <img src="./src/images/image-product-4-thumbnail.jpg" alt="png"  className='img4'/>
            </div>
            <div >
            <img src="./src/images/Combined Shape 2.svg" alt="can" className='Combined' onClick={handleMenu} />
            
           
    </div>
    </div>
    
  )
}

export default Home
import React, { useState } from 'react';

const RecommendedGroups = () => {
    const [btnDark,setBtnDark] = useState(false);
    const [btnDark2,setBtnDark2] = useState(false);
    const [btnDark3,setBtnDark3] = useState(false);
    const [btnDark4,setBtnDark4] = useState(false);
    const handleBtnColor = ()=>{
        setBtnDark(true)
     
    }
    const handleBtnColor2 = ()=>{
        setBtnDark2(true)
     
    }
    const handleBtnColor3 = ()=>{
        setBtnDark3(true)
     
    }
    const handleBtnColor4 = ()=>{
        setBtnDark4(true)
     
    }
    return (
        <div className='text-start mt-5'>
         <h4 className='mb-5'>Recommended Groups</h4> 
         <ul className='list-unstyled'>
            <li className='my-3 d-flex justify-content-between'> <div><img src="https://images.unsplash.com/photo-1445307806294-bff7f67ff225?ixlib=rb-1.2.1&w=1200&fit=crop&q=60&fm=jpg&crop=faces%2Cedges&cs=tinysrgb&auto=format&h=630&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-mode=normal&blend-alpha=10&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=000000" alt="img" style={{height:"30px",width:"30px",borderRadius:"50%"}} className="me-2"/> Leisure</div> <button className={`border-0 rounded-pill p-2 ${btnDark?"bg-dark text-light":"bg-light"}`} onClick={handleBtnColor}>{btnDark?"Followed":"Follow"}</button></li>
            <li className='my-3 d-flex justify-content-between'> <div><img src="https://projecthbw.ku.edu/wp-content/uploads/2018/10/m-b-m-774384-unsplash.jpg" alt="img" style={{height:"30px",width:"30px",borderRadius:"50%"}} className="me-2"/> Activism</div> <button className={`border-0 rounded-pill p-2 ${btnDark2?"bg-dark text-light":"bg-light"}`} onClick={handleBtnColor2}>{btnDark2?"Followed":"Follow"}</button></li>
            <li className='my-3 d-flex justify-content-between'> <div><img src="https://www.vestbee.com/_ipx/w_793/https://strapi.vestbee.com/uploads/f5453f8_463d7ec69d.jpg" alt="img" style={{height:"30px",width:"30px",borderRadius:"50%"}} className="me-2"/> MBA</div> <button className={`border-0 rounded-pill p-2 ${btnDark3?"bg-dark text-light":"bg-light"}`} onClick={handleBtnColor3}>{btnDark3?"Followed":"Follow"}</button></li>
            <li className='my-3 d-flex justify-content-between'> <div><img src="https://images.unsplash.com/photo-1528217580778-96e570819666?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80" alt="img" style={{height:"30px",width:"30px",borderRadius:"50%"}} className="me-2"/> Philosophy</div> <button className={`border-0 rounded-pill p-2 ${btnDark4?"bg-dark text-light":"bg-light"}`} onClick={handleBtnColor4}>{btnDark4?"Followed":"Follow"}</button></li>


      
     
           
        
         </ul>
        </div>
    );
};

export default RecommendedGroups;
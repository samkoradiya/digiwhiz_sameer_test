import React,{useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Feature_Tab = () => {

    const [activeKey, setActiveKey] = useState('tab1');

    const handleTabSelect = (key) => {
      setActiveKey(key);
    };


  return (
    <Tabs
    defaultActiveKey="home"
    onSelect={handleTabSelect}
    id="justify-tab-example"
    className="feature-tab"
    justify
  >
    <Tab eventKey="home" title="All">
       <div className='tab_content'>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-1.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div> 
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-2.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-3.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-4.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-5.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-6.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
        
       </div> 
    </Tab>
    <Tab eventKey="Green Building" title="Green Building">
    <div className='tab_content'>
          
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-4.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-5.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-6.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
        
       </div>
    </Tab>
    <Tab eventKey="Healthcare" title="Healthcare">
    <div className='tab_content'>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-1.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div> 
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-2.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-3.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-4.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-5.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-6.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
        
       </div>
    </Tab>
    <Tab eventKey="Interior Design" title="Interior Design">
    <div className='tab_content'>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-1.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div> 
         
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-5.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-6.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
        
       </div>
    </Tab>
    <Tab eventKey="Office" title="Office">
    <div className='tab_content'>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-1.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div> 
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-2.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
          <div className='item'>
             <div className='image'>
                <img src="/images/tab-3.jpg" alt="tab" />
             </div>
             <div className='tab-overlay'>
                <p>ARCHITECTURE AND DESIGN</p>
                <div className='icon'>
                    <a href="#">
                        <img src="/images/plus.jpg" alt="plus icon" />
                    </a>
                    <a href="#">
                        <img src="/images/file.jpg" alt="plus icon" />
                    </a>
                </div>
             </div>
          </div>
       </div>
    </Tab>
  </Tabs>
  )
}

export default Feature_Tab
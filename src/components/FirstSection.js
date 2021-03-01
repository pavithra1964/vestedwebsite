import React, {useState} from 'react';
import '../App.css';
import './Styles.css'
import { Button, message } from "antd";
import Popup from './Popup';

function FirstSection() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
    setIsOpen(!isOpen);
  }
   
  const handlesubmit = () => {
    setIsOpen(!isOpen);
  }

    return (
        <div className="container1">
            <div className="col">
                    <div className="head"><p>Zero Commission US <br />      Investing For<br />
                    <b>Indian Investors</b></p>
                    </div>
                    <p className="desc">Invest in less than one share. open an account in minutes.</p><br />
                     <input className="btn"
                    type="button"
                    value="Start Investing"
                    onClick={togglePopup}
                    />
                    {isOpen && <Popup
                    content={<>
                    <form>
                      <div>
                        <label>Name</label><br />
                      <input type = "name" size="50" placeholder="your Name"></input>
                      </div>
                      <div>
                        <label>Email</label><br/>
                      <input type = "email" size="50" placeholder="your email"></input>
                      </div>
                      <div>
                        <label>Phone Number</label><br />
                      <input type = "phone" size="50" placeholder="your Number"></input>
                      </div>
                      <div>
                        <input className="btn" type="submit" value="Submit" handleClose={togglePopup}/>
                        </div>
                    </form>
                  </>}
                  handleClose={togglePopup}
                  />}<br />
                    <p className="desc1"><b>NRIs can also use our platform.</b>visit our FAQs for more details.</p></div>
                    <div className="phone">
                        <img src="images/VESTED.png"></img>
                    </div>
                </div>
            )
}

export default FirstSection;
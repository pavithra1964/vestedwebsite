import { Button } from "antd";
import React from 'react';
import './Styles.css'

function FifthSection()  {
      

    return (
        <div>
        <div className="container5">
            <div className="con-title">Not ready to invest yet?</div>
            <div><p className="para5">Sign up to receive updates about the US market and investing<br />Insight from Vested.</p></div>
            <div className="email">
            <input type="email" size="70" placeholder="Your email address" />
            <Button className="button4">Subscribe</Button>
            </div>
        </div>
        <div class="container6">Learn more about Vested</div>
      <div><p class="para6">Learn&nbsp;<a className="specific" href="https://vested.co.in/our-story/">about us</a>&nbsp;and check out these&nbsp;<a className="specific" href="https://vested.co.in/faqs/">frequently asked <br />questions</a>.</p>
      </div>

    </div>
    )
}


export default FifthSection;

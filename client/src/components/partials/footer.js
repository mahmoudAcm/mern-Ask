import React, { useEffect } from 'react';
import '../../css/footer.css';
import $ from 'jquery';

const Footer = () => {
    useEffect(() => {
        document.onscroll = (e) => {
            const footerOffset = $("footer").offset();
            const scrollOffset = e.srcElement.scrollingElement.scrollTop;

            console.log(footerOffset, scrollOffset);
            // const foot = document.getElementsByTagName("footer")[0];
            if( footerOffset.top >= scrollOffset){
                foot.setAttribute("class", "footer-is-stikey");
            } else {
                foot.setAttribute("class", "footer-not-stikey");
            }
        }
    });

    return (
        <footer className=''>
             <div className='row'>
                <ul className='col'>
                    <li>About askFm</li>
                    <li>Saftey center</li>
                    <li>Do not sell my presonal information</li>
                    <li>Cookies policy</li>
                </ul>
                <ul className='col'>
                    <li>trems of use</li>
                    <li>parivacy policy</li>
                    <li>Help</li>
                </ul>
             </div>
        </footer>
    );
};

export default Footer;

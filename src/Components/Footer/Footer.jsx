import React from "react";
import PHOTOS from "../Assets/index";
import styled from "styled-components";
import { Link } from 'react-scroll';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const FooterStyles = styled.footer`

    margin-top: 50px;
    height: 250px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: var(--black);
    padding: 20px 0 20px 0;
    color: var(--white);


        img{
        width: 10%;
        height: 40px;
    }



        .quick-links{
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    font-weight: 600;

        li{
    list-style: none;
            

            a{
            font-size: 17px;
            text-decoration: none;
        }

        &:hover{
            color: var(--orange);
        }
    }
}


    .socials{
        width: 15%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 30px;

            .my-soc{
                font-weight: 600;
                font-size: 20px;
            }
    } 

    hr{
        width: 80vw;
        height: 1px;
        background: var(--caloryCard);
        opacity: 0.3;
    }

    small{
        font-size: 14px;
        opacity: .7;

        span{
            color: var(--orange);
            opacity: 1;
        }
    }

@media (max-width: 500px){

        height: 230px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        padding: 20px 0 20px 0;
    
     img{
        width: 30%;
        height: 50px;
    }
    
    
    
    .quick-links{
        width: 90%;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        gap: 0;
        font-weight: 600;

        li{
            list-style: none;

            a{
                font-size: 12px;
                text-decoration: none;
            }
        }
    }

    .socials{
            width: 100%;
            height: 30px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 30px;
            position: relative;
            top: 15px;
            padding-bottom: 10px;

            .my-soc{
                font-weight: 400;
                font-size: 50px;
            }
        } 


        hr{
            width: 90%;
            height: 1px;
            background-color: var(--caloryCard);
        }
    
        small{
            font-size: 14px;
            opacity: .6;
            font-family: 'Poppins', sans-serif;

            span{
                font-size: 14px;
                opacity: 1;
                font-weight: 600;
                color: var(--orange);
            }
        }
}
`;


function Footer(){

        return(
            <FooterStyles className="my-footer">
                <img src={ PHOTOS.LOGO_W } alt="logo" />
                <ul className="quick-links">
                    <li><Link to="/home" >Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="socials">
                    <Link to="/"><FaInstagram className="my-soc" /></Link>
                    <Link to="/"><FaFacebook className="my-soc" /></Link>
                    <Link to="/"><FaWhatsapp className="my-soc" /></Link>
                </div>
                <hr/>
                <small>Developed by <span>Promise Okpoto</span></small>
            </FooterStyles>
        )
};


    

export default Footer;
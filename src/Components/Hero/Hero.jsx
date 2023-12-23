import React from "react";
import PHOTOS from "../Assets/index";
import styled from "styled-components";
import { motion } from 'framer-motion';

const HeroStyles = styled.div`

    width: 90vw;
    height: 75vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 130px;

    .left-hand-side{
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;


        .hype{
            
            width: 100%;
            height: 60px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            position: relative;
            background-color: var(--black);
            border-radius: 40px;

            span{
               
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                background-color: transparent;
                color: var(--white);
                padding: 5px;
                z-index: 3;
                word-spacing: 3px;
            }

            .hype-after{
                width: 90px;
                height: 40px;
                position: absolute;
                transition: all .3s;
                background-color: var(--orange);
                border-radius: 70px;
                z-index: 2;
            }
        }

        h1{
            font-size: 55px;
        }

        p{
            font-size: 20px;
        }

        .cta{
            width: 100%;
            height: 55px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 50px;
            margin-top: 20px;

            :nth-child(2){
                background-color: transparent;
                color:  var(--black);
                border: 2px solid var(--orange);

                    &:hover{
                    background-color: orange;
                    color: black;
                    border: none;
                }
            }
        }

        button{
            background-color: var(--orange);
            color:  var(--white);
            width: 35%;
            height: 100%;
            padding: 2px;
            margin-top: 30px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 5px;
            font-size: 15px;
            cursor: pointer;

            &:hover{
                background-color: orange;
                color: black;
            }
        }
    }

    .right-hand-side{
        width: 35%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .hero-blur{
            width: 20%;
            height: 50%;
            right: 50px;
            top: 250px;
            z-index: 10;
        }

        img{
            width: 100%;
            height: 100%;
            z-index: 6;
        }

        .hero2{
            width: 30%;
            height: 70%;
            position: absolute;
            right: 250px;
            top: 150px;
            z-index: -3;
        }
    }



    @media (max-width: 500px){
        width: 90vw;
        height: 450px;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: flex-end;
        margin-top: 100px;
        gap: 30px;

    .left-hand-side{
        width: 100%;
        height: 55%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;


        .hype{
            width: 100%;
            height: 40px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            position: relative;
            background-color: var(--black);
            border-radius: 40px;
            padding: 5px 0 5px 0;

            span{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                background-color: transparent;
                color: var(--white);
                z-index: 3;
                word-spacing: 3px;
                font-size: 15px;
                padding-left: 20px;
            }

            .hype-after{
                width: 60px;
                height: 27px;
                position: absolute;
                transition: all .3s;
                background-color: var(--orange);
                border-radius: 70px;
                z-index: 2;
            }
        }

        h1{
            font-size: 25px;
        }

        p{
            font-size: 14px;
        }

        .cta{
            width: 100%;
            height: 40px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 50px;
            margin-top: 20px;

            :nth-child(2){
                background-color: transparent;
                color:  var(--black);
                border: 2px solid var(--orange);

                    &:hover{
                    background-color: orange;
                    color: black;
                    border: none;
                }
            }
        }

        button{
            background-color: var(--orange);
            color:  var(--white);
            width: 35%;
            height: 100%;
            padding: 2px;
            margin-top: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 5px;
            font-size: 15px;
            cursor: pointer;

            &:hover{
                background-color: orange;
                color: black;
            }
        }
    }

    .right-hand-side{
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        .hero-blur{
            width: 20%;
            height: 50%;
            right: 50px;
            top: 250px;
            z-index: 10;
        }

        img{
            width: 40%;
            height: 100%;
            z-index: 6;
        }

        .hero2{
            width: 30%;
            height: 30%;
            position: absolute;
            /* right: 450px; */
            /* top: 110px; */
            bottom: 100px;
            z-index: -3;
        }
    }
}
    
`;

function Hero(){

    const transition = {type: 'spring', duration: 3};

        return(
            <HeroStyles className="hero-section" id="hero">
                <div className="left-hand-side">
                    <div className="hype">
                        <motion.div
                            className='hype-after'
                            initial = {{ left: '90%'}}
                            whileInView = {{left: '5%'}}
                            transition = {{...transition, type: 'tween'}}
                        >
                        </motion.div>
                        <span>The best fitness center in town</span>
                    </div>
                    <div>
                        <h1><span>SHAPE</span> YOUR IDEAL BODY</h1>
                    </div>
                    <p>Here we will help you to build your ideal body and live your life to fullest.</p>
                    <div className="cta">
                        <button>Get Started</button>
                        <button>Leran More</button>
                    </div>
                </div>
        
                <div className="right-hand-side">
                    <div className="blur hero-blur"></div>
                    <img src={PHOTOS.HERO} alt=""/>
                    <motion.img src={PHOTOS.HERO2} alt="" 
                        initial = {{ left: '2%'}}
                        whileInView = {{left: '52%'}}
                        transition = {{...transition, type: 'tween'}}
                        className="hero2" 
                    />
                </div>
            </HeroStyles>
        )
};


    

export default Hero;
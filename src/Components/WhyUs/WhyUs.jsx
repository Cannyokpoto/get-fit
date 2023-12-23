import React from "react";
import PHOTOS from "../Assets/index";
import styled from "styled-components";

const WhyStyles = styled.div`

    width: 90vw;
    height: 75vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 250px;

    .left-hand-side{
        width: 55%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;


        img{
            width: 100%;
            height: 100%;
        }

}


    .right-hand-side{
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        span{
            color: var(--orange);
        }

        h1{
            font-size: 40px;
        }

        p{
            font-size: 15px;
            }

        .reasons{
            width: 100%;
            height: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;

                .reason{
                width: 100%;
                height: 50px;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 20px;

                img{
                    width: 10%;
                    height: 100%;
                }

                p{
                    font-size: 17px;
                }
            }
        }
    }

    @media (max-width: 500px){
    
        width: 90vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 100px;

    .left-hand-side{
        width: 80%;
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;


        img{
            width: 100%;
            height: 100%;
        }

}


    .right-hand-side{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        h1{
            font-size: 25px;
        }

        p{
            font-size: 15px;
            }

        .reasons{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;

                .reason{
                width: 100%;
                height: 40px;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 20px;

                img{
                    width: 10%;
                    height: 80%;
                }

                p{
                    font-size: 17px;
                }
            }
        }
    }
}
`;

function WhyUs(){

        return(
            <WhyStyles className="hero-section" id="why-us">
        
                <div className="left-hand-side">
                    <img src={PHOTOS.Why} alt=""/>
                </div>

                <div className="right-hand-side">
                    <h1>WHY CHOOSE US?</h1>
                    <div className="reasons">
                        <div className="reason">
                            <img src={PHOTOS.checked} alt="" />
                            <p>OVER 140+ EXPERT COACHS</p>
                        </div>

                        <div className="reason">
                            <img src={PHOTOS.checked} alt="" />
                            <p>TRAIN SMARTER AND FASTER THAN BEFORE</p>
                        </div>

                        <div className="reason">
                            <img src={PHOTOS.checked} alt="" />
                            <p>1 FREE PROGRAM FOR NEW MEMBER</p>
                        </div>

                        <div className="reason">
                            <img src={PHOTOS.checked} alt="" />
                            <p>RELIABLE PARTNERS</p>
                        </div>
                    </div>
                </div>
            </WhyStyles>
        )
};


    

export default WhyUs;
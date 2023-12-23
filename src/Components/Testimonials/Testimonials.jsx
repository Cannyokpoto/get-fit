import React from "react";
import styled from "styled-components";
import { testimonialsData } from "../Data/testimonialsData";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';


const TestimonialsStyles = styled.div`

    width: 90vw;
    height: 75vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 250px;

    .left-hand-side{
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: relative;

        .border{
            width: 75%;
            height: 350px;
            border: 2px solid var(--orange);
            position: absolute;
        }
        .layer{
            width: 75%;
            height: 350px;
            background: var(--planCard);
            position: absolute;
            bottom: 90px;
            right: 20px;
            z-index: 3;
        }

        img{
            width: 75%;
            height: 350px;
            position: absolute;
            bottom: 110px;
            right: 40px;
            z-index: 4;
        }

         .arrows{
            width: 79%;
            height: 50px;
            position: absolute;
            bottom: 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 40px;

            .arrow{
                width: 30px;
                height: 30px;
                cursor: pointer;
                padding: 3px;

                &:hover{
                    background-color: var(--orange);
                    color: var(--white);
                }
            }
        }

}


    .right-hand-side{
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        span{
            color: var(--orange);
        }

        .testimony{
            width: 100%;
            height: 100px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 20px;

            .customer{
                width: 100%;
                height: 50px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: 10px;

                h5{
                    font-size: 17px;
                }

                span{
                    font-size: 17px;
                }
            }
        }

        h1{
            font-size: 40px;
            text-align: left;
            width: 70%;
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
        gap: 30px;
        margin-top: 50px;

    .left-hand-side{
        width: 100%;
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        margin-top: 50px;

        .border{
            width: 75%;
            height: 250px;
            border: 2px solid var(--orange);
            position: absolute;
            bottom: 130px;
        }
        .layer{
            width: 75%;
            height: 250px;
            background: var(--planCard);
            position: absolute;
            bottom: 90px;
            right: 20px;
            z-index: 3;
        }

        img{
            width: 75%;
            height: 250px;
            position: absolute;
            bottom: 110px;
            right: 40px;
            z-index: 4;
        }

         .arrows{
            width: 79%;
            height: 50px;
            position: absolute;
            bottom: 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 40px;

            .arrow{
                width: 25px;
                height: 25px;
                cursor: pointer;
                padding: 0;

                &:hover{
                    background-color: var(--orange);
                    color: var(--white);
                }
            }
        }

}


    .right-hand-side{
        width: 100%;
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        span{
            color: var(--orange);
        }

        .testimony{
            width: 100%;
            height: 100px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 20px;

            .customer{
                width: 100%;
                height: 50px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: 10px;

                h5{
                    font-size: 17px;
                }

                span{
                    font-size: 17px;
                }
            }
        }

        h1{
            font-size: 25px;
            text-align: left;
            width: 70%;
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

}
`;

function Testimonials(){
    const transition = {type: 'spring', duration: 3};

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

        return(
            <TestimonialsStyles className="testimonials" id="testimonials">
        
                <div className="right-hand-side">
                    <span>TESTIMONIALS</span>
                    <h1>WHAT THEY SAY ABOUT US</h1>
                    <div className="testimony">
                        <motion.p
                            key = {selected}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={transition}
                        >
                            {testimonialsData[selected].review}
                        </motion.p>
                        <div className="customer">
                            <h5>{testimonialsData[selected].name}</h5>
                            <div>-</div>
                            <span>{testimonialsData[selected].status}</span>
                        </div>
                    </div>
                </div>

                <div className="left-hand-side">
                    <motion.div className="border"
                        initial = {{ opacity: 0, left: '-30%'}}
                        whileInView = {{ opacity: 1, left: '10%'}}
                        transition = {{...transition, type: 'tween'}}
                    ></motion.div>
                    <motion.div className="layer"
                        initial = {{ opacity: 0, left: '50%'}}
                        whileInView = {{ opacity: 1, left: '21%'}}
                        transition = {{...transition, type: 'tween'}}
                    ></motion.div>
                    <motion.img src={testimonialsData[selected].image} alt=""
                        key = {selected}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={transition}
                    />
                    <div className="arrows">
                        <FaArrowLeft className="arrow" 
                            onClick={() => {
                                selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev -1);
                            }}
                        />
                        <FaArrowRight className="arrow" 
                            onClick={() => {
                                selected === tLength -1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1);
                            }}
                        />
                    </div>
                </div>
            </TestimonialsStyles>
        )
};


    

export default Testimonials;

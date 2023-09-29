import React from "react";



const Banner = (props) => {
    const { divbanner, img, text } = props;
    return (
        <div className={`banner ${divbanner}`}>
            <img className="image_banner" src={img} alt='background img' />
            <p className="text1_home">{text}</p>
        </div>
    )
};





export default Banner;
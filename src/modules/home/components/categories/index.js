/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import useStyles from './styles';

const Categories = () => {
    const styles = useStyles();
    const categories = useSelector((state) => state.categories);
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    return (
        <div className={styles.categoriesSlider}>
            <Slider {...sliderSettings}>
                {categories.map((category, i) => (
                    <div style={{display: 'inline-block'}} key={i}>
                        <div>
                            <img
                                src={category.imageUrl}
                                alt=""
                                className={styles.slideImage}
                            />
                        </div>
                        <div className={styles.slideName}>
                            {category.name}
                        </div>
                    </div>
                ))}
            </Slider>
      </div>
    );
};

export default Categories;
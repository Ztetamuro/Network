import React from "react";
import classes from "./Content.module.css";
import MyPosts from "./myPosts/MyPosts";
const Content = () => {
return (
    <div>
        <img
        src="https://image-skincare.ru/wa-data/public/photos/83/06/683/683.1200.jpg"
        alt=""
        />
        <div>ava + description</div>
        <MyPosts />
    </div>
);
};

export default Content;

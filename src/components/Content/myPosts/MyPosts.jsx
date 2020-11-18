import React from "react";
import classes from "./myPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button> Добавить пост</button>
      </div>
      <div className={classes.posts}>
        <Post message = "Привет, котик" likesCount=" 3"/>
        <Post />
      </div>{" "}
    </div>
  );
};

export default MyPosts;

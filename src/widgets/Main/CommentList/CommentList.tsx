import React from "react";
import classes from "./CommentList.module.scss";

interface Comment {
  id: number;
  text: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className={classes.commentList}>
      <h3>All comments:</h3>
      <ul>
        {comments.length > 0 ? (
          comments.map((comment) => <li key={comment.id}>{comment.text}</li>)
        ) : (
          <p>комментариев пока нет</p>
        )}
      </ul>
    </div>
  );
};

export default CommentList;

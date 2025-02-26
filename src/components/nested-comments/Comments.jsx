import { useState } from "react";
import CommentBox from "./CommentBox";
import { initialData } from "./comments.db";

const RedditComments = () => {
  const [allComments, setAllComments] = useState(initialData);

  const insertNode = (comments, commentId, newComment) => {
    return comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [newComment, ...comment.replies],
        };
      } else if (comment?.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: insertNode(comment.replies, commentId, newComment),
        };
      }

      return comment;
    });
  };

  const updateCount = (tree, commentId, type) => {
    return tree?.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          [type]: comment[type] + 1,
        };
      } else if (comment?.replies && comment?.replies?.length > 0) {
        return {
          ...comment,
          replies: updateCount(comment.replies, commentId, type),
        };
      }

      return comment;
    });
  };

  const updateUpvoteCount = (commentId) => {
    setAllComments(updateCount(allComments, commentId, "upvotes"));
  };

  const updateDownvoteCount = (commentId) => {
    setAllComments(updateCount(allComments, commentId, "downvotes"));
  };

  const insertComment = (commentId, content, username) => {
    const newComment = {
      id: Date.now(),
      username,
      comment: content,
      upvotes: 0,
      downvotes: 0,
      replies: [],
    };

    if (commentId) {
      setAllComments(insertNode(allComments, commentId, newComment));
    } else {
      setAllComments((prevComments) => [newComment, ...prevComments]);
    }
  };

  return (
    <div>
      <CommentBox
        data={allComments}
        insertComment={insertComment}
        updateUpvoteCount={updateUpvoteCount}
        updateDownvoteCount={updateDownvoteCount}
      />
    </div>
  );
};

export default RedditComments;

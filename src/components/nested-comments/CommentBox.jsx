import CommentCard from "./CommentCard";

/* eslint-disable react/prop-types */
const CommentBox = ({
  data,
  insertComment,
  updateDownvoteCount,
  updateUpvoteCount,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {data?.map((com) => {
        return (
          <CommentCard
            key={com.id}
            com={com}
            insertComment={insertComment}
            updateUpvoteCount={updateUpvoteCount}
            updateDownvoteCount={updateDownvoteCount}
          />
        );
      })}
    </div>
  );
};

export default CommentBox;

/* eslint-disable react/prop-types */

import { useState } from "react";
import CommentBox from "./CommentBox";

const CommentCard = ({
  com,
  insertComment,
  updateDownvoteCount,
  updateUpvoteCount,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [comment, setComment] = useState(com.comment);
  const [isReply, setIsReply] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  return (
    <div>
      <div className="px-2">
        <div className="bg-gray-200 p-2 rounded-md">
          <div className="flex items-center gap-1">
            <img
              src="https://styles.redditmedia.com/t5_4eiixu/styles/profileIcon_snooa2568158-0f21-46be-9122-084f65c92086-headshot-f.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=c77b1ee7ee26499bbc8901522d0d061e8c77e7cb"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
            <p className="font-semibold text-blue-800">{com.username}</p>
          </div>
          {isEdit ? (
            <textarea
              className="w-full p-2 ml-4 mt-2 border focus-within:outline-blue-500"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          ) : (
            <p className="ml-4 mt-2">{com.comment}</p>
          )}
        </div>

        <div className="flex items-center gap-1 mt-2">
          <button
            onClick={() => updateUpvoteCount(com.id)}
            className="cursor-pointer bg-blue-200 p-1 px-2 rounded-md"
          >
            <span>⬆️</span>
            <span>{com.upvotes}</span>
          </button>
          <button
            onClick={() => updateDownvoteCount(com.id)}
            className="cursor-pointer bg-blue-200 p-1 px-2 rounded-md"
          >
            <span>⬇️</span>
            <span>{com.downvotes}</span>
          </button>
          <button
            onClick={() => setIsReply(!isReply)}
            className="cursor-pointer bg-blue-200 p-1 px-4 rounded-md"
          >
            Reply
          </button>
          <button
            onClick={() => setIsEdit(!isEdit)}
            className="cursor-pointer bg-blue-200 p-1 px-4 rounded-md"
            title={isEdit ? "Save" : "Edit"}
          >
            {isEdit ? "✔️" : "✏️"}
          </button>
        </div>
        {isReply && (
          <div className="ml-4 mt-2">
            <textarea
              className="w-full p-2 border rounded-md focus-within:outline-blue-500"
              name="comment"
              value={replyContent}
              autoFocus
              onChange={(e) => setReplyContent(e.target.value)}
            />
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  insertComment?.(com?.id, replyContent, "test_niket");
                  setIsReply(false);
                  setIsOpen(true);
                }}
                className="cursor-pointer bg-blue-200 p-1 px-4 rounded-md"
              >
                {" "}
                Post Reply
              </button>
              <button
                onClick={() => setIsReply(false)}
                className="cursor-pointer bg-blue-200 p-1 px-4 rounded-md"
              >
                {" "}
                Cancel
              </button>
            </div>
          </div>
        )}
        {com?.replies?.length > 0 && (
          <button
            className="cursor-pointer border rounded-full w-6 h-6 mt-2 text-sm flex justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
            title={isOpen ? "Collapse" : "Expand"}
          >
            {isOpen ? "➖" : "➕"}
          </button>
        )}
      </div>
      {com?.replies?.length > 0 && isOpen && (
        <div className="ml-5 pl-5 border-l-1">
          <CommentBox
            data={com.replies}
            insertComment={insertComment}
            updateUpvoteCount={updateUpvoteCount}
            updateDownvoteCount={updateDownvoteCount}
          />
        </div>
      )}
    </div>
  );
};

export default CommentCard;

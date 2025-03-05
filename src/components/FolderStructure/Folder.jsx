/* eslint-disable react/prop-types */

import { useState } from "react";

const Folder = ({ explorer, addFile, addFolder }) => {
  const [isExpand, setIsExpand] = useState(false);
  const [showInut, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const [input, setInput] = useState("");

  const isFolder = explorer.isFolder;

  const handleFolder = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder,
    });
    setIsExpand(true);
  };

  const addInputHandler = (id) => {
    if (input) {
      if (showInut.isFolder) {
        addFolder(id, input);
      } else {
        addFile(id, input);
      }
      setInput("");
    }
    setShowInput({
      visible: false,
      isFolder: null,
    });
  };

  return isFolder ? (
    <div className="flex flex-col">
      <button
        onClick={() => {
          setIsExpand((prev) => !prev);
        }}
        className="bg-gray-400 mt-2 cursor-pointer w-fit px-4 py-2 rounded-md flex items-center gap-4"
      >
        <span>📁 {explorer?.name}</span>
        <span className="ml-2">
          <span
            role="button"
            onClick={(e) => handleFolder(e, true)}
            className="cursor-pointer"
          >
            📁
          </span>
          <span
            role="button"
            onClick={(e) => handleFolder(e, false)}
            className="cursor-pointer"
          >
            📄
          </span>
        </span>
      </button>
      {showInut?.visible && (
        <div className="ml-2 pl-4 mt-4 mb-2">
          <span className="bg-gray-400 my-2 w-fit px-4 py-2 rounded-md">
            {showInut?.isFolder ? "📁" : "📄"}
            <input
              type="text"
              placeholder="New File"
              className="border-none outline-none w-28"
              autoFocus
              onBlur={() => addInputHandler(explorer.id)}
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </span>
        </div>
      )}
      {isExpand && !!explorer?.items?.length && (
        <div className="ml-2 pl-4 border-l-2 border-black/30">
          {explorer?.items?.map((item) => {
            return (
              <Folder
                key={item.id}
                explorer={item}
                addFile={addFile}
                addFolder={addFolder}
              />
            );
          })}
        </div>
      )}
    </div>
  ) : (
    <div className="bg-gray-400 my-2 w-fit px-4 py-2 rounded-md">
      📄{explorer?.name}
    </div>
  );
};

export default Folder;

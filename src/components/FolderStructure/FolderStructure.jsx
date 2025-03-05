import { useState } from "react";
import { initialExplorer } from "./data";
import Folder from "./Folder";

const FolderStructure = () => {
  const [explorer, setExplorer] = useState(initialExplorer);

  const insertNode = (tree, node, folderId) => {
    if (tree?.id === folderId) {
      return { ...tree, items: [node, ...tree.items] };
    } else if (tree?.isFolder) {
      return {
        ...tree,
        items: tree.items.map((item) => {
          return insertNode(item);
        }),
      };
    }
    return tree;
  };

  const addFile = (folderId, fileName) => {
    const newFileData = {
      id: Date.now(),
      name: fileName,
      isFolder: false,
    };
    setExplorer(insertNode(explorer, newFileData, folderId));
  };

  const addFolder = (folderId, folderName) => {
    const newFileData = {
      id: Date.now(),
      name: folderName,
      isFolder: true,
      items: [],
    };
    setExplorer(insertNode(explorer, newFileData, folderId));
  };

  return <Folder explorer={explorer} addFile={addFile} addFolder={addFolder} />;
};

export default FolderStructure;

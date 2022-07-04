import React from "react";
import TreeComp from "./components/TreeComp";
// eslint-disable-next-line
import { data, exampleData } from "./dummy-data";
import { createTree } from "./utils";
import "./index.css";

const App = () => {
  const treeData = createTree(exampleData);

  const onSelect = (selectedKeysValue, info) =>{
    console.log('onSelect', info);
  }
  const onExpand = (expandedKeysValue) =>{
    console.log('onExpand', expandedKeysValue);
  }
  const onCheck = (checkedKeysValue) =>{
    console.log('onCheck', checkedKeysValue);
  }
  return (
      <TreeComp treeData={treeData} onSelect={onSelect} onExpand={onExpand} onCheck={onCheck}/>
  );
};

export default App;

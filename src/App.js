import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { data } from "./data";
import { Tree } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

function createTree(list) {
  let map = {},
    node,
    roots = [];

  for (let i = 0; i < list.length; i += 1) {
    map[list[i].title] = i; // initialize the map
    list[i].children = []; // initialize the children
  }

  for (let i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId !== null) {
      // if you have dangling branches check that map[node.key] exists
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
}

const App = () => {
  const treeData = createTree(
    data.map((item) => ({ ...item, key: item.title }))
  );

  return (
    <div className="treeWrapper">
      <Tree
        switcherIcon={({ expanded }) => (
          <>{expanded ? <MinusCircleOutlined /> : <PlusCircleOutlined />}</>
        )}
        checkable
        showLine={{ showLeafIcon: false }}
        treeData={treeData}
      />
    </div>
  );
};

export default App;

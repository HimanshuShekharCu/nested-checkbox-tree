import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Tree } from "antd";
import { useState } from "react";
const data = [
  {
    title: "Sports",
    key: null,
  },
  {
    title: "Soccer",
    key: null,
  },
  {
    title: "Rugby",
    key: null,
  },
  {
    title: "IPL",
    key: "Sports",
  },
  {
    title: "EPL",
    key: "Sports",
  },
  {
    title: "NBA",
    key: "Sports",
  },
  {
    title: "Mumbai Indians",
    key: "IPL",
  },
  {
    title: "gyug",
    key: "Mumbai Indians",
  },
  {
    title: "gyug",
    key: "Rajasthan Royals",
  },
  {
    title: "gyug",
    key: "Gujarat Titans",
  },
  {
    title: "Rajasthan Royals",
    key: "IPL",
  },
  {
    title: "Gujarat Titans",
    key: "IPL",
  },
  {
    title: "Arsenal",
    key: "EPL",
  },
  {
    title: "Chelsea",
    key: "EPL",
  },
  {
    title: "Manchester United",
    key: "EPL",
  },
];
const App = () => {
  const [expandedKeys, setExpandedKeys] = useState(["0-0-0", "0-0-1"]);
  const [checkedKeys, setCheckedKeys] = useState(["0-0-0"]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  function createTree(list) {
    var map = {},
      node,
      roots = [],
      i;

    for (i = 0; i < list.length; i += 1) {
      map[list[i].title] = i; // initialize the map
      list[i].children = []; // initialize the children
    }

    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.key !== null) {
        // if you have dangling branches check that map[node.key] exists
        list[map[node.key]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
  debugger;
  const treeData = createTree(data);

  const onExpand = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  const onSelect = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <div className="treeWrapper">
      <Tree
        showLine
        checkable
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        onSelect={onSelect}
        selectedKeys={selectedKeys}
        treeData={treeData}
      />
    </div>
  );
};

export default App;

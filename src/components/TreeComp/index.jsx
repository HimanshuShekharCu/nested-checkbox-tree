import { Tree } from "antd";
import "antd/dist/antd.css";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import "./styles.css";

const TreeComp = ({treeData, onSelect, onExpand, onCheck})=>{
   return(
    <div className="treeWrapper">
    <Tree
        switcherIcon={({ expanded }) => (
          <>{expanded ? <MinusCircleOutlined /> : <PlusCircleOutlined />}</>
        )}
        checkable
        onSelect={onSelect}
        onExpand={onExpand}
        onCheck={onCheck}
        showLine={{ showLeafIcon: false }}
        treeData={treeData}
      />
      </div>
   )
}

export default TreeComp;
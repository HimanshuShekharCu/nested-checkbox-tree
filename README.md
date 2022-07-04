# Nested Checkbox

A setup to create a nested checkbox from a given flat array of objects with title and parentId pairs.,

## Installation

The setup can be utilized in your preferred way. You can either use the direct link for the file for downloading or clone it with git repo link.

## Utility function "createTree"
You can use utility function of createNode which accepts array of object in following way (inputParameterArray) as an argumnet and return nested tree of nodes that can be used to feed any library creating UI for a tree of nodes.

```
const inputParameterArray = [
  {
    title: "0-0",
    parentId: null,
  },
  {
    title: "0-1",
    parentId: null,
  },
   {
    title: "0-0-1",
    parentId: 0-0,
  }
 ]

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
const treeData = createTree(
    inputParameterArray.map((item) => ({ ...item, key: item.title }))
  );
```

## Using the output of utility function

You can feed this returned data array to any checkbox tree maker library to create nested checkbox UI.

```
    <Tree
        switcherIcon={({ expanded }) => (
          <>{expanded ? <MinusCircleOutlined /> : <PlusCircleOutlined />}</>
        )}
        checkable
        showLine={{ showLeafIcon: false }}
        treeData={treeData}
      />
 ```
 
 ## Results
 
 <img width="413" alt="image" src="https://user-images.githubusercontent.com/24574845/177083971-3ecdb5f6-e41f-4d9b-badc-a1230bb32a89.png">
<img width="279" alt="image" src="https://user-images.githubusercontent.com/24574845/177084080-45ca1b6e-4b50-4494-9489-1e0849fc9bd6.png">

 
## Credits

- [Himanshu Shekhar](https://github.com/HimanshuShekharCu)

## Contributing

Please feel free to contribute by submitting a pull request to enhance the functionalities. I will appreciate that a lot. Also please add your name to the credits.

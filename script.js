//1

let nodes = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 2 },
  { id: 6, parentId: 3 },
  { id: 7, parentId: 4 },
  { id: 8, parentId: 7 },
  { id: 9, parentId: 8 },
];

let tree1 = {};
nodes.forEach((node) => {
  if (node.parentId === null) {
    tree1[node.id] = {};
  } else {
    let parentId = node.parentId;
    let childId = node.id;
    if (!tree1[parentId]) {
      tree1[parentId] = {};
    }
    tree1[parentId][childId] = {};
  }
});

console.log(tree1);

// ------------------------

function helloDecorator(fn) {
  return function (...args) {
    console.log("hello this is dec");
    return fn.apply(this, args);
  };
}

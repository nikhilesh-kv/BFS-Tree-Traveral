var tree = [{"k":10,"v":[{"k":1,"v":[{"k":3,"v":[{"k":2,"v":[]},{"k":5,"v":[{"k":9,"v":[]}]}]},{"k":4,"v":[]}]},{"k":3,"v":[{"k":6,"v":[]},{"k":8,"v":[{"k":4,"v":[]},{"k":7,"v":[]}]}]}]}];
var queue = [], count = 0, found = false;
function parseTree(treeData, searchKey) {
  treeData.forEach(function(node) {
    queue.push(node);
  });
  found = findElement(searchKey);
  if(found) {
    document.getElementById('output').innerHTML = 'Node found after :' + (count+1) + " searches";
    clearVariables();
    return true;
  } else if(found === false)
      document.getElementById('output').innerHTML = 'Node not found';
      clearVariables();

};
function findElement(searchKey) {
  var currentNode = queue.shift();
  console.info(currentNode);
  if(!currentNode) {
    return false;
  }
  if(currentNode.k == searchKey) {
    return true;
  } else {
    count++;
    parseTree(currentNode.v, searchKey);
  }
};

function clearVariables() {
  count = 0, queue = [], found = false;
}

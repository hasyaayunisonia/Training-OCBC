function getMinimumCostMST(
  graph_nodes,
  graph_from,
  graph_to,
  graph_weight,
  source,
  destination
) {
  const parent = Array.from({ length: graph_nodes + 1 }, (_, idx) => idx);

  function find(u) {
    if (parent[u] !== u) {
      parent[u] = find(parent[u]);
    }
    return parent[u];
  }

  function union(u, v) {
    const rootU = find(u);
    const rootV = find(v);
    if (rootU === rootV) return false;
    parent[rootV] = rootU;
    return true;
  }

  const edges = [];
  for (let i = 0; i < graph_from.length; i++) {
    edges.push([graph_weight[i], graph_from[i], graph_to[i]]);
  }
  edges.sort((a, b) => a[0] - b[0]);

  const mstEdges = [];
  let totalCost = 0;

  for (const [weight, u, v] of edges) {
    if (union(u, v)) {
      mstEdges.push([u, v, weight]);
      totalCost += weight;
    }
  }

  const adj = Array.from({ length: graph_nodes + 1 }, () => []);
  for (const [u, v, w] of mstEdges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const visited = new Set();
  function dfs(node) {
    if (node === destination) return true;
    visited.add(node);
    for (const neighbor of adj[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) return true;
      }
    }
    return false;
  }

  if (dfs(source)) {
    return totalCost;
  } else {
    return -1;
  }
}

const graph_nodes = 3;
const graph_from = [1, 2, 1];
const graph_to = [2, 3, 3];
const graph_weight = [5, 3, 4];
const source = 1;
const destination = 3;

console.log(
  getMinimumCostMST(
    graph_nodes,
    graph_from,
    graph_to,
    graph_weight,
    source,
    destination
  )
);

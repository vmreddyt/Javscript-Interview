console.log('=====================Graph===========');
// Adjacency Matrix
const matrixx = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]
console.log(matrixx[0][1]);
// Adjacency List
const adjacencyList = {
    a: ['b'],
    b: ['a', 'c'],
    c: ['b']
}

class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2){
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
    display(){
        for (const vertex in this.adjacencyList) {
            console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]]);
        }
    }
    hasEdge(vertex1, vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }
    removaEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            return;
        }
        for (let adjacencentVertex of this.adjacencyList[vertex]) {
            this.removaEdge(vertex, adjacencentVertex)
        }
        delete this.adjacencyList[vertex]
    }
}
const graph = new Graph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge('A', "B")
graph.addEdge('B', "C")
console.log(graph.hasEdge('A', "B"));
console.log(graph.hasEdge('A', "C"));
// graph.removaEdge('A', "B")
graph.removeVertex("B")
graph.display()
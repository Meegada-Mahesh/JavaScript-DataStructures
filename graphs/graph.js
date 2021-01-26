class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return null;
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        console.log(this.adjacencyList);
        return this.adjacencyList
    }

    removeEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return null;
        
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        )
        return this.adjacencyList
    }

    removeVertex(vertex){
        var cities = this.adjacencyList[vertex]
        console.log(cities)
        for(const city of cities){
            this.removeEdge(vertex,city)
        }
        delete this.adjacencyList[vertex]
    }
}

var g = new Graph();

g.addVertex("Vizag");
g.addVertex("Hyderabad");
g.addVertex("Mumbai");
g.addVertex("USA");
g.addVertex("Delhi");

g.addEdges("Vizag","Hyderabad");
g.addEdges("Mumbai","Delhi");
g.addEdges("Mumbai","Hyderabad");

// console.log(g);

g.removeEdge("Mumbai", "Hyderabad");
g.addEdges("USA","Hyderabad");
g.addEdges("Mumbai","USA");
g.addEdges("Mumbai","Hyderabad");
// console.log(g);

g.removeVertex("Mumbai");

console.log(g)
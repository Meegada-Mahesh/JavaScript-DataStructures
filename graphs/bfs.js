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

    bfs(start){
       let queue = [], 
           result = [];
       let vertex;
       let visited = {};

       visited[start] = true;
       queue.push(start);

       while(queue.length){
        vertex = queue.shift();
        result.push(vertex);
        for(const neigh of this.adjacencyList[vertex]){
            if(!visited[neigh]){
                visited[neigh] = true;
                queue.push(neigh)
            }
        }
       }
       console.log("Result  is ",result);
       return result;
    }
}

var g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdges("A","B");
g.addEdges("A","C");
g.addEdges("B","D");
g.addEdges("C","E");
g.addEdges("D","E");
g.addEdges("D","F");
g.addEdges("E","F");

console.log(g)
g.bfs("A");
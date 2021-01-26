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

    dfsrecursive(start){
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;
        traverse(start);
        function traverse(vertex){
            if(!adjacencyList[vertex]) return null;
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            let neighbours = adjacencyList[vertex];
            for(const neigh of neighbours){
                if(!(neigh in visited)) traverse(neigh);
            }
        }
        console.log("Result is ",result)
        return result;
    }

    dfsiterative(start){
        let stack = [start];
        let visited = {};
        let result = [];
        let vertex;
        visited[start] = true;
        while(stack.length){
            vertex = stack.pop();
            result.push(vertex); 
            let neighbours = this.adjacencyList[vertex];
            for(const neigh of neighbours){
                if(!visited[neigh]){
                    visited[neigh] = true;
                    stack.push(neigh);
                }
            }
        }
        console.log("Iterative result is ",result);
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

g.dfsrecursive("A");
g.dfsiterative("A");
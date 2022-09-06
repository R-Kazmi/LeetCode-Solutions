




//given a integer n representing the number of courses, and a 2D array of integers representing the prerequisites, 
//determines if it is possible to take all courses.
//prerequisites[i][0] is the course that must be taken before taking prerequisites[i][1]
//we have check to check if there exists a cycle in the graph

const courseSchedule = (n, prerequisites) => {
    let graph = new Map();
    let id = new Array(n).fill(0);
    let q = [];
    let result = true;
    for (let i = 0; i < prerequisites.length; i++) {
        let [course, prerequisite] = prerequisites[i];
        if (!graph.has(course)) {
            graph.set(course, []);
        }
        graph.get(course).push(prerequisite);
        id[prerequisite]++;
    }
    for (let i = 0; i < id.length; i++) {
        if (id[i] === 0) {
            q.push(i);
        }
    }
    while (q.length > 0) {
        let course = q.shift();
        for (let i = 0; i < graph.get(course)?.length; i++) {
            let prerequisite = graph.get(course)[i];
            id[prerequisite]--;
            if (id[prerequisite] === 0) {
                q.push(prerequisite);
            }
        }
    }
    for (let i = 0; i < id.length; i++) {
        if (id[i] !== 0) {
            result = false;
            break;
        }
    }
    return result;
}

let n = 6;
let prerequisites = [[3, 0], [1, 3], [2, 1], [4, 1], [4, 2], [5, 3], [5, 4]];
console.log(courseSchedule(n, prerequisites));
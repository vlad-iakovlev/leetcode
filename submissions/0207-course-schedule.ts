function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph = Array.from({ length: numCourses }).map(() => [] as number[]);
  const indegree = Array.from({ length: numCourses }).map(() => 0);
  for (let [course, dependsOn] of prerequisites) {
    graph[dependsOn].push(course);
    indegree[course]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (!indegree[i]) queue.push(i);
  }

  let nodesLeft = numCourses;
  while (queue.length) {
    nodesLeft--;
    const i = queue.pop()!;
    for (let j of graph[i]) {
      indegree[j]--;
      if (!indegree[j]) queue.push(j);
    }
  }

  return !nodesLeft;
}

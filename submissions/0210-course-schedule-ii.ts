function findOrder(numCourses: number, prerequisites: number[][]): number[] {
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

  const order: number[] = [];
  while (queue.length) {
    const i = queue.pop()!;
    order.push(i);
    for (let j of graph[i]) {
      indegree[j]--;
      if (!indegree[j]) queue.push(j);
    }
  }

  if (order.length !== numCourses) return [];
  return order;
}

import { Projects } from "../../../../src/project/all"

export default function WorkPage({ 
  params,
 } : {
  params: { projectId: string};
 }) {
  const projects = Projects.filter(p => p.id === [params.projectId])
  console.log(Projects)
  if (projects.length > 0) {
    return <div>
      <h1>Work: {projects[0].id}</h1>
    </div>
  } else {
    return <div>
      <h1>This project does not exist</h1>
    </div>

  }
}
import { api } from "../../api"
import { Project } from "./types";
    
class ProjectService {
    async getAllProject() {
        const res = await api.get<Project[]>('photos')
        return res
    }
    async getProjectById(ProjectId: number) {
        const res = await api.get<Project>(`photos/${ProjectId}`)
        return res
    }
}

const projectService = new ProjectService()
export default projectService;
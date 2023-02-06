import { Skill } from "./skill.model";

export class Developer {
    constructor(public lastName: string, public firstName: string, public age: number, public genre: string, public bio: string, public skills: Skill[]) {
        
    }
}
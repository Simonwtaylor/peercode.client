export interface IUserSkillsResponse {
  getUserSkills: IUserSkill[];
}

export interface IGetRemainingSkillsForUserResponse {
  getRemainingSkillsForUser: ISkill[];
}

export interface IGetSkillsResponse {
  skills: ISkill[];
}

export interface IUserSkill {
  id: number;
  yearsExperience: number;
  rating: number;
  skill: ISkill;
}

export interface ISkill {
  id: number;
  colour: string;
  name: string;
  iconPath?: string;
}

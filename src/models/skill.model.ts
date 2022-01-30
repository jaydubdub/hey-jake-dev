export interface ISkill {
    name: string;
    icon: string;
    description?: string;
    type: 'proficient' | 'familiar' | 'tool'
}

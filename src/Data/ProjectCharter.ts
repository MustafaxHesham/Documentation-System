export class ProjectCharter {
    constructor(
        public Id:Number,
        public projectTitle:string,
        public startDate:Date,
        public endDate:Date,
        public Objectives:string,
        public projectManager:string,
        public budgetInformation:Number,
        public projectScopeStatement:string
    )
    {}
}
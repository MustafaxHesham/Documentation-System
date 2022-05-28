import { Injectable } from "@angular/core";
import { ProjectCharter } from "src/Data/ProjectCharter";
import { RequirementAnalysis } from "src/Data/RequirementAnalysis";
import { SoftwareDesign } from "src/Data/SoftwareDesign";
@Injectable()
export class DocumentationService{
    public PhaseSelection:any = false;
    public Phases:(ProjectCharter | SoftwareDesign | RequirementAnalysis)[] = [];
    public Counter:number = 1;

    public addPhase(Phase:(ProjectCharter | SoftwareDesign | RequirementAnalysis)): void {
        Phase.Id = this.Counter++;
        this.Phases.push(Phase);
    }

    public removePhase(id:Number): void {
        let index = this.Phases.findIndex((obj) => obj.Id === id);
        this.Phases.splice(index, 1);
    }

    public editPhase(Phase:(ProjectCharter | SoftwareDesign | RequirementAnalysis)) : void {
        let Index = this.Phases.findIndex( (obj) => obj.Id === Phase.Id);
        this.Phases[Index] = Phase;
    }

    public getAllPhases() { 
        return this.Phases;
    }

    public getPhase(ID:Number) : (SoftwareDesign|RequirementAnalysis|ProjectCharter) {
        return <ProjectCharter>this.Phases.find((obj) => obj.Id === ID)!;
    }
}
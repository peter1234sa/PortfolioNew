import { AsciiArt } from "@/components/ascii-art"

export function SkillsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="skills" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2">Data Science & Computer Vision</h3>
          <div className="space-y-2">
            <SkillBar name="Python" percentage={90} />
            <SkillBar name="PyTorch" percentage={90} />
            <SkillBar name="TensorFlow + Keras" percentage={85} />
            <SkillBar name="NumPy" percentage={85} />
            <SkillBar name="Pandas" percentage={80} />
            <SkillBar name="Scikit-Learn" percentage={80} />
            <SkillBar name="Matplotlib" percentage={75} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Engineering & Tooling</h3>
          <div className="space-y-2">
            <SkillBar name="Git" percentage={80} />
            <SkillBar name="Jupyter" percentage={80} />
            <SkillBar name="Data Visualization" percentage={75} />
            <SkillBar name="Linux" percentage={75} />
            <SkillBar name="C++" percentage={70} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Backend & Databases</h3>
          <div className="space-y-2">
            <SkillBar name="FastAPI" percentage={70} />
            <SkillBar name="Flask" percentage={65} />
            <SkillBar name="MySQL" percentage={60} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Languages & Web</h3>
          <div className="space-y-2">
            <SkillBar name="C" percentage={65} />
            <SkillBar name="Java" percentage={60} />
            <SkillBar name="HTML + CSS" percentage={55} />
            <SkillBar name="MATLAB" percentage={55} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} skill level: ${percentage}%`}
        />
      </div>
    </div>
  )
}


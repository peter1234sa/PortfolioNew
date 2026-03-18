import { AsciiArt } from "@/components/ascii-art"

export function ExperienceSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="experience" />

      <div className="space-y-6">
        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Digital Technology Intern</h3>
            <p className="text-xs text-muted-foreground">GE Vernova | January 2025 - Present</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Raised unit test coverage of the MVM platform to 97% across multiple modules</li>
            <li>Designed a pipeline-level ExitHandler to detect pod failures across the MLOps workflow</li>
            <li>Improved observability with structured logging for faster incident resolution</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">AI Advanced Researcher</h3>
            <p className="text-xs text-muted-foreground">VRAIN Solution | October 2024 - December 2024</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Created a fine-tuned prompt encoder for MobileSAMv2 to improve product performance</li>
            <li>Developed a training script for MobileSAMv2 with the new prompt encoder</li>
            <li>Added multi-head attention + FCN box refinement to replace YOLOv8-seg</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Computer Vision Researcher</h3>
            <p className="text-xs text-muted-foreground">PIL Lab, IIT Kanpur | May 2024 - July 2024</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Built an unsupervised synergistic double decoder using a pretrained model + trainable decoder</li>
            <li>Used weight sharing via concatenated outputs to improve efficiency</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Computer Vision Intern</h3>
            <p className="text-xs text-muted-foreground">KasperTech | February 2024 - May 2024</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Built a multi-threaded video processing pipeline for real-time traffic analysis</li>
            <li>Deployed trained models and integrated them with set servers</li>
            <li>Optimized continuous feeds to reduce bandwidth and lag</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


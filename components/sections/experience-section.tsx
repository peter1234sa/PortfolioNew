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
            <li>Contributed to the development and maintenance of the Model Verification Manager (MVM) platform by enhancing unit
test coverage to 97% across multiple modules.</li>
            <li>Designed and implemented a pipeline-level ExitHandler to ensure consistent failure detection of pods across the
MLOps workflow, capturing and logging critical errors to reduce debugging time.</li>
            <li>Improved error traceability and observability through structured and semantic logging practices.</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">AI Advanced Researcher</h3>
            <p className="text-xs text-muted-foreground">VRAIN Solution | October 2024 - December 2024</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Worked on creating Fine-Tune prompt encode for MobileSAMv2 to improve the performance of VRAIN product.</li>
            <li>Developed a training script for MobileSAMv2 incorporating the fine-tuned prompt encoder. </li>
            <li>Added a Multihead Attention mechanism along with FCN for box generation with refinement, replacing the use of
YOLOv8-seg for box generation.</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Computer Vision Researcher</h3>
            <p className="text-xs text-muted-foreground">PIL Lab, IIT Kanpur | May 2024 - July 2024</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Proposed an unsupervised synergistic double decoder using a pretrained model + trainable decoder.</li>
            <li>Utilized weight sharing via concatenated outputs to enhance efficiency.</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Computer Vision Intern</h3>
            <p className="text-xs text-muted-foreground">KasperTech | February 2024 - May 2024</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Spearheading the development of a multi-threaded video processing pipeline aimed at real-time traffic video
            analysis.</li>
          <li>Designed a tailored OCR model optimized for recognizing text on low-resolution streams of two-wheeler number
            plates.</li>
          <li>Fine-tuning machine learning models to operate efficiently on continuous data streams, focusing on minimizing
            bandwidth usage and reducing latency.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


import { AsciiArt } from "@/components/ascii-art"

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">HRMate — Revolutionizing Recruitment with ML</h3>
          <p className="text-sm mb-2">
            An intelligent hiring assistant that automates resume screening, conducts interviews, and predicts candidate
            success using NLP and ML algorithms.
          </p>
          <p className="text-xs text-muted-foreground mb-2">Technologies: Python, NLP, ML Pipelines</p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">PymidNet — Salient Pyramidal Encoder-Decoder Network</h3>
          <p className="text-sm mb-2">
            Developed a novel encoder-decoder architecture for polyp segmentation in colonoscopy images, incorporating a
            pyramidal enhancement module for multi-scale feature extraction.
          </p>
          <p className="text-xs text-muted-foreground mb-2">Technologies: PyTorch, Medical Imaging, Segmentation</p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Risk Detection & Alert with Custom YOLO + SAHI</h3>
          <p className="text-sm mb-2">
            Implemented a real-time risk detection system using YOLO and SAHI on Shibuya Crossing footage to identify
            safety hazards.
          </p>
          <p className="text-xs text-muted-foreground mb-2">Technologies: YOLO, SAHI, Computer Vision</p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">3D Segmentation of Human Vasculature</h3>
          <p className="text-sm mb-2">
            Designed a 3D Attention UNet model for segmenting human vasculature from CT scans, improving localization accuracy.
          </p>
          <p className="text-xs text-muted-foreground mb-2">Technologies: Attention UNet, 3D Segmentation, PyTorch</p>
        </div>
      </div>
    </div>
  )
}


import { AsciiArt } from "@/components/ascii-art"

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">HRMate — Using AI to Revolutionize Recruitment</h3>
          <p className="text-sm mb-2">
            An AI-based applicant filtering system that analyzes resumes, conducts interviews, and forecasts success
            using ML and NLP to streamline hiring.
          </p>
          <p className="text-xs text-muted-foreground mb-2">Technologies: Python, NLP, ML Pipelines</p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">SpeedNet — Salient Pyramidal Encoder-Decoder Network</h3>
          <p className="text-sm mb-2">
            Built a novel encoder-decoder architecture for semantic segmentation of colonoscopy images with a
            pyramidal enhancement module for multi-scale feature capture.
          </p>
          <p className="text-xs text-muted-foreground mb-2">Technologies: PyTorch, Medical Imaging, Segmentation</p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Risk Detection & Alert with Custom YOLO + SAHI</h3>
          <p className="text-sm mb-2">
            Customized object detection for real-time risk analysis using Shibuya Crossing stream footage.
          </p>
          <p className="text-xs text-muted-foreground mb-2">Technologies: YOLO, SAHI, Computer Vision</p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">3D Segmentation of Human Vasculature</h3>
          <p className="text-sm mb-2">
            Developed a 3D segmentation model based on Attention UNet for CT scans to improve localization and
            delineation of vasculature.
          </p>
          <p className="text-xs text-muted-foreground mb-2">Technologies: Attention UNet, 3D Segmentation, PyTorch</p>
        </div>
      </div>
    </div>
  )
}


import { AsciiArt } from "@/components/ascii-art"
import { AsciiPortraitComparison } from "@/components/ascii-portrait-comparison"

export function AboutSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="about" />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/5">
          <AsciiPortraitComparison />
          <div className="text-center text-xs text-muted-foreground mt-2">
            Tushir Sahu
            <br />
            <span className="text-primary/60">AI & Computer Vision Engineer</span>
          </div>
        </div>

        <div className="space-y-3 md:w-3/5">
          <p>
            Hi, I'm Tushir, an incoming MS (CS) student at The University of Southern California.
            I'm passionate about solving real-world problems using AI and Computer Vision.
          </p>

          <p>
            I enjoy building reliable ML systems, exploring new research ideas, and turning them into practical tools
            that help people and organizations make better decisions.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Personal Bio:</h3>
            <div className="space-y-2 text-sm">
              <p>
                When I'm not coding, you'll find me doing nothing, playing guitar, or dreaming about living in LA.
              </p>

              <p>
                I love experimenting with vision models, building fast prototypes, and learning from new research
                papers.
              </p>
            </div>
          </div>

          <p>
            I'm especially interested in computer vision, representation learning, and building efficient, end-to-end
            ML pipelines.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Quick Facts:</h3>
            <ul className="space-y-1">
              <li>
                <span className="text-muted-foreground">Location:</span> Osaka, Japan (incoming)
              </li>
              <li>
                <span className="text-muted-foreground">Education:</span> Incoming MS (CS), The University of Osaka
              </li>
              <li>
                <span className="text-muted-foreground">Specialty:</span> AI, Computer Vision, Machine Learning
              </li>
              <li>
                <span className="text-muted-foreground">Highlight:</span> MEXT Scholarship Recipient
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


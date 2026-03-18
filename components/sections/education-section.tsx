import { AsciiArt } from "@/components/ascii-art"

export function EducationSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="education" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Indian Institute of Information Technology, Jabalpur</h3>
          <p className="text-sm">B.Tech in Electronics and Communications Engineering</p>
          <p className="text-xs text-muted-foreground">2025</p>
          <div className="mt-2">
            <h4 className="text-sm font-semibold">Focus Areas:</h4>
            <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
              <li>Computer Vision & Machine Learning</li>
              <li>Signal Processing</li>
              <li>Embedded Systems</li>
            </ul>
          </div>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Sagar Public School</h3>
          <p className="text-sm">Senior Secondary Certificate (CBSE)</p>
          <p className="text-xs text-muted-foreground">2021</p>
        </div>
      </div>
    </div>
  )
}


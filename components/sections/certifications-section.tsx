import { AsciiArt } from "@/components/ascii-art"
import { Award, Trophy, Flag } from "lucide-react"

export function CertificationsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="certifications" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Award className="h-4 w-4 mr-2" />
            Selected Courses
          </h3>
          <ul className="space-y-2 pl-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">Udemy: Convolutional Neural Networks in Python</p>
                <p className="text-xs text-muted-foreground">Computer Vision</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">Udemy: Machine Learning A-Z</p>
                <p className="text-xs text-muted-foreground">AI + Python</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">Kaggle: Data Visualization</p>
                <p className="text-xs text-muted-foreground">Certification</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">Kaggle: Intro to Machine Learning</p>
                <p className="text-xs text-muted-foreground">Certification</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">Coursera: Introduction to TensorFlow for AI</p>
                <p className="text-xs text-muted-foreground">Deep Learning</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">Coursera: Neural Networks and Deep Learning</p>
                <p className="text-xs text-muted-foreground">Deep Learning</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Trophy className="h-4 w-4 mr-2" />
            Communities & Leadership
          </h3>
          <ul className="space-y-2 pl-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p>Google Developer Student Clubs Lead (Dec 2022 - Aug 2024)</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p>Hosted workshops, events, and national-level hackathons</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Flag className="h-4 w-4 mr-2" />
            Research Themes
          </h3>
          <ul className="space-y-2 pl-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p>Medical imaging segmentation and representation learning</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p>Efficient object detection and multi-scale feature modeling</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'Computer Vision Services — Image AI Solutions — Uvix',
  description: 'Custom computer vision models for image recognition, object detection, and visual understanding. Production-ready vision AI.',
  canonical: 'https://uvix.in/services/computer-vision',
};

export default function ComputerVisionPage() {
  return (
    <SiteLayout>
      <PageSection eyebrow="Services" title="Computer Vision" intro="Build intelligent systems that see and understand images">
        <div className="service-detail">
          <section className="service-section">
            <h2>What We Do</h2>
            <p>
              We develop computer vision systems that extract insights from images and video streams. From medical imaging to manufacturing quality control, we build models that automate visual inspection, detection, and analysis tasks.
            </p>
          </section>

          <section className="service-section">
            <h2>Why It Matters</h2>
            <ul className="service-benefits">
              <li><strong>Accuracy at Scale:</strong> Inspect millions of images with consistent accuracy</li>
              <li><strong>Cost Reduction:</strong> Replace manual inspection with AI (60-80% cost savings)</li>
              <li><strong>Speed:</strong> Process images in milliseconds vs. minutes for manual review</li>
              <li><strong>Safety:</strong> Identify hazards and defects before they impact operations</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <h3>1. Problem Assessment</h3>
                <p>Understand your visual data, image sources, and business requirements.</p>
              </div>
              <div className="step">
                <h3>2. Dataset Preparation</h3>
                <p>Collect, annotate, and augment image datasets for training.</p>
              </div>
              <div className="step">
                <h3>3. Model Development</h3>
                <p>Train vision models, fine-tune pre-trained architectures, and optimize for deployment.</p>
              </div>
              <div className="step">
                <h3>4. Production Integration</h3>
                <p>Deploy models as APIs, edge inference, or embedded in applications.</p>
              </div>
            </div>
          </section>

          <section className="service-section">
            <h2>Vision Capabilities</h2>
            <ul className="use-cases">
              <li>Object detection and localization</li>
              <li>Image classification and recognition</li>
              <li>Semantic and instance segmentation</li>
              <li>Pose estimation and action recognition</li>
              <li>Defect detection in manufacturing</li>
              <li>Medical image analysis and diagnostics</li>
              <li>Optical character recognition (OCR)</li>
              <li>Face recognition and biometric systems</li>
            </ul>
          </section>

          <section className="service-section">
            <h2>Technologies & Frameworks</h2>
            <p className="tech-list">PyTorch · TensorFlow · OpenCV · YOLO · Faster R-CNN · ResNet · Vision Transformers · ONNX · TensorFlow Lite</p>
          </section>

          <section className="service-cta">
            <h2>Ready to Add Vision Intelligence?</h2>
            <p>Let's build computer vision systems that automate visual inspection and analysis. Book a consultation with our vision experts.</p>
            <Link href="/contact" className="cta-button">Schedule a Discovery Call</Link>
          </section>
        </div>
      </PageSection>
    </SiteLayout>
  );
}

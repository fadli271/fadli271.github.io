"use client";

import { useState } from "react";
import {
  Card,
  CardBody,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  FiAlertCircle,
  FiTrendingUp,
  FiTool,
  FiImage,
} from "react-icons/fi";
import { TfiLightBulb } from "react-icons/tfi";
import ImageCarousel from "../Image-carousel";

interface ProjectsSectionProps {
  content: {
    title: string;
    subtitle: string;
  };
  projectsData: {
    title: string;
    description: string;
    tags: string[];
    category: string;
    stack?: string[];
    caseStudy?: {
      problem: string;
      solution: string;
      impact: string;
    };
    images?: string[];
  }[];
}

export default function ProjectsSection({
  content,
  projectsData,
}: ProjectsSectionProps) {
  const categories = Array.from(new Set(projectsData.map((p) => p.category)));

  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto py-24 px-4">
      {/* Title */}
      <div className="text-center mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {content.title}
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {content.subtitle}
        </motion.p>
      </div>

      {/* Cards */}
      <div className="space-y-16">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-sky-600 mb-6">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData
                .filter((p) => p.category === category)
                .map((project, projIndex) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: projIndex * 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Card
                      shadow="md"
                      className="relative rounded-2xl transition-all group overflow-hidden"
                    >
                      {/* Overlay saat hover */}
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <Button
                          onPress={() => openModal(project)}
                          className="bg-white text-sky-600 hover:scale-105 transition-transform font-semibold px-5 py-2 rounded-full shadow-md"
                        >
                          Lihat Detail
                        </Button>
                      </div>

                      {/* Konten utama */}
                      <CardBody className="flex flex-col justify-between p-6 gap-4 relative z-0">
                        <div className="flex items-center gap-3">
                          <FaGithub size={22} />
                          <h3 className="text-xl font-semibold text-gray-900">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-sm text-gray-600 line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        size="5xl"
        scrollBehavior="inside"
        placement="top"
      >
        <ModalContent className="rounded-2xl p-2">
          <ModalHeader className="text-xl font-bold text-gray-800">
            {selectedProject?.title}
          </ModalHeader>
          <ModalBody>
            <section className="space-y-5">
              <p className="text-gray-800 text-base leading-relaxed whitespace-pre-line">
                {selectedProject?.description}
              </p>

              {/* Case Study */}
              {selectedProject?.caseStudy && (
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm text-gray-700 space-y-3">
                  <div className="flex items-start gap-2">
                    <FiAlertCircle className="text-red-500 mt-0.5" />
                    <div>
                      <span className="font-semibold">Problem:</span> <br />
                      {selectedProject.caseStudy.problem}
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <TfiLightBulb className="text-yellow-500 mt-0.5" />
                    <div>
                      <span className="font-semibold">Solution:</span> <br />
                      {selectedProject.caseStudy.solution}
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiTrendingUp className="text-green-600 mt-0.5" />
                    <div>
                      <span className="font-semibold">Impact:</span> <br />
                      {selectedProject.caseStudy.impact}
                    </div>
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {selectedProject?.stack && selectedProject.stack.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 font-medium text-gray-800 mb-2">
                    <FiTool className="text-sky-500" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-sky-100 text-sky-700 px-3 py-1 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Preview */}
              {selectedProject?.images &&
                selectedProject?.images?.length > 0 && (
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-gray-800 mb-2">
                      <FiImage className="text-purple-500" />
                      Preview Aplikasi
                    </h4>
                    <ImageCarousel
                      images={selectedProject.images.map(
                        (img) => `${img}`
                      )}
                    />
                  </div>
                )}
            </section>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
}

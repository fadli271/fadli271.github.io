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
  Link,
} from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  FiAlertCircle,
  FiTrendingUp,
  FiTool,
  FiImage,
  FiArrowRight,
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
  const [selectedProject, setSelectedProject] = useState<
    ProjectsSectionProps["projectsData"][0] | null
  >(null);
  const [isOpen, setIsOpen] = useState(false);
  const categories = Array.from(new Set(projectsData.map((p) => p.category)));

  const openModal = (project: ProjectsSectionProps["projectsData"][0]) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <section className="max-w-7xl mx-auto py-24 px-4" id="projects">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-sky-500"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {content.title}
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {content.subtitle}
        </motion.p>
      </div>

      {/* Project Cards by Category */}
      <div className="space-y-16">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-semibold text-sky-500 mb-6">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData
                .filter((p) => p.category === category)
                .map((project, projIndex) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: projIndex * 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <Card
                      className="relative rounded-2xl overflow-hidden group transition-all"
                      shadow="md"
                    >
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity z-10">
                        <Button
                          className="bg-white text-sky-600 font-semibold px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
                          onPress={() => openModal(project)}
                        >
                          Lihat Detail
                        </Button>
                      </div>
                      <CardBody className="p-6 flex flex-col justify-between gap-4 bg-white relative z-0">
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

      {/* Project Detail Modal */}
      <Modal
        isOpen={isOpen}
        placement="top"
        scrollBehavior="inside"
        size="5xl"
        onOpenChange={setIsOpen}
      >
        <ModalContent className="rounded-2xl p-2 bg-white">
          <ModalHeader className="text-xl font-bold text-gray-800">
            {selectedProject?.title}
          </ModalHeader>
          <ModalBody>
            <section className="space-y-5">
              <p className="text-gray-800 text-base leading-relaxed whitespace-pre-line">
                {selectedProject?.description}
              </p>

              {selectedProject?.caseStudy && (
                <div className="text-gray-700 space-y-3">
                  <div className="flex items-start gap-2">
                    <FiAlertCircle className="text-red-500 mt-0.5" />
                    <div>
                      <span className="font-semibold">Problem:</span>
                      <br />
                      {selectedProject.caseStudy.problem}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <TfiLightBulb className="text-yellow-500 mt-0.5" />
                    <div>
                      <span className="font-semibold">Solution:</span>
                      <br />
                      {selectedProject.caseStudy.solution}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <FiTrendingUp className="text-green-600 mt-0.5" />
                    <div>
                      <span className="font-semibold">Impact:</span>
                      <br />
                      {selectedProject.caseStudy.impact}
                    </div>
                  </div>
                </div>
              )}

              {selectedProject?.stack && selectedProject?.stack?.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 font-medium text-gray-800 mb-2">
                    <FiTool className="text-sky-500" /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject?.images &&
                selectedProject?.images?.length > 0 && (
                  <div>
                    <h4 className="flex items-center gap-2 font-medium text-gray-800 mb-2">
                      <FiImage className="text-purple-500" /> Preview Aplikasi
                    </h4>
                    <ImageCarousel
                      images={selectedProject.images.map((img) => `${img}`)}
                    />
                  </div>
                )}
            </section>

            {/* CTA */}
            <div className="mt-6 text-center space-y-4">
              <p className="text-gray-800 text-base font-medium">
                Tertarik buat project seperti ini?
              </p>
              <Link
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-500 rounded-full shadow-md hover:scale-105 transition-transform duration-300 text-sm"
                href="#contact"
              >
                Ayook, Diskusi <FiArrowRight />
              </Link>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
}

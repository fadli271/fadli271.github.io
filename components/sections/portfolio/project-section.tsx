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
  Chip,
} from "@heroui/react";
import { motion } from "framer-motion";
import { FiImage, FiTool, FiTrendingUp, FiAlertCircle } from "react-icons/fi";
import { TfiLightBulb } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Rocket } from "lucide-react";

import ImageCarousel from "@/components/common/image-carousel";

interface ProjectsSectionProps {
  content: {
    title: string;
    subtitle: string;
    viewDetailButton: string;
    modal: {
      noProjectSelected: string;
      previewTitle: string;
      problem: string;
      solution: string;
      impact: string;
      techStack: string;
    };
  };
  projectsData: {
    title: string;
    description: string;
    tags: string[];
    category: string;
    stack?: string[];
    caseStudy?: { problem: string; solution: string; impact: string };
    images?: string[];
  }[];
}

export default function ProjectsSection({
  content,
  projectsData,
}: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    ProjectsSectionProps["projectsData"][0] | null
  >(null);
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "All",
    ...Array.from(new Set(projectsData.map((p) => p.category))),
  ];
  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const openModal = (project: ProjectsSectionProps["projectsData"][0]) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <section className="max-w-7xl mx-auto py-24 px-4" id="projects">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-3xl md:text-3xl font-bold gradient-text"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Rocket className="w-9 h-9 text-sky-500 gradient-text" />
          {content.title}
        </motion.h1>
        <motion.p
          className="text-base text-gray-600 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {content.subtitle}
        </motion.p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <Chip
            key={cat}
            className={`
              cursor-pointer text-sm font-medium transition-all duration-300
              ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-sm"
                  : "bg-white text-gray-600 border border-gray-300 hover:border-sky-500 hover:text-sky-500"
              }
            `}
            variant={selectedCategory === cat ? "solid" : "flat"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Chip>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card className="group relative overflow-hidden shadow-md rounded-2xl">
              <div className="w-full h-48 relative">
                <Image
                  fill
                  alt={project.title}
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  src={
                    project?.images?.[0]
                      ? project?.images?.[0]
                      : "/portfolio/placeholder-project.svg"
                  }
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <Button
                    className="bg-white text-sky-600 font-semibold px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
                    onPress={() => openModal(project)}
                  >
                    {content.viewDetailButton}
                  </Button>
                </div>
              </div>

              <CardBody className="p-5 bg-white z-0 relative space-y-2">
                <div className="flex items-center gap-2 text-gray-900 font-semibold">
                  <FaGithub />
                  <h3>{project.title}</h3>
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

      {/* Detail Modal */}
      <Modal
        isOpen={isOpen}
        placement="top"
        scrollBehavior="inside"
        size="5xl"
        onOpenChange={setIsOpen}
      >
        <ModalContent className="rounded-3xl p-4 bg-white shadow-xl">
          <ModalHeader className="text-2xl font-bold text-gray-800">
            {selectedProject?.title ?? "Project Title"}
          </ModalHeader>
          <ModalBody>
            {selectedProject ? (
              <section className="space-y-8">
                {selectedProject.description && (
                  <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedProject.description}
                  </p>
                )}

                {selectedProject.caseStudy && (
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                      <div className="flex items-center gap-2 mb-2 text-red-600 font-semibold">
                        <FiAlertCircle className="w-5 h-5" />
                        {content.modal.problem}
                      </div>
                      <p className="text-sm text-gray-700 leading-snug">
                        {selectedProject.caseStudy.problem}
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                      <div className="flex items-center gap-2 mb-2 text-yellow-600 font-semibold">
                        <TfiLightBulb className="w-5 h-5" />
                        {content.modal.solution}
                      </div>
                      <p className="text-sm text-gray-700 leading-snug">
                        {selectedProject.caseStudy.solution}
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                      <div className="flex items-center gap-2 mb-2 text-green-600 font-semibold">
                        <FiTrendingUp className="w-5 h-5" />
                        {content.modal.impact}
                      </div>
                      <p className="text-sm text-gray-700 leading-snug">
                        {selectedProject.caseStudy.impact}
                      </p>
                    </div>
                  </div>
                )}

                {selectedProject.stack && (
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                      <FiTool className="text-sky-500" />
                      {content.modal.techStack}
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

                {selectedProject.images && (
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                      <FiImage className="text-purple-500" />
                      {content.modal.previewTitle}
                    </h4>
                    <div className="relative overflow-hidden rounded-2xl shadow-md">
                      <ImageCarousel images={selectedProject.images} />
                    </div>
                  </div>
                )}
              </section>
            ) : (
              <p className="text-center text-gray-500 text-sm">
                {content.modal.noProjectSelected}
              </p>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
}

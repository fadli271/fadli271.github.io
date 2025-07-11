"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import Link from "next/link";

import { fullSkillsData } from "@/lib/content";

interface SkillsSectionProps {
  content: {
    title: string;
    subtitle: string;
  };
}

export default function SkillsSection({ content }: SkillsSectionProps) {
  return (
    <section className="page-section max-w-7xl mx-auto py-24 px-4" id="skills">
      <div className="text-center mb-16">
        <motion.h1
          className="text-4xl font-bold gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {content.title}
        </motion.h1>
        <motion.p
          className="text-center text-xl text-gray-600 mt-2 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {content.subtitle}
        </motion.p>
      </div>
      <div className="space-y-12">
        {fullSkillsData.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-sky-500 mb-6">
              {category.category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <Link
                  key={skill.name}
                  href={skill.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <Card
                      isPressable
                      className="h-full w-full hover:bg-gray-100 transition-colors bg-white"
                      shadow="sm"
                    >
                      <CardBody className="flex items-center justify-center text-center p-4 font-semibold text-gray-700">
                        <skill.icon className="text-gray-500" size={32} />
                        <span className="font-semibold text-gray-500">
                          {skill.name}
                        </span>
                      </CardBody>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

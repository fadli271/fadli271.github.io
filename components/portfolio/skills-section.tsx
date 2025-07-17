"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Button, Divider } from "@heroui/react";
import Link from "next/link";
import { Package, ChevronDown, ChevronUp } from "lucide-react";

import { fullSkillsData } from "@/lib/content";

interface SkillsSectionProps {
  content: {
    title: string;
    subtitle: string;
    ui: { seeAll: string; seeLess: string };
  };
}

export default function SkillsSection({ content }: SkillsSectionProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <section className="page-section max-w-7xl mx-auto py-24 px-4" id="skills">
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h1
          className="text-3xl font-bold gradient-text flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Package className="w-10 h-10 text-sky-500 gradient-text" />
          {content.title}
        </motion.h1>
        <motion.p
          className="text-base text-gray-600 mt-2 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {content.subtitle}
        </motion.p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {fullSkillsData.map((category, catIndex) => {
          const isExpanded = expandedCategory === category.category;
          const skillsToShow = isExpanded
            ? category.skills
            : category.skills.slice(0, 4);

          return (
            <motion.div
              key={category.category}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              layout="position"
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="w-full h-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardBody className="flex flex-col gap-4 p-6">
                  {/* Category Title */}
                  <h2 className="text-xl font-bold text-center gradient-text">
                    {category.category}
                  </h2>

                  {/* Skills List */}
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    layout="position"
                  >
                    {skillsToShow.map((skill, skillIndex) => (
                      <Link
                        key={skill.name}
                        href={skill.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <motion.div
                          className="group flex flex-col items-center text-center gap-2 p-3 rounded-md transition-all duration-300 hover:bg-sky-50 hover:scale-105"
                          initial={{ opacity: 0, y: 10 }}
                          transition={{
                            duration: 0.4,
                            delay: skillIndex * 0.05,
                          }}
                          viewport={{ once: true, amount: 0.5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                        >
                          <skill.icon
                            className="text-gray-500 group-hover:text-sky-600 transition-colors duration-300"
                            size={64}
                          />
                          <span className="text-sm font-medium text-gray-600 group-hover:text-sky-700 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>

                  {/* Toggle Button */}
                  {category.skills.length > 4 && (
                    <>
                      <Divider />
                      <Button
                        className="self-center text-sky-500 font-medium bg-white flex items-center gap-1 hover:bg-sky-50 transition-all duration-300"
                        size="sm"
                        variant="light"
                        onPress={() => toggleCategory(category.category)}
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-4 h-4" />
                            {content.ui.seeLess}
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" />
                            {content.ui.seeAll}
                          </>
                        )}
                      </Button>
                    </>
                  )}
                </CardBody>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

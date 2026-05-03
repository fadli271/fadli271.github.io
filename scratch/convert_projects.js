const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDir = path.join(process.cwd(), 'content', 'projects');
const outputDir = path.join(process.cwd(), 'content', 'portfolio');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const langs = ['id', 'en'];
const allProjects = {};

langs.forEach(lang => {
    const langDir = path.join(contentDir, lang);
    if (!fs.existsSync(langDir)) return;

    const files = fs.readdirSync(langDir);
    allProjects[lang] = files
        .filter(f => f.endsWith('.md'))
        .map(f => {
            const content = fs.readFileSync(path.join(langDir, f), 'utf8');
            const { data, content: body } = matter(content);
            return {
                slug: f.replace('.md', ''),
                ...data,
                content: body.trim()
            };
        });
});

fs.writeFileSync(
    path.join(outputDir, 'projects.json'),
    JSON.stringify(allProjects, null, 2)
);

console.log('Successfully converted projects to JSON');

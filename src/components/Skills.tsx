import React from 'react';
import {
    FaJava, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaAngular,
    FaNodeJs, FaDocker, FaAws, FaLinux, FaGitAlt, FaGithub, FaBitbucket,
    FaTasks, FaProjectDiagram, FaDatabase
} from 'react-icons/fa';
import {
    SiTypescript, SiJavascript, SiCplusplus, SiExpress, SiLaravel, SiSpringboot,
    SiTailwindcss, SiSupabase, SiMongodb, SiPostgresql, SiMysql,
    SiPostman, SiSwagger, SiVercel, SiAwsamplify, SiP5Dotjs
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

interface Skill {
    name: string;
    icon: React.ReactNode;
    url: string;
    color: string;
}

const SkillItem = ({ skill }: { skill: Skill }) => (
    <a
        href={skill.url}
        target="_blank"
        rel="noopener noreferrer"
        className="skill-card"
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '1.5rem',
            borderRadius: '12px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            width: '100px', // Fixed width for consistency
            height: '100px'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.boxShadow = `0 10px 20px ${skill.color}40`;
            e.currentTarget.style.borderColor = skill.color;
            const icon = e.currentTarget.querySelector('.skill-icon') as HTMLElement;
            if (icon) icon.style.color = skill.color;
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            const icon = e.currentTarget.querySelector('.skill-icon') as HTMLElement;
            if (icon) icon.style.color = 'var(--text-secondary)';
        }}
    >
        <div className="skill-icon" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}>
            {skill.icon}
        </div>
        <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{skill.name}</span>
    </a>
);

export const Skills: React.FC = () => {
    const { t } = useTranslation();
    // Map of skills with documentation URLs and brand colors
    const languages: Skill[] = [
        { name: "Java", icon: <FaJava />, url: "https://dev.java/", color: "#f89820" },
        { name: "Python", icon: <FaPython />, url: "https://www.python.org/", color: "#3776ab" },
        { name: "PHP", icon: <FaPhp />, url: "https://www.php.net/", color: "#777bb4" },
        { name: "TypeScript", icon: <SiTypescript />, url: "https://www.typescriptlang.org/", color: "#3178c6" },
        { name: "JavaScript", icon: <SiJavascript />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "#f7df1e" },
        { name: "C++", icon: <SiCplusplus />, url: "https://isocpp.org/", color: "#00599c" },
    ];

    const frameworks: Skill[] = [
        { name: "React", icon: <FaReact />, url: "https://react.dev/", color: "#61dafb" },
        { name: "Vue.js", icon: <FaVuejs />, url: "https://vuejs.org/", color: "#4fc08d" },
        { name: "Angular", icon: <FaAngular />, url: "https://angular.io/", color: "#dd0031" },
        { name: "Node.js", icon: <FaNodeJs />, url: "https://nodejs.org/", color: "#339933" },
        { name: "Express", icon: <SiExpress />, url: "https://expressjs.com/", color: "#000000" },
        { name: "Laravel", icon: <SiLaravel />, url: "https://laravel.com/", color: "#ff2d20" },
        { name: "Spring Boot", icon: <SiSpringboot />, url: "https://spring.io/projects/spring-boot", color: "#6db33f" },
        { name: "Tailwind", icon: <SiTailwindcss />, url: "https://tailwindcss.com/", color: "#06b6d4" },
    ];

    const dataCloud: Skill[] = [
        { name: "Supabase", icon: <SiSupabase />, url: "https://supabase.com/", color: "#3ecf8e" },
        { name: "MongoDB", icon: <SiMongodb />, url: "https://www.mongodb.com/", color: "#47a248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, url: "https://www.postgresql.org/", color: "#4169e1" },
        { name: "MySQL", icon: <SiMysql />, url: "https://www.mysql.com/", color: "#4479a1" },
        { name: "SQL Server", icon: <FaDatabase />, url: "https://www.microsoft.com/en-us/sql-server", color: "#cc2927" },
        { name: "AWS", icon: <FaAws />, url: "https://aws.amazon.com/", color: "#ff9900" },
        { name: "Docker", icon: <FaDocker />, url: "https://www.docker.com/", color: "#2496ed" },
    ];

    const tools: Skill[] = [
        { name: "HTML", icon: <FaHtml5 />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML", color: "#e34f26" },
        { name: "CSS", icon: <FaCss3Alt />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "#1572b6" },
        { name: "Git", icon: <FaGitAlt />, url: "https://git-scm.com/", color: "#f05032" },
        { name: "GitHub", icon: <FaGithub />, url: "https://github.com/", color: "#181717" },
        { name: "Bitbucket", icon: <FaBitbucket />, url: "https://bitbucket.org/", color: "#0052cc" },
        { name: "Linux", icon: <FaLinux />, url: "https://www.linux.org/", color: "#fcc624" },
        { name: "Postman", icon: <SiPostman />, url: "https://www.postman.com/", color: "#ef5b25" },
        { name: "Swagger", icon: <SiSwagger />, url: "https://swagger.io/", color: "#85ea2d" },
        { name: "Vercel", icon: <SiVercel />, url: "https://vercel.com/", color: "#000000" },
        { name: "Amplify", icon: <SiAwsamplify />, url: "https://aws.amazon.com/amplify/", color: "#ff9900" },
        { name: "p5.js", icon: <SiP5Dotjs />, url: "https://p5js.org/", color: "#ed225d" },
        { name: "n8n", icon: <FaProjectDiagram />, url: "https://n8n.io/", color: "#ff6d5a" },
        { name: "ChatBase", icon: <TbApi />, url: "https://www.chatbase.co/", color: "#4f46e5" },
        { name: "SCRUM", icon: <FaTasks />, url: "https://www.scrum.org/", color: "#0091d2" },
    ];

    return (
        <section className="container animate-slide-up delay-400">
            <h3 className="section-title">{t('skills.title')}</h3>

            <div style={{ marginBottom: '3rem' }}>
                <h4 style={{ color: 'var(--accent-blue)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                    {t('skills.languages')}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                    {languages.map(skill => <SkillItem key={skill.name} skill={skill} />)}
                </div>
            </div>

            <div style={{ marginBottom: '3rem' }}>
                <h4 style={{ color: 'var(--accent-purple)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                    {t('skills.frameworks')}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                    {frameworks.map(skill => <SkillItem key={skill.name} skill={skill} />)}
                </div>
            </div>

            <div style={{ marginBottom: '3rem' }}>
                <h4 style={{ color: 'var(--accent-red)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                    {t('skills.cloud_data')}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                    {dataCloud.map(skill => <SkillItem key={skill.name} skill={skill} />)}
                </div>
            </div>

            <div>
                <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                    {t('skills.tools')}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                    {tools.map(skill => <SkillItem key={skill.name} skill={skill} />)}
                </div>
            </div>
        </section>
    );
};

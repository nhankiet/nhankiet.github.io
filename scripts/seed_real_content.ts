import fs from 'node:fs';
import path from 'node:path';

const projectsDir = 'd:\\Wokwokwok\\nhankiet.github.io\\contents\\projects';
const blogDir = 'd:\\Wokwokwok\\nhankiet.github.io\\contents\\blog';

if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir, { recursive: true });
if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir, { recursive: true });

const projects = [
    {
        slug: 'mcp-atlassian-server',
        title: 'Enterprise MCP Atlassian Server',
        description: 'Autonomous agent integration for Jira and Confluence, cutting AI operation costs by $120k/year.',
        date: '2025-03-15T10:00:00Z',
        content: 'Developed an internal Model Context Protocol (MCP) server that allows AI models to interact securely with Atlassian tools. This reduced manual data entry and improved team velocity.'
    },
    {
        slug: 'real-time-kappa-pipeline',
        title: 'Real-time Kappa Data Pipelines',
        description: 'High-speed event processing using Kafka and Flink for real-time CRM updates.',
        date: '2024-11-20T14:30:00Z',
        content: 'Designed and implemented horizontal scaling Kappa architecture pipelines processing 330M files. Orchestrated Kafka -> Flink -> Braze integration for real-time player engagement.'
    },
    {
        slug: 'integrated-data-foundation',
        title: '5TB+ Integrated Data Platform',
        description: 'Architecting a source-of-truth master data warehouse with PII security at scale.',
        date: '2024-06-10T09:00:00Z',
        content: 'Managed a massive data ecosystem involving 330M files. Focused on PII compliance, data quality, and foundation building for future AI/ML use cases.'
    },
    {
        slug: 'autonomous-project-manager',
        title: 'Autonomous AI Project Brain',
        description: 'Agentic workflow system utilizing TAO hierarchy for automated Jira prioritization.',
        date: '2025-01-05T16:00:00Z',
        content: 'Implemented an AI agent system that acts as a technical project manager, analyzing Slack context to draft and rank Jira tickets.'
    },
    {
        slug: 'reverse-etl-framework',
        title: 'High-Performance Reverse ETL',
        description: 'Custom framework for ingesting 20M+ rows hourly from S3 to Aurora PostgreSQL.',
        date: '2023-08-14T11:45:00Z',
        content: 'Optimized data ingestion by 75% using asynchronous Python operations. Built a robust reverse-ETL framework for marketing campaign targeting.'
    },
    {
        slug: 'fighter-plane-detector',
        title: 'Real-time Fighter Plane Detector',
        description: 'Computer vision system achieving 55+fps using YOLOv2, CUDA, and cuDNN.',
        date: '2017-06-20T13:00:00Z',
        content: 'Developed a real-time object detection system during my ML internship. Focused on performance optimization for edge computing.'
    },
    {
        slug: 'fake-news-classifier',
        title: 'Fake News Tweet Classifier',
        description: 'Deep learning NLP model using BERT to detect misinformation at scale.',
        date: '2020-05-30T10:20:00Z',
        content: 'Leveraged BERT and PyTorch to classify social media content. Achieved high accuracy on multi-source datasets.'
    },
    {
        slug: 'cancer-growth-simulation',
        title: 'Cancer Cell Growth Simulation',
        description: 'Mathematical modeling and statistical analysis of biological growth patterns.',
        date: '2020-11-12T08:00:00Z',
        content: 'Modeled complex biological systems using Pandas and Seaborn for visualization. Part of a computational biology research initiative.'
    },
    {
        slug: 'iac-uplift',
        title: 'Infrastructure-as-Code Uplift',
        description: 'Migrating 18+ CI/CD pipelines to GitHub Actions and implementing AWS CDK.',
        date: '2023-03-22T15:00:00Z',
        content: 'Modernized devops practices by replacing Jenkins with GHA. Reduced deployment times by 55% and storage costs by 85%.'
    }
];

const blogPosts = [
    {
        slug: 'mcp-future-of-ai-integration',
        title: 'MCP: The Missing Link for Enterprise AI',
        description: 'Why Model Context Protocol is the gold standard for bridging LLMs and internal data.',
        date: '2025-03-20T10:00:00Z',
        content: 'The Model Context Protocol (MCP) is revolutionizing how we integrate AI into Sportsbet. By creating a standardized bridge between models and our Atlassian stack...'
    },
    {
        slug: 'scaling-to-petabytes',
        title: 'Lessons from 330 Million Files',
        description: 'How to manage massive S3 buckets without losing your mind (or budget).',
        date: '2025-01-15T14:30:00Z',
        content: 'When managing 5TB+ of data across millions of files, organization and lifecycle policies are your best friends. Here is how we cut storage costs by 85%...'
    },
    {
        slug: 'kappa-vs-lambda-architecture',
        title: 'Why we chose Kappa for Real-time Data',
        description: 'Evaluating architectural patterns for high-velocity event processing.',
        date: '2024-11-05T09:00:00Z',
        content: 'We migrated to a Kappa architecture using Kafka and Flink to achieve true real-time visibility into player activity. Here is the technical breakdown...'
    },
    {
        slug: 'vibe-coding-training',
        title: 'Training Teams for "Vibe Coding"',
        description: 'Upskilling departments to leverage AI-assisted development effectively.',
        date: '2025-02-10T16:00:00Z',
        content: 'Its not just about using ChatGPT; its about the prompt hierarchy. I trained 5 teams on the TAO methodology to boost engineering velocity...'
    },
    {
        slug: 'serverless-data-engineering',
        title: 'The Power of AWS Serverless for Data',
        description: 'Building event-driven pipelines with Lambda, SQS, and CloudFormation.',
        date: '2024-04-12T11:45:00Z',
        content: 'Serverless doesnt mean no servers, it means focus. We reduced DynamoDB ingestion time by 75% using async Lambdas...'
    },
    {
        slug: 'from-intern-to-senior-ai',
        title: 'Career Evolution: Intern to Senior AI Engineer',
        description: 'My journey from TMA Solutions to leading AI initiatives at Sportsbet.',
        date: '2025-03-25T13:00:00Z',
        content: 'Reflecting on nearly a decade in tech across three countries. From training YOLOv2 models in HCMC to building MCP servers in Melbourne...'
    }
];

projects.forEach(p => {
    const content = `---
title: "${p.title}"
description: "${p.description}"
date: "${p.date}"
---

${p.content}
`;
    fs.writeFileSync(path.join(projectsDir, `${p.slug}.md`), content);
});

blogPosts.forEach(b => {
    const content = `---
title: "${b.title}"
description: "${b.description}"
date: "${b.date}"
---

${b.content}
`;
    fs.writeFileSync(path.join(blogDir, `${b.slug}.md`), content);
});

console.log('Successfully seeded 9 projects and 6 blog posts.');

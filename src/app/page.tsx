// This is a complete, self-contained Next.js page.
// You can copy and paste this entire code into `src/app/page.tsx` in a new Next.js project.
// Ensure your project is set up with TypeScript and Tailwind CSS.
// `npx create-next-app@latest my-app --typescript --tailwind`

'use client'; // This directive is needed for using hooks like useState.

import React, { useState } from 'react';

// --- SVG Icons Component ---
// Using inline SVGs to make the component self-contained.
const Icons = {
  chevronDown: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
  robot: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8V4M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-4 4H4m8 0h4m-4 4v4m4.5-8.5l2.5-2.5M7.5 7.5L5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 21h6c3.314 0 6-2.686 6-6V9c0-3.314-2.686-6-6-6H9C5.686 3 3 5.686 3 9v6c0 3.314 2.686 6 6 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  palette: (props) => (
     <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21a9 9 0 010-18c2.28 0 4.4.85 6 2.3A9 9 0 0112 21z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3a9 9 0 00-6 2.3A9 9 0 0012 3zm6 11.7a9 9 0 01-12-6.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
     </svg>
  ),
  microphone: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 10v1a7 7 0 007 7v0a7 7 0 007-7v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 19v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  briefcase: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 6V5a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-2zM8 5a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm12 13H4V8h16v10z" fill="currentColor"/></svg>
  ),
  code: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 16.5L4 12l4.5-4.5m7 9L20 12l-4.5-4.5M15 4l-6 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  rocket: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.5a2.5 2.5 0 012.5 2.5c0 .5-.4 1.3-.8 1.8l-1.7 2.2-1.7-2.2c-.4-.5-.8-1.3-.8-1.8a2.5 2.5 0 012.5-2.5z" fill="currentColor"/><path d="M13.8 11.1c.3-.3.4-.6.4-1V5.8c0-.8-.7-1.5-1.5-1.5h-1.4c-.8 0-1.5.7-1.5 1.5V10c0 .4.1.7.4 1l.2.2c.4.4.9.6 1.4.6s1-.2 1.4-.6l.2-.2z" stroke="currentColor" strokeWidth="1.5"/><path d="M10 20h4M7.5 17h9a.5.5 0 00.5-.5V14h-10v2.5c0 .3.2.5.5.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ),
  bookOpen: (props) => (

      <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
      </svg>
  ),
  users: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

};

const TechStackIcons = ({ name }) => {
    const iconStyle = "w-12 h-12 md:w-16 md:h-16 text-gray-500";
    switch (name.toLowerCase()) {
        case 'python': return <svg className={iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M14.5 14.25h-5v-4.5h5zm-3.75-1.25h2.5v-2h-2.5zM12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.25 10.75v.75h-8.5v-2.5h1.25V11H7.75v-2.5h1.25v.75h5.5v-2h1.25v4.5z"/></svg>;
        case 'next.js': return <svg className={iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1.125 4.875v8.25h1.75V9.6l4.25 7.5h1.875V6.875h-1.75v7.5l-4.25-7.5z"/></svg>;
        case 'docker': return <svg className={iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M21.93 9.42c-.41-2.9-2.22-5.41-4.79-6.93a9.3 9.3 0 00-9.28 0c-2.57 1.52-4.38 4.03-4.79 6.93a2.9 2.9 0 000 1.16C3.48 13.47 5.7 16 8.61 16h6.78c2.91 0 5.13-2.53 5.54-5.42.12-.86.04-1.74-.4-2.16M17 14H7a2 2 0 110-4h10a2 2 0 110 4m-4-6a2 2 0 100-4 2 2 0 000 4m-4 0a2 2 0 100-4 2 2 0 000 4m-4 0a2 2 0 100-4 2 2 0 000 4"/></svg>;
        case 'openai': return <svg className={iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M16.118 3.033a1.5 1.5 0 00-1.06.44l-5.658 5.656a1.5 1.5 0 000 2.122l2.12 2.12-2.12 2.121a1.5 1.5 0 000 2.121l5.657 5.657a1.5 1.5 0 002.12 0l5.658-5.657a1.5 1.5 0 000-2.121l-2.12-2.121 2.12-2.12a1.5 1.5 0 000-2.122l-5.657-5.656a1.5 1.5 0 00-1.06-.44zM4.364 8.25a1.5 1.5 0 00-2.12 0L.44 10.054a1.5 1.5 0 000 2.122l2.12 2.12a1.5 1.5 0 002.121 0l1.804-1.803a1.5 1.5 0 000-2.122L4.364 8.25z"/></svg>;
        default: return <svg className={iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20m0 18a8 8 0 110-16 8 8 0 010 16m-1-11.5a1.5 1.5 0 013 0v7a1.5 1.5 0 01-3 0zm0-4a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0"/></svg>;
    }
};

// --- Sub-Components for the Landing Page ---

const Header = () => (
  <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-white">
        AI<span className="text-blue-400">应用开发</span>课程
      </div>
      <a 
        href="#cta" 
        className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        立即报名
      </a>
    </nav>
  </header>
);

const Hero = () => (
  <section className="py-20 md:py-32 bg-gray-900">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
        转型 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">AI 应用开发工程师</span>
        <br />
        构建并部署你自己的 AI 应用
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
        一站式实战路径，带你掌握 LLM、计算机视觉、RAG、多模态等核心技术，打造属于你的、可上线的 AI 产品。
      </p>
      <div className="mt-10">
        <a 
          href="#cta" 
          className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
        >
          开启你的 AI 之旅
        </a>
        <p className="mt-4 text-sm text-gray-500">加入首批学员，享受早鸟优惠！</p>
      </div>
    </div>
  </section>
);

const MarketDemand = () => {
    const points = [
      {
        icon: <Icons.briefcase className="w-8 h-8 mx-auto text-blue-400" />,
        title: "技术变革中的人才升级",
        description: "大模型快速落地，企业亟需能理解业务并掌握 AI 工具的复合型人才。学习 AI 应用开发，是提升通用性与长期职业竞争力的重要路径。"
      },
      {
        icon: <Icons.code className="w-8 h-8 mx-auto text-blue-400" />,
        title: "开发者的创作杠杆",
        description: "通过掌握 AI 应用开发，独立开发者可以用更少的人力打造更强功能，实现个人项目、初创产品的快速迭代和上线。"
      },
      {
        icon: <Icons.rocket className="w-8 h-8 mx-auto text-blue-400" />,
        title: "未来技术的新基础设施",
        description: "AI 正在成为像数据库、网络一样的技术底座。越早掌握 AI 开发能力，越能在技术演进中形成复利效应，拥有更多主动权。"
      },
      {
        icon: <Icons.chevronDown className="w-8 h-8 mx-auto text-blue-400" />,
        title: "穿越风口的理性选择",
        description: "与其盲目追逐趋势，不如深入理解 AI 如何落地。学习 AI 应用开发，让你在技术演进中少被替代，多一些选择与确定性。"
      },
      {
        icon: <Icons.bookOpen className="w-8 h-8 mx-auto text-blue-400" />,
        title: "AI 技术栈的入门门槛降低",
        description: "得益于开源模型、API 服务、开发框架的普及，现在比以往任何时候都更容易入门 AI 应用开发。普通开发者也能在短时间内构建实用原型。"
      },
      {
        icon: <Icons.users className="w-8 h-8 mx-auto text-blue-400" />,
        title: "跨领域协作的新通用语言",
        description: "AI 开发正在成为产品、设计、运营与技术协作的新桥梁。掌握 AI 能力，不只是写代码，更是增强与团队沟通和驱动产品落地的核心能力。"
      },
    ];
    return (
        <section id="market" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">为什么现在要学 AI 应用开发？</h2>
                    <p className="text-gray-400 mt-4 max-w-3xl mx-auto">抓住时代机遇，成为行业抢手的顶尖人才。</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {points.map((point, index) => (
                        <div key={index} className="bg-gray-900 p-8 rounded-xl border border-transparent hover:border-blue-500 transition-colors duration-300">
                           <div className="mb-4">{point.icon}</div>
                           <h3 className="font-bold text-xl text-white mb-2">{point.title}</h3>
                           <p className="text-gray-400">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Benefits = () => {
    const benefits = [
        { title: "主流模型 API 调用", description: "精通 OpenAI (GPT-4/DALL·E), Google (Gemini), Hugging Face 等平台的核心接口。" },
        { title: "全栈 AI 应用开发", description: "使用 FastAPI (Python后端) 和 Next.js (前端) 构建交互式 AI Web 应用。" },
        { title: "企业级 RAG 系统构建", description: "从 0 到 1 搭建基于私有知识库的问答系统，掌握向量数据库核心技术。" },
        { title: "多模态应用整合", description: "融合文本、语音、图像，开发 AI 助手、图文创作等前沿多模态应用。" },
        { title: "端到端部署与优化", description: "掌握 Docker、Vercel、AWS 等工具，实现模型压缩、推理优化与一键部署。" },
        { title: "AI 安全与伦理", description: "学习规避 AI 开发中的安全风险、数据隐私和合规问题，做负责任的开发者。" }
    ];

    return (
        <section id="benefits" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">你将收获的核心能力</h2>
                    <p className="text-gray-400 mt-4">成为真正具备全栈能力的 AI 应用开发者</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                    <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                    <h3 className="font-bold text-xl text-white">{benefit.title}</h3>
                    <p className="mt-2 text-gray-400">{benefit.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

const Modules = () => {
    const modulesData = [
        { title: "模块一：AI 应用开发基础与环境搭建", content: ["AI 应用开发全景图：技术栈与流程", "本地与云端开发环境搭建（Python + Conda + Docker）", "使用 Git、VSCode 和 Jupyter 作为主力工具", "常见 AI 应用开发范式：API调用 vs 自主训练"] },
        { title: "模块二：核心AI服务与API调用实战", content: ["OpenAI API 实战（GPT-4, Whisper, DALL·E）", "Hugging Face Transformers 快速上手", "Google Gemini、Claude、Mistral 模型 API 使用", "LLM 接口封装、Token 管理、安全调用实践"] },
        { title: "模块三：AI 与前端交互开发（全栈入门）", content: ["使用 Flask/FastAPI 构建 AI 后端服务", "使用 Next.js 构建交互式 AI Web 应用", "WebSocket 与异步任务处理（如对话流/生成任务）", "前后端部署与联调（Vercel + Railway + Docker）"] },
        { title: "模块四：自然语言处理（LLM 应用核心）", content: ["LLM 的工作机制与模型结构浅析", "Prompt Engineering 提示词设计技巧", "使用 LangChain 构建对话式 AI", "基于知识库的 RAG 应用构建（搜索增强生成）"] },
        { title: "模块五：多模态 AI 应用开发", content: ["使用 OpenAI DALL·E、Stability AI 进行图像生成", "使用 Whisper 进行语音转文字", "文字生成音频（TTS）工具对比与实战", "开发一个文字 + 语音的 AI 助手应用"] },
        { title: "模块六：计算机视觉应用开发", content: ["使用 YOLOv8 进行目标检测", "图像分割、图像风格迁移应用开发", "使用 ControlNet 与 Diffusers 进行图像控制生成", "WebUI + 图像模型部署实践（Gradio + HuggingFace）"] },
        { title: "模块七：企业级 RAG 系统与私有化大模型应用", content: ["FAISS / Weaviate 向量数据库入门", "自定义文档知识库 + RAG 应用开发", "私有部署模型（LLaMA/Mistral） + FastChat 实战", "AI Agent 任务执行系统构建（如 AutoGPT）"] },
        { title: "模块八：AI 应用部署与上线", content: ["使用 Docker 容器化部署 AI 服务", "HuggingFace Spaces / Vercel / AWS 一键部署", "模型压缩与推理优化技巧（ONNX, TRT, 量化）", "多用户 SaaS 型 AI 应用结构设计"] },
        { title: "模块九：AI 安全、伦理与合规", content: ["AI 模型安全风险与防御策略", "数据隐私、合规与版权问题", "内容审核与滥用防范机制", "国内外 AI 法规发展趋势简述"] },
        { title: "结课项目：打造一个完整的 AI 应用产品", content: ["项目方向可选：", "智能对话客服系统（LLM + RAG）", "AI 图文创作助手（GPT + 图像生成）", "多语言会议记录助手（语音转写 + 摘要）", "要求：实现完整的前后端、支持用户输入、部署上线"] },
    ];
    
    const [openIndex, setOpenIndex] = useState(0);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="modules" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">详细课程大纲</h2>
                    <p className="text-gray-400 mt-4">12大模块，36节课，从基础到部署，无一遗漏。</p>
                </div>
                <div className="max-w-4xl mx-auto rounded-lg border border-gray-700 overflow-hidden">
                    {modulesData.map((module, index) => (
                        <div key={index} className="border-b border-gray-700 last:border-b-0">
                            <button
                                onClick={() => handleClick(index)}
                                className="w-full flex justify-between items-center text-left py-5 px-6 text-lg font-semibold text-white hover:bg-gray-800 transition-colors"
                            >
                                <span>{module.title}</span>
                                <Icons.chevronDown className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-400' : 'text-gray-500'}`} />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <div className="p-6 bg-gray-900/50">
                                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                                        {module.content.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CapstoneProject = () => {
    const projects = [
        { title: "智能对话客服系统", tech: "LLM + RAG + FastAPI + Next.js", icon: <Icons.robot className="w-10 h-10 mx-auto" /> },
        { title: "AI 图文创作助手", tech: "GPT + 图像生成 + WebSocket", icon: <Icons.palette className="w-10 h-10 mx-auto" /> },
        { title: "多语言会议纪要助手", tech: "语音转写 + 摘要 + 多语言模型", icon: <Icons.microphone className="w-10 h-10 mx-auto" /> }
    ];
    
    return (
        <section id="project" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">毕业项目：打造一个拿得出手的 AI 产品</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">这不仅是学习的终点，更是你职业生涯的起点。你将获得一个真实可用的线上应用和一份亮眼的个人作品集。</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-teal-500 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-teal-500/20">
                    <div className="text-5xl mb-4 text-teal-400">{project.icon}</div>
                    <h3 className="font-bold text-xl text-white mb-2">{project.title}</h3>
                    <p className="text-teal-400 font-mono text-sm">{project.tech}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

const TargetAudience = () => {
    const audience = [
        {
            icon: "👩‍💻",
            title: "后端/数据开发者",
            description: "希望从传统业务转向炙手可热的 AI 赛道，为职业生涯增添新动力。"
        },
        {
            icon: "🎨",
            title: "前端/全栈开发者",
            description: "渴望为自己的应用注入强大的 AI 能力，打造更智能、更有趣的用户体验。"
        },
        {
            icon: "🎓",
            title: "计算机专业学生",
            description: "希望系统性学习，掌握企业真正需要的 AI 开发技能，在求职中脱颖而出。"
        },
        {
            icon: "👨‍💼",
            title: "技术创业者/产品经理",
            description: "希望深入了解 AI 技术实现，更好地规划和打造 AI 驱动的创新产品。"
        }
    ];

    return (
        <section id="audience" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">本课程为谁设计？</h2>
                    <p className="mt-4 text-lg text-blue-400 font-semibold">
                        专为开发者设计，零 AI 基础也能快速上手！
                    </p>
                    <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
                        只要你具备基础的 Python 编程能力，并了解 Web 开发的基本概念，就能跟上本课程的节奏，开启你的 AI 之旅。
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {audience.map((person, index) => (
                        <div key={index} className="bg-gray-900 p-8 rounded-xl text-center border border-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300">
                            <div className="text-5xl mb-4">{person.icon}</div>
                            <h3 className="font-bold text-xl text-white mb-2">{person.title}</h3>
                            <p className="text-gray-400 text-sm">{person.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const TechStack = () => {
    const techLogos = [
        "Python", "Next.js", "Docker", "OpenAI", 
        "Hugging Face", "Google Gemini", "LangChain", "FastAPI",
        "YOLOv8", "Vercel", "AWS", "Faiss"
    ];

    return (
        <section id="tech" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-3xl font-bold text-white mb-12">你将用到的前沿技术栈</h2>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-10 md:gap-x-12">
                {techLogos.map(logo => (
                    <div key={logo} className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                       <TechStackIcons name={logo} />
                       <span className="text-sm text-gray-400">{logo}</span>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

const CTA = () => (
    <section id="cta" className="py-20 bg-gradient-to-t from-blue-900/30 to-gray-800/50">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">准备好构建未来了吗？</h2>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">
                掌握 AI 应用开发能力，就是掌握未来的核心竞争力。不要再犹豫，立即加入我们！
            </p>
            
            <div className="my-8 flex justify-center items-end gap-4">
                <span className="text-xl text-gray-500 line-through">原价 ¥498</span>
                <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                    早鸟价 ¥298
                </span>
            </div>

            <div className="mt-6">
                <a href="#" className="bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 inline-block shadow-lg shadow-blue-500/30">
                    立即锁定席位
                </a>
                <ul className="mt-8 flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-2 text-gray-400">
                    <li>✔️ 36 节高清视频课程</li>
                    <li>✔️ 所有课程代码和项目文件</li>
                    <li>✔️ 专属学员社群，共同交流进步</li>
                    <li>✔️ 课程结业证书</li>
                </ul>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="py-6 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} AI Dev Course. All Rights Reserved.</p>
        </div>
    </footer>
);

// --- Main App Component ---
// This is the equivalent of your `page.tsx`
export default function App() {
  return (
    // The background color is set on the body tag in layout.tsx or globals.css
    // For this self-contained example, we add it here.
    <div className="bg-gray-900 text-gray-200">
      <Header />
      <main>
        <Hero />
        <MarketDemand />
        <Benefits />
        <Modules />
        <CapstoneProject />
        <TargetAudience />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

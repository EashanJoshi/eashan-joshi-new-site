# Eashan M. Joshi — Personal Portfolio

Portfolio for a **Software Engineer and AI researcher** building intelligent systems—multi-agent LLM platforms, RAG pipelines, and cloud-native production software.

**Live portfolio:** [https://eashan-m-joshi.vercel.app](https://eashan-m-joshi.vercel.app)

## About

This site blends industry software engineering with AI systems work: LLMs, multi-agent orchestration, RAG/GraphRAG research, and scalable backends across fintech and enterprise platforms.

Education: M.S. Data Science (Rochester Institute of Technology, May 2025) and B.E. Computer Engineering (Pune Institute of Computer Technology). AWS Certified Cloud Practitioner and AWS Certified Developer – Associate. Publication at IEEE ICETC 2025 on Maven ecosystem dependency dynamics.

## Work experience

### Senior Full Stack Engineer — Tradeify
**May 2026 – Present** · Miami, USA

- Built the crypto trader frontend using Next.js, TypeScript, Material UI, Redux Toolkit, and TanStack Query across 25+ pages
- Led the Worthy-to-BridgerPay migration with a provider-agnostic tokenization layer
- Drove QA validation of the crypto admin console and documented 20+ pre-launch defects
- Developed Python risk-exposure calculations and Celery automation for the futures backend
- Authored architecture documentation and consolidated 8 duplicated payment-input implementations

### Software Developer — Chime
**May 2025 – May 2026** · Remote, USA

Smart Finance Assistant (AWS Lex/Polly), FastAPI/Flask microservices, React Native dashboards, Cognito/JWT auth, and EKS deployments.

### Software Engineer — Morningstar India Pvt. Ltd.
**Aug 2020 – Jul 2022** · MH, India

Financial-data platforms, Python microservices, REST/SOAP/Azure Function APIs, React dashboards, and Azure DevOps delivery.

### Software Engineer — Yardi Software India Pvt. Ltd.
**Jun 2019 – Jul 2020** · MH, India

Multi-tenant accounting backends, REST APIs, workflow automation, and PySpark/Kafka ETL.

## Skills (site categories)

The Skills section groups software engineering and AI expertise:

- Languages
- Frontend
- Backend
- AI & Machine Learning (LLMs, multi-agent systems, LangChain/LlamaIndex, RAG, vector search, MCP, and more)
- Cloud & DevOps
- Data & Messaging
- Testing & Observability
- Architecture & Engineering
- Certifications

## Publication

E. M. Joshi et al., “Tracing Dependency Dynamics in the Maven Ecosystem.” IEEE ICETC 2025.

- Paper: [View document](https://drive.google.com/file/d/1JtBgr1S6ZlkuFrPmkicmcwhi-oORWC26/view?usp=sharing)
- Source: [GitHub](https://github.com/EashanJoshi/Graph-Based-Analysis-of-the-Maven-Central-Ecosystem)

## Contact

- **Email:** [eashan.m.joshi@gmail.com](mailto:eashan.m.joshi@gmail.com)
- **LinkedIn:** [linkedin.com/in/eashanjoshi](https://www.linkedin.com/in/eashanjoshi/)
- **GitHub:** [github.com/EashanJoshi](https://github.com/EashanJoshi)
- **Portfolio:** [eashan-m-joshi.vercel.app](https://eashan-m-joshi.vercel.app)
- **Instagram:** [instagram.com/eashan_joshi11](https://www.instagram.com/eashan_joshi11/)

## Resume / CV

Latest resume: [`public/Eashan_Joshi_Resume.pdf`](./public/Eashan_Joshi_Resume.pdf)

Live URL: `https://eashan-m-joshi.vercel.app/Eashan_Joshi_Resume.pdf`

## Local development

Requires [Node.js](https://nodejs.org/) (v20+) and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321).

| Command        | Action                                 |
| :------------- | :------------------------------------- |
| `pnpm install` | Install dependencies                   |
| `pnpm dev`     | Start local server at `localhost:4321` |
| `pnpm build`   | Type-check and build to `./dist/`      |
| `pnpm preview` | Preview the production build locally   |
| `pnpm format`  | Format files with Prettier             |
| `pnpm lint`    | Run ESLint                             |

Site content lives in `src/config/index.ts`.

## Deploy

Static Astro site. Push to GitHub and connect the repo to [Vercel](https://vercel.com) (or Netlify).

- Build command: `pnpm build`
- Output directory: `dist`

Based on the [AstroZen](https://github.com/immois/astro-zen) template.

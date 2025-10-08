export type Publication = {
  authors: string;
  title: string;
  venue: string;
  year: string; // keep as string to match existing usage
  status: string;
  arxivId?: string;
  arxivUrl?: string;
  location?: string;
  date?: string;
};

export const publicationsData: Publication[] = [
  {
    authors: "M.M. Hasan, M. Waseem, K.K. Kemell, J. Rasku, J. Ala-Rantala, P. Abrahamsson",
    title: "Assessing Small Language Models for Code Generation: An Empirical Study with Benchmarks",
    venue: "arXiv preprint",
    arxivId: "2507.03160",
    arxivUrl: "https://arxiv.org/pdf/2507.03160",
    status: "Preprint",
    year: "2025"
  },
  {
    authors: "S. Siddeeq, M. Waseem, Z. Rasheed, M.M. Hasan, J. Rasku, M. Saari, P. Abrahamsson",
    title: "LLM-based Multi-Agent System for Intelligent Refactoring of Haskell Code",
    venue: "arXiv preprint",
    arxivId: "2506.19481",
    arxivUrl: "https://arxiv.org/pdf/2506.19481",
    status: "Preprint",
    year: "2025"
  },
  {
    authors: "Z. Rasheed, M.A. Sami, J. Rasku, K.K. Kemell, Z. Zhang, J. Harjamaki, M.M. Hasan, M. Saari, P. Abrahamsson",
    title: "Timeless: A vision for the next generation of software development",
    venue: "arXiv preprint",
    arxivId: "2411.08507",
    arxivUrl: "https://arxiv.org/pdf/2411.08507",
    status: "Preprint",
    year: "2024"
  },
  {
    authors: "M.M. Hasan, S. Pervez, M. Stratigi, K. Stefanidis",
    title: "SQUIRREL 2.0: fairness & explanations for sequential group recommendations",
    venue: "International Workshop on Design, Optimization, Languages and Analytical Processing of Big Data (DOLAP)",
    location: "Co-located with EDBT/ICDT 2024, Paestum, Italy",
    date: "March 25, 2024",
    status: "Published",
    year: "2024"
  },
  {
    authors: "E. Ahmed, M.M. Hasan, M.O. Faruk, M.F. Hossain, M.A. Rahman, A. Islam",
    title: "Icons for the mass: An approach towards text free smart interface",
    venue: "International Conference on Advances in Science, Engineering and Robotics Technology (ICASERT-2019)",
    location: "East West University, Dhaka, Bangladesh",
    date: "May 3-5, 2019",
    status: "Published",
    year: "2019"
  }
];

export default publicationsData;




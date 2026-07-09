import type { ComponentType } from "react";
import { SiPandas, SiNumpy, SiScipy, SiScikitlearn, SiStreamlit, SiDocker, SiDuckdb, SiR } from "react-icons/si";
import { Database, BarChart3, TrendingUp } from "lucide-react";

type IconComponent = ComponentType<{ className?: string }>;

// Logos officiels quand ils existent, icône générique en repli sinon (ex: SQL, Power BI, statsmodels)
const iconMap: Record<string, IconComponent> = {
  pandas: SiPandas,
  numpy: SiNumpy,
  scipy: SiScipy,
  "scikit-learn": SiScikitlearn,
  streamlit: SiStreamlit,
  docker: SiDocker,
  duckdb: SiDuckdb,
  r: SiR,
  sql: Database,
  "power bi": BarChart3,
  statsmodels: TrendingUp,
};

export function TechIcon({ tool, className }: { tool: string; className?: string }) {
  const Icon = iconMap[tool.toLowerCase()] ?? Database;
  return <Icon className={className} />;
}

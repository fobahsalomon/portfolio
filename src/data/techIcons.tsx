import type { ComponentType, CSSProperties } from "react";
import {
  SiPandas, SiNumpy, SiScipy, SiScikitlearn,
  SiTensorflow, SiKeras, SiPytorch,
  SiStreamlit, SiDocker, SiFlask, SiFastapi,
  SiMysql, SiPostgresql, SiMongodb, SiDuckdb,
  SiR, SiGooglesheets, SiJupyter,
  SiPlotly, SiPython,
} from "react-icons/si";
import { Database, TrendingUp, BarChart2, BarChart3, LineChart, Table2, LayoutDashboard } from "lucide-react";

type IconEntry = {
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color: string;
};

const iconMap: Record<string, IconEntry> = {
  // ── Modélisation ─────────────────────────────────────────────────────
  pandas:             { icon: SiPandas,          color: "#150458" },
  numpy:              { icon: SiNumpy,           color: "#4DABCF" },
  scipy:              { icon: SiScipy,           color: "#8CAAE6" },
  statsmodels:        { icon: TrendingUp,        color: "#5C6BC0" },
  "scikit-learn":     { icon: SiScikitlearn,     color: "#F7931E" },
  tensorflow:         { icon: SiTensorflow,      color: "#FF6F00" },
  keras:              { icon: SiKeras,           color: "#D00000" },
  pytorch:            { icon: SiPytorch,         color: "#EE4C2C" },

  // ── Déploiement ──────────────────────────────────────────────────────
  streamlit:          { icon: SiStreamlit,       color: "#FF4B4B" },
  docker:             { icon: SiDocker,          color: "#2496ED" },
  flask:              { icon: SiFlask,           color: "#555555" },
  fastapi:            { icon: SiFastapi,         color: "#009688" },

  // ── Data Engineering ─────────────────────────────────────────────────
  mysql:              { icon: SiMysql,           color: "#4479A1" },
  postgresql:         { icon: SiPostgresql,      color: "#336791" },
  mongodb:            { icon: SiMongodb,         color: "#47A248" },
  duckdb:             { icon: SiDuckdb,          color: "#E5A500" },
  r:                  { icon: SiR,               color: "#276DC3" },
  stata:              { icon: Database,          color: "#1565C0" },
  excel:              { icon: Table2,            color: "#217346" },
  "google sheets":    { icon: SiGooglesheets,    color: "#0F9D58" },
  "jupyter notebook": { icon: SiJupyter,         color: "#F37626" },

  // ── Visualisation ────────────────────────────────────────────────────
  "power bi":         { icon: BarChart3,         color: "#C8A400" },
  "looker studio":    { icon: BarChart3,         color: "#4285F4" },
  matplotlib:         { icon: LineChart,         color: "#11557C" },
  seaborn:            { icon: BarChart2,         color: "#4C72B0" },
  plotly:             { icon: SiPlotly,          color: "#636EFA" },
  tableau:            { icon: LayoutDashboard,   color: "#E97627" },

  // ── Extras ───────────────────────────────────────────────────────────
  python:             { icon: SiPython,          color: "#3776AB" },
  sql:                { icon: Database,          color: "#4479A1" },
};

export function TechIcon({ tool, className }: { tool: string; className?: string }) {
  const entry = iconMap[tool.toLowerCase()];
  if (!entry) return <Database className={className} style={{ color: "#8B6347" }} />;
  const { icon: Icon, color } = entry;
  return <Icon className={className} style={{ color }} />;
}

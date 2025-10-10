import { Database, Search, FileText, ShieldCheck, RefreshCcw, Settings, Receipt, Network } from "lucide-react";

interface Stage {
  name: string;
  status: "Completed" | "In Progress" | "Pending" | "Failed";
}

interface PipelineSidebarProps {
  stages: Stage[];
}

const stageIcons: Record<string, JSX.Element> = {
  "Data Discovery": <Search className="w-4 h-4 text-blue-500" />,
  "Schema Check": <Receipt className="w-4 h-4 text-indigo-500" />,
  "Ingestion Plan": <FileText className="w-4 h-4 text-purple-500" />,
  "Data Ingestion": <Database className="w-4 h-4 text-green-500" />,
  "Data Quality Checks": <ShieldCheck className="w-4 h-4 text-yellow-500" />,
  "Reconciliation Checks": <RefreshCcw className="w-4 h-4 text-orange-500" />,
  "Metadata Updates": <Settings className="w-4 h-4 text-gray-500" />,
};

export const PipelineSidebar: React.FC<PipelineSidebarProps> = ({ stages }) => (
  <div className="p-4 ">
    <h2 className="text-lg font-semibold mb-4 text-gray-800 text-center flex items-center justify-center gap-3">
      <Network className="text-yellow-500 w-6 h-6" />
      <span>Pipeline Progress</span>
    </h2>

    <ul className="space-y-3">
      {stages.map((stage, idx) => (
        <li key={idx} className={`flex items-center justify-between bg-gray-50 p-2 rounded shadow-sm border ${stage.status === "Completed"
          ? "border-green-500 border-2"
          : stage.status === "In Progress"
            ? "border-yellow-500 border-2 animate-pulse"
            : stage.status === "Failed"
              ? "border-red-500 border-2"
              : "border-transparent"
          }`}>
          <div className="flex items-center gap-2">
            {stageIcons[stage.name] || <Settings className="w-4 h-4 text-gray-400" />}
            <span className="text-sm text-gray-700 font-medium">{stage.name}</span>
          </div>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${stage.status === "Completed"
            ? "bg-green-100 text-green-700"
            : stage.status === "In Progress"
              ? "bg-yellow-100 text-yellow-700"
              : stage.status === "Failed"
                ? "bg-red-600 text-gray-100"
                : "bg-gray-200 text-gray-600"

            }`}>
            {stage.status}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
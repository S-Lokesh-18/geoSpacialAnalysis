
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle, Play } from 'lucide-react';

interface WorkflowStep {
  step: number;
  action: string;
  status: 'completed' | 'processing' | 'pending' | 'error';
  details: string;
}

interface Workflow {
  id: number;
  query: string;
  steps: WorkflowStep[];
  timestamp: string;
}

interface WorkflowViewerProps {
  workflow: Workflow | null;
}

export const WorkflowViewer = ({ workflow }: WorkflowViewerProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'processing':
        return <Play className="w-4 h-4 text-blue-500 animate-pulse" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-slate-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'processing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  if (!workflow) {
    return (
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-lg">Chain-of-Thought Workflow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-slate-500">
            <Play className="w-12 h-12 mx-auto mb-3 text-slate-300" />
            <p>Submit a query to see the AI reasoning process</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-lg">Chain-of-Thought Workflow</CardTitle>
        <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
          <strong>Query:</strong> {workflow.query}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {workflow.steps.map((step, idx) => (
            <div key={idx} className="relative">
              {idx < workflow.steps.length - 1 && (
                <div className="absolute left-5 top-10 w-px h-8 bg-slate-200" />
              )}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center">
                  {getStatusIcon(step.status)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-slate-800">
                      Step {step.step}
                    </span>
                    <Badge className={`text-xs ${getStatusColor(step.status)}`}>
                      {step.status}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-slate-700 mb-1">
                    {step.action}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {step.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

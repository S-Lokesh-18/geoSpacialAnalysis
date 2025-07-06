
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, FileText, Image, Database, TrendingUp } from 'lucide-react';

export const ResultsPanel = ({ results }) => {
  const mockChartData = [
    { name: 'High Risk', value: 25, color: '#ef4444' },
    { name: 'Medium Risk', value: 45, color: '#f59e0b' },
    { name: 'Low Risk', value: 30, color: '#10b981' }
  ];

  const mockBarData = [
    { area: 'Zone A', risk: 85 },
    { area: 'Zone B', risk: 65 },
    { area: 'Zone C', risk: 45 },
    { area: 'Zone D', risk: 25 }
  ];

  return (
    <div className="space-y-6">
      {/* Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Analysis Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-slate-800">247</div>
              <div className="text-sm text-slate-600">High Risk Areas</div>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-slate-800">1,432</div>
              <div className="text-sm text-slate-600">Total Polygons</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Processing Complete</span>
                <span>100%</span>
              </div>
              <Progress value={100} />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Flood Risk Analysis</Badge>
              <Badge variant="outline">Elevation Model</Badge>
              <Badge variant="outline">Buffer Analysis</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Distribution Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {mockChartData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Zone Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Risk by Zone</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockBarData}>
                <XAxis dataKey="area" />
                <YAxis />
                <Bar dataKey="risk" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Export Options */}
      <Card>
        <CardHeader>
          <CardTitle>Export Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="sm">
              <Image className="w-4 h-4 mr-2" />
              Map (PNG)
            </Button>
            <Button variant="outline" size="sm">
              <Database className="w-4 h-4 mr-2" />
              Shapefile
            </Button>
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Report (PDF)
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Workflow
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

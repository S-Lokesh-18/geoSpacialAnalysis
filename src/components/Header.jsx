
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Brain, Satellite, Download } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  GeoAI Workflow
                </h1>
                <p className="text-sm text-slate-600">Natural Language to GIS Automation</p>
              </div>
            </div>
            <Badge variant="secondary" className="ml-4">
              <Brain className="w-3 h-3 mr-1" />
              Chain-of-Thought Reasoning
            </Badge>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Satellite className="w-4 h-4 mr-2" />
              Connect Bhoonidhi
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Workflow
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
              New Analysis
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

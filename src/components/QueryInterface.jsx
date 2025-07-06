
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Loader2, Lightbulb } from 'lucide-react';

export const QueryInterface = ({ onQuerySubmit, isProcessing }) => {
  const [query, setQuery] = useState('');
  
  const exampleQueries = [
    "Map flood-prone areas in Bhopal using elevation and rainfall data",
    "Find optimal locations for solar farms near Mumbai with slope < 5%",
    "Analyze urban sprawl in Bangalore between 2010-2020",
    "Identify deforestation hotspots in Western Ghats using NDVI"
  ];

  const handleSubmit = () => {
    if (query.trim()) {
      onQuerySubmit(query);
    }
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
            <Send className="w-4 h-4 text-white" />
          </div>
          <span>Natural Language GIS Query</span>
        </CardTitle>
        <p className="text-slate-600">
          Describe your spatial analysis task in plain English. The AI will break it down into executable GIS workflows.
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="relative">
          <Textarea
            placeholder="Example: Map flood risk zones in Chennai using elevation data and proximity to water bodies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={4}
            className="resize-none pr-20"
          />
          <Button 
            onClick={handleSubmit}
            disabled={!query.trim() || isProcessing}
            className="absolute bottom-3 right-3 h-8 px-3"
            size="sm"
          >
            {isProcessing ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Lightbulb className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-slate-700">Example Queries:</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {exampleQueries.map((example, idx) => (
              <Badge 
                key={idx}
                variant="outline" 
                className="cursor-pointer hover:bg-slate-50 p-2 h-auto text-left justify-start"
                onClick={() => setQuery(example)}
              >
                {example}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

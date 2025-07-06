
import React, { useState } from 'react';
import { Header } from '../components/Header';
import { QueryInterface } from '../components/QueryInterface';
import { WorkflowViewer } from '../components/WorkflowViewer';
import { MapViewer } from '../components/MapViewer';
import { DataUploader } from '../components/DataUploader';
import { ResultsPanel } from '../components/ResultsPanel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [currentWorkflow, setCurrentWorkflow] = useState(null);
  const [uploadedData, setUploadedData] = useState([]);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleQuerySubmit = async (query) => {
    setIsProcessing(true);
    // Simulate AI processing with mock workflow
    setTimeout(() => {
      const mockWorkflow = {
        id: Date.now(),
        query: query,
        steps: [
          { step: 1, action: "Parse spatial query", status: "completed", details: `Analyzing: "${query}"` },
          { step: 2, action: "Load required datasets", status: "completed", details: "Loading raster and vector data" },
          { step: 3, action: "Reproject to common CRS", status: "completed", details: "Converting to EPSG:4326" },
          { step: 4, action: "Perform spatial analysis", status: "processing", details: "Running geoprocessing tools..." },
          { step: 5, action: "Generate output", status: "pending", details: "Creating maps and reports" }
        ],
        timestamp: new Date().toISOString()
      };
      setCurrentWorkflow(mockWorkflow);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Query Interface */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
          <QueryInterface 
            onQuerySubmit={handleQuerySubmit}
            isProcessing={isProcessing}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Data & Workflow */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200">
              <Tabs defaultValue="data" className="w-full">
                <TabsList className="grid w-full grid-cols-2 rounded-t-xl">
                  <TabsTrigger value="data">Data Sources</TabsTrigger>
                  <TabsTrigger value="workflow">Workflow</TabsTrigger>
                </TabsList>
                <TabsContent value="data" className="p-6">
                  <DataUploader 
                    uploadedData={uploadedData}
                    setUploadedData={setUploadedData}
                  />
                </TabsContent>
                <TabsContent value="workflow" className="p-6">
                  <WorkflowViewer workflow={currentWorkflow} />
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Panel - Map & Results */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200">
              <Tabs defaultValue="map" className="w-full">
                <TabsList className="grid w-full grid-cols-2 rounded-t-xl">
                  <TabsTrigger value="map">Interactive Map</TabsTrigger>
                  <TabsTrigger value="results">Analysis Results</TabsTrigger>
                </TabsList>
                <TabsContent value="map" className="p-6">
                  <MapViewer />
                </TabsContent>
                <TabsContent value="results" className="p-6">
                  <ResultsPanel results={analysisResults} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

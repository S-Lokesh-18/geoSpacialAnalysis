
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Map, Layers, ZoomIn, ZoomOut, Download, Satellite } from 'lucide-react';

export const MapViewer = () => {
  return (
    <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl overflow-hidden">
      {/* Map Controls */}
      <div className="absolute top-4 left-4 z-10 space-y-2">
        <Button size="sm" variant="outline" className="bg-white/90">
          <Layers className="w-4 h-4" />
        </Button>
        <Button size="sm" variant="outline" className="bg-white/90">
          <ZoomIn className="w-4 h-4" />
        </Button>
        <Button size="sm" variant="outline" className="bg-white/90">
          <ZoomOut className="w-4 h-4" />
        </Button>
      </div>

      {/* Layer Controls */}
      <div className="absolute top-4 right-4 z-10 space-y-2">
        <Badge variant="secondary" className="bg-white/90">
          <Satellite className="w-3 h-3 mr-1" />
          Satellite
        </Badge>
        <Button size="sm" variant="outline" className="bg-white/90">
          <Download className="w-4 h-4 mr-1" />
          Export
        </Button>
      </div>

      {/* Mock Map Content */}
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <Map className="w-16 h-16 mx-auto mb-4 text-slate-400" />
          <h3 className="text-lg font-semibold text-slate-700 mb-2">Interactive Map View</h3>
          <p className="text-slate-500 max-w-md">
            Analysis results will be visualized here with interactive layers, 
            overlays, and real-time rendering of GIS operations.
          </p>
          
          {/* Mock visualization elements */}
          <div className="mt-6 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" title="High Risk Areas" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" title="Medium Risk Areas" />
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" title="Low Risk Areas" />
          </div>
          <p className="text-xs text-slate-400 mt-2">Risk Assessment Zones</p>
        </div>
      </div>

      {/* Coordinate Display */}
      <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm text-slate-600">
        Lat: 19.0760°, Lng: 72.8777° | EPSG:4326
      </div>
    </div>
  );
};

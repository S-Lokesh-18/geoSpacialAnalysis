
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Database, Satellite, FileImage, Map } from 'lucide-react';

interface DataUploaderProps {
  uploadedData: any[];
  setUploadedData: (data: any[]) => void;
}

export const DataUploader = ({ uploadedData, setUploadedData }: DataUploaderProps) => {
  const dataSources = [
    { name: 'Bhoonidhi STAC', icon: Satellite, type: 'satellite', status: 'connected' },
    { name: 'OpenStreetMap', icon: Map, type: 'vector', status: 'connected' },
    { name: 'User Uploads', icon: Upload, type: 'mixed', status: 'ready' }
  ];

  const mockData = [
    { name: 'Mumbai_DEM.tif', type: 'raster', size: '45.2 MB', format: 'GeoTIFF' },
    { name: 'flood_zones.shp', type: 'vector', size: '2.1 MB', format: 'Shapefile' },
    { name: 'land_cover_2020.tif', type: 'raster', size: '128.7 MB', format: 'GeoTIFF' }
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-slate-800 mb-3">Data Sources</h3>
        <div className="space-y-2">
          {dataSources.map((source, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border">
              <div className="flex items-center space-x-3">
                <source.icon className="w-5 h-5 text-slate-600" />
                <div>
                  <p className="font-medium text-slate-800">{source.name}</p>
                  <p className="text-xs text-slate-500">{source.type}</p>
                </div>
              </div>
              <Badge variant={source.status === 'connected' ? 'default' : 'secondary'}>
                {source.status}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-slate-800">Available Datasets</h3>
          <Button size="sm" variant="outline">
            <Upload className="w-4 h-4 mr-1" />
            Upload
          </Button>
        </div>
        <div className="space-y-2">
          {mockData.map((file, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-white border rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex items-center space-x-3">
                <FileImage className="w-4 h-4 text-slate-400" />
                <div>
                  <p className="font-medium text-slate-800 text-sm">{file.name}</p>
                  <div className="flex items-center space-x-2 text-xs text-slate-500">
                    <span>{file.format}</span>
                    <span>•</span>
                    <span>{file.size}</span>
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                {file.type}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      <Button 
        className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
        size="sm"
      >
        <Database className="w-4 h-4 mr-2" />
        Browse Bhoonidhi Catalog
      </Button>
    </div>
  );
};

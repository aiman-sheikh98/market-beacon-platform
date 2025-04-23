
import { useState } from "react";
import { Card } from "@/components/ui/card";

type TimeRange = '1d' | '5d' | '1m' | '6m' | '1y' | '5y';

// Mock chart data
const generateChartData = (points: number, uptrend: boolean) => {
  let data = [];
  let value = 100 + Math.random() * 10;
  
  for (let i = 0; i < points; i++) {
    if (uptrend) {
      value = value + (Math.random() * 2) - 0.5;
    } else {
      value = value - (Math.random() * 2) + 0.5;
    }
    data.push({
      time: new Date(Date.now() - (points - i) * 3600000).toISOString(),
      value: Math.max(0, value)
    });
  }
  return data;
};

export const StockChart = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('1m');
  const [chartData] = useState(generateChartData(30, true));
  
  const maxValue = Math.max(...chartData.map(item => item.value));
  const minValue = Math.min(...chartData.map(item => item.value));
  
  // Calculate chart dimensions
  const chartHeight = 250;
  const chartWidth = "100%";
  const yAxisSpace = 40;
  const bottomAxisSpace = 20;
  const innerHeight = chartHeight - bottomAxisSpace;
  
  // Scale values for plotting
  const scaleY = (value: number) => {
    return innerHeight - ((value - minValue) / (maxValue - minValue) * innerHeight);
  };
  
  // Generate the path for the line chart
  const generatePath = () => {
    return chartData
      .map((point, index) => {
        const x = `${(index / (chartData.length - 1)) * 100}%`;
        const y = scaleY(point.value);
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  };
  
  return (
    <Card className="p-4 border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">AAPL | Apple Inc.</h2>
        <div className="font-bold text-xl">
          $189.84 <span className="text-financial-gain text-sm">+0.94 (+0.50%)</span>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between mb-4">
          {(['1d', '5d', '1m', '6m', '1y', '5y'] as TimeRange[]).map((range) => (
            <button
              key={range}
              className={`px-3 py-1 rounded-md ${
                timeRange === range 
                ? 'bg-financial-highlight text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setTimeRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
        
        <div style={{ height: `${chartHeight}px`, position: 'relative' }}>
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500" style={{ width: `${yAxisSpace}px` }}>
            <span>${maxValue.toFixed(2)}</span>
            <span>${((maxValue + minValue) / 2).toFixed(2)}</span>
            <span>${minValue.toFixed(2)}</span>
          </div>
          
          {/* Chart */}
          <div style={{ position: 'absolute', left: `${yAxisSpace}px`, right: 0, top: 0, height: `${innerHeight}px` }}>
            {/* Grid lines */}
            <div className="absolute inset-0 border-b border-gray-200">
              <div className="absolute top-1/4 w-full border-b border-gray-100"></div>
              <div className="absolute top-2/4 w-full border-b border-gray-100"></div>
              <div className="absolute top-3/4 w-full border-b border-gray-100"></div>
            </div>
            
            {/* Chart line */}
            <svg width="100%" height="100%" viewBox={`0 0 100 ${innerHeight}`} preserveAspectRatio="none">
              <path
                d={generatePath()}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />
            </svg>
          </div>
          
          {/* X-axis labels */}
          <div 
            className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500"
            style={{ marginLeft: `${yAxisSpace}px`, height: `${bottomAxisSpace}px` }}
          >
            {chartData.filter((_, i) => i % Math.floor(chartData.length / 5) === 0).map((point, i) => (
              <span key={i}>{new Date(point.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

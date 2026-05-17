# Data Visualization Analytics Dashboard

A professional, responsive analytics dashboard built with React and Recharts, featuring multiple chart types for comprehensive business analytics and data insights.

##  Overview

This practical worksheet demonstrates how to implement various charting libraries to create an interactive analytics dashboard. The dashboard includes:

 **Key Metrics Display**: Summary cards showing total sales, revenue, users, and performance metrics
 **Multiple Chart Types**: Line charts, bar charts, pie charts, and area charts
 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
 **Interactive Elements**: Hover effects, date range selection, and real-time data updates
 **Professional Styling**: Modern gradient design with smooth animations

### Prerequisites
 Node.js v16 or higher
 npm or yarn

### Installation & Running

```bash
# Navigate to project
cd Practical7/data-viz-dashboard

# Install dependencies (already done)
npm install recharts

# Start development server (already running!)
npm run dev

# Open http://localhost:5173/
```

##  Chart Types Implemented

### 1. **Line Chart** - Monthly Sales & Revenue Trend
- **Purpose**: Track trends over time
- **Features**:
  - Dual series (Sales and Revenue)
  - Interactive dots on hover
  - Smooth animation
  - Tooltip with data values
- **Use Case**: Sales performance tracking, trend analysis

### 2. **Bar Chart** - Regional Sales by Quarter
- **Purpose**: Compare categories side-by-side
- **Features**:
  - 4 quarterly bars per region
  - Color-coded quarters
  - Responsive bar width
  - Legend for clarity
- **Use Case**: Regional performance comparison, quarterly analysis

### 3. **Pie Chart** - Product Category Distribution
- **Purpose**: Show proportion of whole
- **Features**:
  - Custom labels with percentages
  - Color-coded segments
  - Interactive hover effects
  - Percentage display
- **Use Case**: Market share analysis, category breakdown

### 4. **Area Chart** - Website Performance Metrics
- **Purpose**: Visualize trends with filled areas
- **Features**:
  - Dual metrics (response time, error rate)
  - Gradient fills for visual appeal
  - Dual Y-axis (if configured)
  - Range visualization
- **Use Case**: Performance monitoring, system health

##  Key Components

### StatCard Component
Displays key metrics with:
- Large numeric value
- Icon and title
- Supporting text
- Trend indicator (↑/↓)
- Color-coded left border

### Dashboard Component
Main container that:
- Arranges all charts in a grid
- Manages date range selection
- Calculates statistics
- Provides header and footer

### Chart Components
Each chart:
- Uses ResponsiveContainer for responsive width
- Has consistent styling with ChartContainer.css
- Includes title and description
- Features interactive tooltips
- Uses color palette from utils

## Data Structures

### Monthly Data
```javascript
{ month: 'Jan', sales: 4000, revenue: 2400, users: 2400 }
```

### Category Data
```javascript
{ name: 'Electronics', value: 4000, percentage: 35 }
```

### Regional Data
```javascript
{ region: 'North America', q1: 4000, q2: 3000, q3: 2000, q4: 2780 }
```

### Performance Data
```javascript
{ time: '12:00 AM', responseTime: 2400, errorRate: 3.2 }
```

##  Utility Functions

### Formatters

**formatNumber(value)** - Formats large numbers with K/M/B suffixes
**formatCurrency(value)** - Adds dollar sign and thousands separators
**formatPercent(value)** - Formats percentage values
**calculateSum(data, key)** - Sums values for a specific key
**calculateAverage(data, key)** - Calculates average across array
**findMax / findMin(data, key)** - Finds max/min values

##  Styling & Design

### Color Palette
- Primary: #667eea (Purple)
- Secondary: #764ba2 (Dark Purple)
- Success: #4caf50 (Green)
- Danger: #f44336 (Red)

### Responsive Breakpoints
- Desktop: Full multi-column layout
- Tablet (768px): 2-column charts
- Mobile (480px): Single column

## Features

###  Data Visualization
- Multiple chart types
- Real-time data display
- Interactive tooltips
- Responsive charts

###  Interactivity
- Date range selector
- Hover effects
- Animated transitions
- Clickable legends

###  Performance
- Optimized rendering
- Efficient calculations
- Lightweight dependencies
- Smooth animations

###  Responsiveness
- Mobile-first design
- Flexible grid layouts
- Touch-friendly controls
- Adaptive fonts

## Learning Outcomes

 Setting up Recharts
 Multiple chart types
 Responsive design
 Data binding
 Custom styling
 Component composition
 Data utilities
 Dashboard architecture

##  Build for Production

```bash
npm run build
```

---

**Built with ❤️ using React + Recharts**

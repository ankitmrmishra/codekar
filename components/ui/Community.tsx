"use client";

import { Sparkles, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
  Area,
  AreaChart,
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function Community() {
  return (
    <div className="flex flex-col justify-center align-middle w-full lg:w-7xl items-center ">
      <div className="text-center md:max-w-4xl">
        <div className="heading text-white md:text-6xl text-3xl ">
          Where frontend warriors rise together.
        </div>
        <div className="heading text-white/50 italic md:text-2xl py-2">
          CodeKar isn&apos;t just a challenge platform — it&apos;s a tribe of
          developers pushing each other to level up, ship faster, and learn
          smarter.
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-2 justify-start  lg:w-6xl align-middle ">
        <ChartBarLabelCustom />
        <ChartAreaLinear />

        <ChartRadialText />
        {/* <ChartBarLabelCustom /> */}
      </div>
    </div>
  );
}

const chartData = [
  { month: "January", Discord: 186, mobile: 80 },
  { month: "February", Discord: 305, mobile: 200 },
  { month: "March", Discord: 237, mobile: 120 },
  { month: "April", Discord: 73, mobile: 190 },
  { month: "May", Discord: 209, mobile: 130 },
  { month: "June", Discord: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--lime-green)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--lime-green)",
  },
} satisfies ChartConfig;

export function ChartBarLabelCustom() {
  return (
    <Card className="bg-black text-white flex justify-between lg:w-2xl w-full">
      <CardHeader>
        <CardTitle>CodeKar Weekly Warriors </CardTitle>
        <CardDescription>100+ devs top the charts each month</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            className="text-white"
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            {/* <CartesianGrid horizontal={false} /> */}
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={1}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="Discord" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="Discord"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={10}
                className="fill-black"
                fontSize={12}
              />
              <LabelList
                dataKey="Discord"
                position="right"
                offset={8}
                className="fill-white"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Based on new developer participation in CodeKar’s weekly leaderboards
          on Discord.
        </div>
      </CardFooter>
    </Card>
  );
}

const chartDataForDevelopers = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

export function ChartAreaLinear() {
  return (
    <Card className="bg-black text-white flex justify-between lg:w-2xl w-full">
      <CardHeader>
        <CardTitle>Developer Growth on Discord</CardTitle>
        <CardDescription>
          Charting our thriving community, week by week
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            className=""
            accessibilityLayer
            data={chartDataForDevelopers}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="desktop"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          +327 new devs joined last month{" "}
          <Sparkles className="h-4 w-4 text-green-400" />
        </div>
        <div className="text-muted-foreground leading-none">
          Real-time community growth from CodeKar’s Discord analytics
        </div>
      </CardFooter>
    </Card>
  );
}

const chartDataJob = [
  {
    label: "Under 2 Months",
    value: 72,
    fill: "var(--color-black)",
  },
  {
    label: "2+ Months",
    value: 28,
    fill: "var(--color-muted)",
  },
];

export function ChartRadialText() {
  return (
    <Card className="flex flex-col bg-black lg:w-2xl w-full text-white">
      <CardHeader className="items-start pb-0">
        <CardTitle>Fast-Tracked Interview Callbacks</CardTitle>
        <CardDescription>
          {" "}
          72% of developers got callbacks in less than 2 months
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartDataJob}
            startAngle={90}
            endAngle={-270}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              polarRadius={[86, 74]}
            />
            <RadialBar
              dataKey="value"
              background
              cornerRadius={2}
              label={false}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-lime-400 text-4xl font-bold"
                        >
                          {chartDataJob[0].value}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-white text-sm"
                        >
                          Within 2 Months
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total interview callbacks from CodeKar users
        </div>
      </CardFooter>
    </Card>
  );
}

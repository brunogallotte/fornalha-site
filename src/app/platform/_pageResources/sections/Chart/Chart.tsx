"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartData = [
  { date: "2024-04-01", expense: 222, earning: 150 },
  { date: "2024-04-02", expense: 97, earning: 180 },
  { date: "2024-04-03", expense: 167, earning: 120 },
  { date: "2024-04-04", expense: 242, earning: 260 },
  { date: "2024-04-05", expense: 373, earning: 290 },
  { date: "2024-04-06", expense: 301, earning: 340 },
  { date: "2024-04-07", expense: 245, earning: 180 },
  { date: "2024-04-08", expense: 409, earning: 320 },
  { date: "2024-04-09", expense: 59, earning: 110 },
  { date: "2024-04-10", expense: 261, earning: 190 },
  { date: "2024-04-11", expense: 327, earning: 350 },
  { date: "2024-04-12", expense: 292, earning: 210 },
  { date: "2024-04-13", expense: 342, earning: 380 },
  { date: "2024-04-14", expense: 137, earning: 220 },
  { date: "2024-04-15", expense: 120, earning: 170 },
  { date: "2024-04-16", expense: 138, earning: 190 },
  { date: "2024-04-17", expense: 446, earning: 360 },
  { date: "2024-04-18", expense: 364, earning: 410 },
  { date: "2024-04-19", expense: 243, earning: 180 },
  { date: "2024-04-20", expense: 89, earning: 150 },
  { date: "2024-04-21", expense: 137, earning: 200 },
  { date: "2024-04-22", expense: 224, earning: 170 },
  { date: "2024-04-23", expense: 138, earning: 230 },
  { date: "2024-04-24", expense: 387, earning: 290 },
  { date: "2024-04-25", expense: 215, earning: 250 },
  { date: "2024-04-26", expense: 75, earning: 130 },
  { date: "2024-04-27", expense: 383, earning: 420 },
  { date: "2024-04-28", expense: 122, earning: 180 },
  { date: "2024-04-29", expense: 315, earning: 240 },
  { date: "2024-04-30", expense: 454, earning: 380 },
  { date: "2024-05-01", expense: 165, earning: 220 },
  { date: "2024-05-02", expense: 293, earning: 310 },
  { date: "2024-05-03", expense: 247, earning: 190 },
  { date: "2024-05-04", expense: 385, earning: 420 },
  { date: "2024-05-05", expense: 481, earning: 390 },
  { date: "2024-05-06", expense: 498, earning: 520 },
  { date: "2024-05-07", expense: 388, earning: 300 },
  { date: "2024-05-08", expense: 149, earning: 210 },
  { date: "2024-05-09", expense: 227, earning: 180 },
  { date: "2024-05-10", expense: 293, earning: 330 },
  { date: "2024-05-11", expense: 335, earning: 270 },
  { date: "2024-05-12", expense: 197, earning: 240 },
  { date: "2024-05-13", expense: 197, earning: 160 },
  { date: "2024-05-14", expense: 448, earning: 490 },
  { date: "2024-05-15", expense: 473, earning: 380 },
  { date: "2024-05-16", expense: 338, earning: 400 },
  { date: "2024-05-17", expense: 499, earning: 420 },
  { date: "2024-05-18", expense: 315, earning: 350 },
  { date: "2024-05-19", expense: 235, earning: 180 },
  { date: "2024-05-20", expense: 177, earning: 230 },
  { date: "2024-05-21", expense: 82, earning: 140 },
  { date: "2024-05-22", expense: 81, earning: 120 },
  { date: "2024-05-23", expense: 252, earning: 290 },
  { date: "2024-05-24", expense: 294, earning: 220 },
  { date: "2024-05-25", expense: 201, earning: 250 },
  { date: "2024-05-26", expense: 213, earning: 170 },
  { date: "2024-05-27", expense: 420, earning: 460 },
  { date: "2024-05-28", expense: 233, earning: 190 },
  { date: "2024-05-29", expense: 78, earning: 130 },
  { date: "2024-05-30", expense: 340, earning: 280 },
  { date: "2024-05-31", expense: 178, earning: 230 },
  { date: "2024-06-01", expense: 178, earning: 200 },
  { date: "2024-06-02", expense: 470, earning: 410 },
  { date: "2024-06-03", expense: 103, earning: 160 },
  { date: "2024-06-04", expense: 439, earning: 380 },
  { date: "2024-06-05", expense: 88, earning: 140 },
  { date: "2024-06-06", expense: 294, earning: 250 },
  { date: "2024-06-07", expense: 323, earning: 370 },
  { date: "2024-06-08", expense: 385, earning: 320 },
  { date: "2024-06-09", expense: 438, earning: 480 },
  { date: "2024-06-10", expense: 155, earning: 200 },
  { date: "2024-06-11", expense: 92, earning: 150 },
  { date: "2024-06-12", expense: 492, earning: 420 },
  { date: "2024-06-13", expense: 81, earning: 130 },
  { date: "2024-06-14", expense: 426, earning: 380 },
  { date: "2024-06-15", expense: 307, earning: 350 },
  { date: "2024-06-16", expense: 371, earning: 310 },
  { date: "2024-06-17", expense: 475, earning: 520 },
  { date: "2024-06-18", expense: 107, earning: 170 },
  { date: "2024-06-19", expense: 341, earning: 290 },
  { date: "2024-06-20", expense: 408, earning: 450 },
  { date: "2024-06-21", expense: 169, earning: 210 },
  { date: "2024-06-22", expense: 317, earning: 270 },
  { date: "2024-06-23", expense: 480, earning: 530 },
  { date: "2024-06-24", expense: 132, earning: 180 },
  { date: "2024-06-25", expense: 141, earning: 190 },
  { date: "2024-06-26", expense: 434, earning: 380 },
  { date: "2024-06-27", expense: 448, earning: 490 },
  { date: "2024-06-28", expense: 149, earning: 200 },
  { date: "2024-06-29", expense: 103, earning: 160 },
  { date: "2024-06-30", expense: 446, earning: 400 },
];

const chartConfig = {
  value: {
    label: "Value",
  },
  expense: {
    label: "Expenses",
    color: "hsl(var(--chart-1))",
  },
  earning: {
    label: "Earnings",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const Chart = () => {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("expense");

  const total = React.useMemo(
    () => ({
      expense: chartData.reduce((acc, curr) => acc + curr.expense, 0),
      earning: chartData.reduce((acc, curr) => acc + curr.earning, 0),
    }),
    []
  );

  return (
    <Card className="mt-10">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Total of expenses</CardTitle>
          <CardDescription>Total of expenses in last 90 days</CardDescription>
        </div>
        <div className="flex">
          {["expense", "earning"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="value"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

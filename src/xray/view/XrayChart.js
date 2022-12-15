import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import XrayTitle from './XrayTitle';
import {data} from "../constants/constans";


export default function XrayChart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <XrayTitle>Event Chart</XrayTitle>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            dataKey="amount"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            {/*<Label*/}
            {/*  angle={270}*/}
            {/*  position="left"*/}
            {/*  style={{*/}
            {/*    textAnchor: 'middle',*/}
            {/*    fill: theme.palette.text.primary,*/}
            {/*    ...theme.typography.body1,*/}
            {/*  }}*/}
            {/*>*/}
            {/*</Label>*/}
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

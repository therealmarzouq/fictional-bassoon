import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const LineChart = ({ ...props }) => {
  const { chartData, pointer, color, isCurrency } = props
  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#A0A4A8',
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          borderDash: [8, 4],
        },
        ticks: {
          maxTicksLimit: 10,
          callback: function (
            value: {
              toLocaleString: (
                arg0: string,
                arg1: { style: string; currency: string }
              ) => any
            },
            index: any,
            values: any
          ) {
            if (isCurrency) {
              return value
                .toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })
                .slice(0, -3)
            } else {
              return value
            }
          },
          color: '#A0A4A8',
        },
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
    },
    layout: {
      padding: {
        top: 5,
      },
    },
  }
  const data = {
    labels: chartData.map((data: any) => data.date),
    datasets: [
      {
        label: 'First dataset',
        data: chartData.map((data: any) => data.value),
        fill: false,
        borderColor: color,
        borderWidth: 2,
        pointStyle: 'circle',
        pointRadius: 5,
        pointBorderWidth: 3,
        backgroundColor: pointer,
        pointBorderColor: '#ffffff',
      },
    ],
  }
  return <Line options={options} data={data} />
}

export default LineChart

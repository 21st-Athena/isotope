import BubbleChart from "@/components/bubbleChart";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { LineChart } from "@/components/lineChart";
import TotalNum from "@/components/totalNum";

const Analytics = () => {
  const totalSession = [
    {
      label: "Dataset 1",
      data: [0.1, 0.3, 0.4, 0.6, 0.9, 1],
      borderColor: "#FBBC05",
      backgroundColor: "#FBBC05",
    },
  ];
  const totalVisitor = [
    {
      label: "Dataset 1",
      data: [0.1, 0.3, 0.4, 0.6, 0.9, 1],
      borderColor: "#FBBC05",
      backgroundColor: "#FBBC05",
    },
    {
      label: "Dataset 2",
      data: [0.15, 0.35, 0.45, 0.62, 0.88, 0.97],
      borderColor: "#7B61FF",
      backgroundColor: "#7B61FF",
    },
  ];
  const timeSpent = [
    {
      label: "Dataset 1",
      data: [0.1, 0.3, 0.4, 0.6, 0.9, 1],
      borderColor: "#FBBC05",
      backgroundColor: "#FBBC05",
    },
  ];
  const boundRate = [
    {
      label: "Dataset 1",
      data: [0.1, 0.3, 0.4, 0.6, 0.9, 1],
      borderColor: "#FBBC05",
      backgroundColor: "#FBBC05",
    },
    {
      label: "Dataset 2",
      data: [0.15, 0.35, 0.45, 0.62, 0.88, 0.97],
      borderColor: "#7B61FF",
      backgroundColor: "#7B61FF",
    },
  ];
  const monthlyView = [
    {
      label: "Free Members",
      data: [20, 25, 10, 15, 70, 50, 70, 90, 80, 85, 80, 100],
      borderColor: "#6C60FF",
      backgroundColor: "#6C60FF",
    },
    {
      label: "Premium Members",
      data: [10, 15, 5, 10, 40, 30, 50, 30, 50, 65, 70, 90],
      borderColor: "#CE2A96",
      backgroundColor: "#CE2A96",
    },
  ];
  const toplocations = [
    {
      label: "USA",
      data: [{ x: 0, y: 0, r: 60 }],
      borderColor: "#356235",
      backgroundColor: "#356235",
    },
    {
      label: "Australia",
      data: [{ x: 0.5, y: 0, r: 80 }],
      borderColor: "#3576F4",
      backgroundColor: "#3576F4",
    },
    {
      label: "England",
      data: [{ x: 1, y: 0.1, r: 70 }],
      borderColor: "#7B61FF",
      backgroundColor: "#7B61FF",
    },
  ];
  return (
    <Layout>
    <div className="w-full">
      <Header headers={[{ href: "analytics", name: "Analytics" }]} />
      <section className="w-full px-8">
        Analytics
        <div className="grid grid-cols-2 gap-6">
          <div className="w-full grid grid-cols-2 gap-6">
            <TotalNum
              title="Total Sessions"
              value={430}
              data={totalSession}
              option={1}
            />
            <TotalNum
              title="Total Visitors"
              value={430}
              data={totalVisitor}
              option={1}
            />
            <TotalNum
              title="Time Spent"
              value={430}
              data={timeSpent}
              option={1}
            />
            <TotalNum
              title="Bounce Rate"
              value={430}
              data={boundRate}
              option={1}
            />
          </div>
          <div className="w-full">
            <BubbleChart data={toplocations} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="w-full h-[300px] border-border border-[1px] rounded-[10px] p-5">
            <LineChart data={monthlyView} option={2} />
          </div>
          <div className="w-full"></div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default Analytics;

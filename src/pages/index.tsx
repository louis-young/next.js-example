import { ApplicationPageLayout } from "@/components/ApplicationPageLayout";

const DashboardPage = () => {
  return (
    <ApplicationPageLayout pageTitle="Dashboard">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
        deleniti adipisci delectus laudantium et quidem similique atque quae
        doloremque animi labore enim a fuga, quos eum? Numquam deleniti veniam
        asperiores iusto blanditiis explicabo magnam sint. Quasi consequuntur
        dolor perspiciatis quae iusto, nostrum repellat atque minus iure,
        reprehenderit, asperiores adipisci. Atque.
      </p>
    </ApplicationPageLayout>
  );
};

export const generateDashboardPagePath = () => {
  return "/";
};

export default DashboardPage;

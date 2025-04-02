import { PageWrapper } from 'layouts';
import { useGetErrorLogsPresenter } from 'models';

export function Observability() {
  const errorLogs = useGetErrorLogsPresenter();

  return (
    <PageWrapper>
      <title>🛖 Error Logs | Adcash influencer manager</title>
      <ul>{errorLogs?.map((errorLog) => <li key={errorLog.id}>{JSON.stringify(errorLog)}</li>)}</ul>
    </PageWrapper>
  );
}

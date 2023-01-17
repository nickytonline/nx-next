import styles from './index.module.css';

interface PageProps {
  time: string;
}

const Index = ({ time }: PageProps) => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <div id="welcome">
      <h1>
        <span> Hello there, </span>
        Welcome dxe-news-center 👋
        <p>It is currently {time}</p>
      </h1>
    </div>
  );
};

export async function getStaticProps() {
  //const time = await getTime();
  const time = new Date().toString();
  // eslint-disable-next-line no-console
  console.log('Current Time: ', time);
  return { props: { time }, revalidate: 60 };
}

export default Index;

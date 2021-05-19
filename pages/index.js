import Options from "../components/Options";
import Pages from "../components/Pages";
import Table from "../components/Table";
import styles from "../styles/Home.module.scss";

export default function Home({ data, pageNo, pageSize, pages }) {
  console.log(pageSize);

  return (
    <div className={styles.tableContainer}>
      <Options />
      <Table data={data} />
      <Pages pageNo={pageNo} pages={pages} numEntries={pageSize} />
    </div>
  );
}

export async function getServerSideProps(context) {
  var data = await fetch("http://localhost:8000/shipments");
  data = await data.json();

  var query = context.query;

  if (query.numEntries) {
    var pageSize = query.numEntries;
  } else {
    var pageSize = 5;
  }

  var pages = data.length / pageSize;

  if (query.page) {
    var pageNo = query.page;
    var start = pageSize * (pageNo - 1) < 0 ? 0 : pageSize * (pageNo - 1);
    var end =
      pageSize * pageNo > data.length ? data.length - 1 : pageSize * pageNo;
    data = data.slice(start, end);
  } else {
    var pageNo = 1;
    data = data.slice(0, pageSize);
  }

  return {
    props: {
      data,
      pageNo,
      pageSize,
      pages,
    }, // will be passed to the page component as props
  };
}

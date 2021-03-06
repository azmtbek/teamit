import styles from "../styles/components/Courses.module.css";
import Button from "./Button";
import Link from "next/link";

const Courses = () => {
  return (
    <div className={`${styles.courses} myPad`} id="courses">
      <div className="title">Kurslarimiz</div>
      <div className={styles.list}>
        <Card link="/courses/3ds" img="3ds.jpg" />
        <Card link="/courses/auto" img="auto.jpg" />
        <Card link="/courses/grafik" img="graphic.jpg" />
        <Card link="/courses/roboto" img="roboto.jpg" />
        <Card link="/courses/web" img="web.jpg" />
        <Card link="/courses/foto" img="foto.png" />
        <Card link="/courses/ofis" img="ofis.jpg" />
        <Card link="/courses/video" img="video.jpg" />
        <div className={styles.listItem}></div>
      </div>
      <Button link="courses" text="Batafsil" />
    </div>
  );
};

const Card = ({ link, img }) => {
  return (
    <div className={styles.listItem}>
      <Link href={link ?? ""}>
        <img src={`/courses/${img}`} alt="" />
        {/* <div className={styles.listItem_title}>Web 2Frontend</div> */}
        {/* <div className={styles.listItem_tags}>
          <span>Javascript</span>
          <span>React</span>
          <span>SASS</span>
        </div> */}
      </Link>
    </div>
  );
};

export default Courses;

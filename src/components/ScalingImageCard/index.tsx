import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

interface ScalingImageCardProps {
  image: string | StaticImport;
  title: string;
  children: JSX.Element;
  link: string;
}

export default function ScalingImageCard(props: ScalingImageCardProps) {
  return (
    <Link href={props.link} className={styles.card}>
      <Image
        src={props.image}
        alt="scalingImageCard"
        className="h-full w-full"
      />
      <div className={`${styles.content} bg-accentColor`}>
        <h3>{props.title}</h3>
        {props.children}
      </div>
    </Link>
  );
}

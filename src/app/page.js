import Image from 'next/image';
import TextosAndT from './Componets/TextAndT/textAndT';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./globals.css";

export default function Home() {
  return (
    <main className="container">
      <div className={`position-relative d-flex justify-content-center align-items-center my-4 ${styles.imageContainer}`}>
        <Image 
          src="/mai.png"
          alt="Descripción de la imagen"
          width={350}
          height={350}
          className="rounded-circle img-fluid"
        />
        
      </div>

      <TextosAndT />
    </main>
  );
}
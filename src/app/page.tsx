import styles from "./page.module.css";
import Banner from "@/components/banner/banner";
import Form from "@/components/form/form";
import DeleteAccount from "@/components/delete-account/delete-account";
import Footer from "@/components/footer/footer";
import Drawer from "@/components/drawer/drawer";

export default function Home() {
  return (
    <>
      <Drawer />
      <div className={styles.container}>
        <aside className={styles.sidebar}>Navigation</aside>

        <main className={styles.main}>
          <Banner />

          <Form />

          <DeleteAccount />

          <div>
            <p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Get in touch with our support team
              </a>{" "}
              if you have any question or want to leave some feedback.
            </p>
            <p>We’ll be happy to hear from you.</p>
          </div>

          <div className={styles.divider} />

          <Footer />
        </main>
      </div>
    </>
  );
}

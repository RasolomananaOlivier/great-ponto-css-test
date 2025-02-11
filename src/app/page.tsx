import styles from "./page.module.css";
import Banner from "@/components/banner/banner";
import Form from "@/components/form/form";
import DeleteAccount from "@/components/delete-account/delete-account";
import Footer from "@/components/footer/footer";
import Drawer from "@/components/drawer/drawer";
import Image from "next/image";
import NavItem from "@/components/nav-item/nav-item";
import UserProfile from "@/components/user-profile/user-profile";
import IconButton from "@/components/icon-button/icon-button";
import { boardAgents, boards, jobs, searches } from "@/constant";

export default function Home() {
  return (
    <>
      <Drawer />
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <div className={styles.header}>
            <Image src="/logo.svg" alt="Logo" width={130} height={42} />
          </div>

          <div className={styles.content}>
            <NavItem title="My templates" icon="/template.svg" />
            <NavItem title="Search" icon="/search.svg">
              {jobs.map((job, index) => (
                <NavItem key={index} title={job} icon="/star.png" subfolder />
              ))}

              {searches.map((search, index) => (
                <NavItem
                  key={index}
                  title={search}
                  icon="/clock.svg"
                  subfolder
                />
              ))}
            </NavItem>
            <NavItem
              title="My boards"
              icon="/board.svg"
              trailing={<IconButton title="add" icon="/add.svg" />}
            >
              {boards.map((board, index) => (
                <NavItem
                  key={index}
                  title={board}
                  icon="/folder.png"
                  subfolder
                />
              ))}

              {boardAgents.map((board, index) => (
                <NavItem key={index} title={board} icon="/lock.png" subfolder />
              ))}
            </NavItem>
          </div>

          <div className={styles.footer}>
            <UserProfile />
          </div>
        </aside>

        <main className={styles.main}>
          <Banner />

          <Form />

          <div className={styles.checkbox}>
            <input type="checkbox" id="myCheckbox" name="myCheckbox" />
            <label htmlFor="myCheckbox">
              Show my profile to serious employers on{" "}
              <a href="https://hirethesbest.io" target="_blanked">
                hirethesbest.io
              </a>{" "}
              for free
            </label>
          </div>

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
